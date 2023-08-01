import { FilterHeader } from "@/components/filter-header";
import { getPlants } from "@/sanity/get-plants";
import { handleUpdateFilter } from "@/hooks/get-filter-query";
import { Filter } from "@/hooks/use-plant-filter";
import { useState } from "react";
import { FilterContext } from "@/components/filter-accordion/utils/season-filter";
import { PlantDataType } from "@/shared/type/data-types";
import { SmallCard } from "@/components/small-card";
import { SmallCardLayout } from "@/components/layouts/small-card";
import { useSession } from "next-auth/react";
import { Pagination } from "@/components/pagination";

const defaultFilter = {
  search: "",
  filter: {
    water: [],
    season: [],
    care: [],
  },
};

type SearchProp = {
  plants: PlantDataType[];
  onLikeClick: () => void;
};

export default function SearchPage({ plants, onLikeClick }: SearchProp) {
  const [currentState, setCurrentState] = useState<{
    filterQuery: Filter;
    data: PlantDataType[];
    totalPage: number;
    currentPage: number;
    offset: number;
  }>({
    filterQuery: defaultFilter,
    data: plants,
    totalPage: Math.ceil(plants[0].total / 10),
    currentPage: 1,
    offset: 10,
  });

  const { data: session } = useSession();

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
      filterQuery: defaultFilter,
      data: newData,
      currentPage: 1,
      totalPage: Math.ceil(newData[0].total / 10),
    });
  };

  const handlePageClick = async (newPage: number) => {
    const newId = (newPage - 1) * currentState.offset;
    const query = handleUpdateFilter(currentState.filterQuery);
    const newData = await getPlants(newId, query, currentState.offset);

    setCurrentState({ ...currentState, currentPage: newPage, data: newData });
  };

  return (
    <>
      <FilterHeader
        onSaveSearch={handleSaveSearch}
        onSaveFilter={handleSaveFilter}
        onClearFilter={handleClearFilter}
      />
      <SmallCardLayout>
        {currentState.data.map((plant, index) => (
          <SmallCard
            data={plant}
            key={index}
            onLikeClick={onLikeClick}
            session={session}
          />
        ))}
      </SmallCardLayout>
      <Pagination
        totalPage={currentState.totalPage}
        currentPage={currentState.currentPage}
        onPageClick={handlePageClick}
      />
    </>
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
