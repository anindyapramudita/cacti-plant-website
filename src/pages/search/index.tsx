import { FilterHeader } from "@/components/filter-header";
import { getPlants } from "@/sanity/get-plants";
import { handleUpdateFilter } from "@/hooks/get-filter-query";
import { Filter } from "@/hooks/use-plant-filter";
import { useState } from "react";
import { FilterContext } from "@/components/filter-accordion/utils/season-filter";
import { plantDataType } from "@/shared/type/data-types";
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
  plants: plantDataType[];
  onLikeClick: () => void;
};

export default function SearchPage({ plants, onLikeClick }: SearchProp) {
  const [filterQuery, setFilterQuery] = useState<Filter>(defaultFilter);
  const [data, setData] = useState<plantDataType[]>(plants);
  const { data: session } = useSession();
  const [totalPage, setTotalPage] = useState<number>(
    Math.ceil(plants[0].total / 10)
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const offset = 10;

  const onSaveSearch = async (search: string) => {
    let temp = { ...filterQuery };
    temp.search = search;
    setFilterQuery(temp);

    handleUpdateData(temp);
  };

  const onSaveFilter = async (filter: FilterContext) => {
    let temp = { ...filterQuery };
    temp.filter = filter;
    setFilterQuery(temp);

    handleUpdateData(temp);
  };

  const handleUpdateData = async (newQuery: Filter) => {
    const query = handleUpdateFilter(newQuery);
    const newData = await getPlants(0, query, offset);

    setData(newData);
    setCurrentPage(1);
    setTotalPage(Math.ceil(newData[0].total / 10));
  };

  const onClearFilter = async () => {
    setFilterQuery(defaultFilter);
    const newData = await getPlants(0, null, 10);

    setData(newData);
    setTotalPage(Math.ceil(newData[0].total / 10));
    setCurrentPage(1);
  };

  const handlePageClick = async (newPage: number) => {
    setCurrentPage(newPage);
    const newId = (newPage - 1) * offset;
    const query = handleUpdateFilter(filterQuery);
    const newData = await getPlants(newId, query, offset);

    setData(newData);
  };

  return (
    <>
      <FilterHeader
        onSaveSearch={onSaveSearch}
        onSaveFilter={onSaveFilter}
        onClearFilter={onClearFilter}
      />
      <SmallCardLayout>
        {data.map((plant, index) => (
          <SmallCard
            data={plant}
            key={index}
            onLikeClick={onLikeClick}
            session={session}
          />
        ))}
      </SmallCardLayout>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
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
