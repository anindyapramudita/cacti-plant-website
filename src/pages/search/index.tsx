import { getPlants } from "@/sanity/get-plants";
import { handleUpdateFilter } from "@/hooks/get-filter-query";
import { Filter } from "@/hooks/use-plant-filter";
import { useCallback, useEffect, useState } from "react";
import { Collection, PlantDataType } from "@/shared/type/data-types";
import { useSession } from "next-auth/react";
import { Pagination } from "@/components/pagination";
import { StylesWrapper } from "./index.styles";
import { SimpleCard } from "@/components/simple-card";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@/components/button";
import { FilterModal } from "@/components/filter-modal";
import { FilterContext } from "@/components/filter-modal/filter-modal.interface";
import { IconButton } from "@/components/icon-button";
import { SearchFilter } from "@/hooks/use-plant-filter/use-plant-filter.interface";
import { getLikedPlants } from "@/shared/utils/get-liked-plants";
import { likePlant } from "@/shared/utils/like-plant";
import { ToastType } from "@/components/toast/toast.interface";
import { getCollections } from "@/shared/utils/get-collections";
import { GetServerSidePropsContext } from "next";
import { createFilterQueryUrl } from "@/shared/utils/create-filter-query-url";
import { NO_PLANTS_FOUND } from "@/shared/utils/constants";

const defaultSearch = {
  search: "",
};

const defaultForm = {
  search: "",
  filter: {
    water: "",
    seasons: [],
    care: "",
    sun: "",
    size: [],
  },
};

type SearchProp = {
  plants: PlantDataType[];
  onLikeClick: () => void;
  onCollectionClick: (
    plantId: string,
    userId: string,
    collections: Collection[]
  ) => void;
  onUpdateToast: (message: string, type: ToastType) => void;
};

