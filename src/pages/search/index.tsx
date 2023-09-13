import { getPlants } from "@/sanity/get-plants";
import { handleUpdateFilter } from "@/hooks/get-filter-query";
import { Filter } from "@/hooks/use-plant-filter";
import { useState } from "react";
import { PlantDataType } from "@/shared/type/data-types";
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

const defaultSearch = {
  search: "",
};

const defaultForm = {
  search: "",
  filter: {
    water: null,
    seasons: [],
    care: null,
    sun: null,
    size: [],
  },
};

type SearchProp = {
  plants: PlantDataType[];
  onLikeClick: () => void;
};

export default function SearchPage({ plants, onLikeClick }: SearchProp) {
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [currentState, setCurrentState] = useState<{
    filterQuery: Filter;
    data: PlantDataType[];
    totalPage: number;
    currentPage: number;
    offset: number;
  }>({
    filterQuery: defaultForm,
    data: plants,
    totalPage: Math.ceil(plants[0].total / 10),
    currentPage: 1,
    offset: 10,
  });

  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);

  const { data: session } = useSession();

  const { register, handleSubmit } = useForm<SearchFilter>({
    defaultValues: defaultSearch,
  });

  const handleSaveSearch = async (search: string) => {
    let temp = { ...currentState.filterQuery };
    temp.search = search;
    setCurrentState({ ...currentState, filterQuery: temp });

    handleUpdateData(temp);
  };

  const handleSaveFilter = async (filter: FilterContext) => {
    let temp = { ...currentState.filterQuery };
    temp.filter = filter;
    setCurrentState({ ...currentState, filterQuery: temp });

    handleUpdateData(temp);
  };

  const handleUpdateData = async (newQuery: Filter) => {
    const query = handleUpdateFilter(newQuery);
    const newData = await getPlants(0, query, currentState.offset);

    setCurrentState({
      ...currentState,
      data: newData,
      currentPage: 1,
      totalPage: Math.ceil(newData[0].total / 10),
    });
  };

  const handleClearFilter = async () => {
    const newData = await getPlants(0, null, 10);
    setCurrentState({
      ...currentState,
      filterQuery: defaultForm,
      data: newData,
      currentPage: 1,
      totalPage: Math.ceil(newData[0].total / 10),
    });
  };

  const handlePageClick = async (newPage: number) => {
    setImageLoading(true);

    const newId = (newPage - 1) * currentState.offset;
    const query = handleUpdateFilter(currentState.filterQuery);
    const newData = await getPlants(newId, query, currentState.offset);

    if (newData) {
      setImageLoading(false);
      setCurrentState({ ...currentState, currentPage: newPage, data: newData });
    }
  };

  const onSubmit = handleSubmit((data) => {
    handleSaveSearch(data.search);
  });

  const handleLikeClick = () => {
    if (session) {
      console.log("like!");
    } else {
      onLikeClick();
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
          ) : (
            currentState.data.map((plant, index) => (
              <SimpleCard
                plant={plant}
                key={index}
                id={plant._id}
                onLikeClick={handleLikeClick}
              />
            ))
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

export async function getServerSideProps() {
  const data = await getPlants(0, null, 10);

  return {
    props: {
      plants: data,
    },
  };
}