export default function SearchPage({
  plants,
  onLikeClick,
  onCollectionClick,
  onUpdateToast,
}: SearchProp) {
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [collectionModalOpen, setCollectionModalOpen] =
    useState<boolean>(false);
  const [currentState, setCurrentState] = useState<{
    filterQuery: Filter;
    data: PlantDataType[];
    totalPage: number;
    currentPage: number;
    offset: number;
    likedPlants: string[];
  }>({
    filterQuery: defaultForm,
    data: plants,
    totalPage: Math.ceil(plants[0]?.total / 10) || 0,
    currentPage: 1,
    offset: 10,
    likedPlants: [],
  });

  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);

  const { data: session } = useSession();

  const { register, handleSubmit } = useForm<SearchFilter>({
    defaultValues: defaultSearch,
  });

  const handleGetLikedPlants = useCallback(async () => {
    try {
      if (session && session.user.email) {
        const likedPlants = await getLikedPlants(session.user._id);
        if (likedPlants) {
          setCurrentState((prevState) => ({
            ...prevState,
            likedPlants: likedPlants.likedPlantsId,
          }));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [session]);

  const handleGetCollections = useCallback(async () => {
    try {
      if (session && session.user._id && collectionModalOpen) {
        const response = await getCollections(session.user._id);
        if (response) {
          setCollectionModalOpen(false);
          return response.collections;
        }
      } else if (session && session.user._id) {
        const response = await getCollections(session.user._id);
        if (response) {
          return response.collections;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [session, collectionModalOpen]);

  const handleSaveFilter = async (filter: FilterContext) => {
    let temp = { ...currentState.filterQuery };
    temp.filter = filter;
    setCurrentState((prevState) => ({
      ...prevState,
      filterQuery: temp,
    }));

    handleUpdateData(temp);
  };

  useEffect(() => {
    handleGetLikedPlants();
    handleGetCollections();
  }, [handleGetLikedPlants, handleGetCollections]);

  const handleSaveSearch = async (search: string) => {
    let temp = { ...currentState.filterQuery };
    temp.search = search;
    setCurrentState((prevState) => ({
      ...prevState,
      filterQuery: temp,
    }));

    handleUpdateData(temp);
  };

  const handleUpdateData = async (newQuery: Filter) => {
    const query = handleUpdateFilter(newQuery);
    const newData = await getPlants(0, query, currentState.offset);

    setCurrentState((prevState) => ({
      ...prevState,
      data: newData,
      currentPage: 1,
      totalPage: newData.length > 0 ? Math.ceil(newData[0].total / 10) : 0,
    }));

    const queryParams = createFilterQueryUrl(newQuery);
    const newUrl = `${window.location.pathname}?${queryParams}`;

    window.history.replaceState(null, "", newUrl);
  };

  const handleClearFilter = async () => {
    const newData = await getPlants(0, null, 10);
    setCurrentState((prevState) => ({
      ...prevState,
      filterQuery: defaultForm,
      data: newData,
      currentPage: 1,
      totalPage: newData.length > 0 ? Math.ceil(newData[0].total / 10) : 0,
    }));

    const newUrl = `${window.location.pathname}`;
    window.history.replaceState(null, "", newUrl);
  };

  const handlePageClick = async (newPage: number) => {
    setImageLoading(true);

    const newId = (newPage - 1) * currentState.offset;
    const query = handleUpdateFilter(currentState.filterQuery);
    const newData = await getPlants(newId, query, currentState.offset);

    if (newData) {
      setImageLoading(false);
      setCurrentState((prevState) => ({
        ...prevState,
        currentPage: newPage,
        data: newData,
      }));
    }
  };

  const onSubmit = handleSubmit((data) => {
    handleSaveSearch(data.search);
  });

  const handleLikeClick = async (plantId: string) => {
    try {
      if (session && session.user._id) {
        const userId = session.user._id;
        const response = await likePlant(userId, plantId);
        if (response.success) {
          onUpdateToast(response.message, "success");
          return true;
        } else {
          onUpdateToast(response.message, "error");
          return false;
        }
      } else {
        onLikeClick();
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const handleCollectionClick = async (plantId: string) => {
    try {
      if (session && session.user.email) {
        setCollectionModalOpen(true);
        const newCollection = await handleGetCollections();
        console.log("new collections: ", newCollection);
        onCollectionClick(plantId, session?.user._id as string, newCollection);
      } else {
        onLikeClick();
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <StylesWrapper>
      <h2 className="filter-heading">Find your perfect companion plan 🌱</h2>
      <div className="filter-header">
        <form className="filter-input-container" onSubmit={onSubmit}>
          <Input
            id="filter-search-input"
            label="search"
            name="search"
            register={register}
            icon={<IconButton icon={<AiOutlineSearch />} type="submit" />}
            fullWidth={true}
          />
        </form>
        <Button type="button" onClick={() => setFilterModalOpen(true)}>
          Filter
        </Button>
      </div>
      <div className="content-wrapper">
        <div className="simple-card-layout">
          {imageLoading ? (
            <div className="image-loading">Loading...</div>
          ) : currentState.data.length > 0 ? (
            currentState.data.map((plant) => (
              <SimpleCard
                plant={plant}
                key={plant._id}
                onLikeClick={handleLikeClick}
                id={plant._id}
                isLiked={currentState.likedPlants.includes(plant._id)}
                onCollectionClick={handleCollectionClick}
              />
            ))
          ) : (
            <p>{NO_PLANTS_FOUND}</p>
          )}
        </div>
      </div>
      <Pagination
        totalPage={currentState.totalPage}
        currentPage={currentState.currentPage}
        onPageClick={handlePageClick}
      />
      <FilterModal
        open={filterModalOpen}
        onClose={() => setFilterModalOpen(!filterModalOpen)}
        onSaveFilter={handleSaveFilter}
        onClearFilter={handleClearFilter}
      />
    </StylesWrapper>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { search, water, seasons, care, sun, size } = ctx.query;

  const filter: Filter = {
    search,
    filter: {
      water,
      seasons,
      care,
      sun,
      size,
    },
  };

  const query = handleUpdateFilter(filter);
  const data = await getPlants(0, query, 10);

  return {
    props: {
      plants: data,
    },
  };
}
