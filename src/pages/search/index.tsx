import { FilterHeader } from "@/components/filter-header";
import { getPlants } from "@/sanity/get-plants";
import { handleUpdateFilter } from "@/hooks/get-filter-query";
import { Filter } from "@/hooks/use-plant-filter";
import { useState } from "react";
import { FilterContext } from "@/components/filter-accordion/utils/season-filter";

const defaultFilter = {
  search: "",
  filter: {
    water: [],
    season: [],
    care: [],
  },
};

export default function SearchPage() {
  const [filterQuery, setFilterQuery] = useState<Filter>(defaultFilter);

  const handleSaveSearch = async (search: string) => {
    let temp = { ...filterQuery };
    temp.search = search;
    setFilterQuery(temp);

    handleUpdateData(temp);
  };

  const handleSaveFilter = async (filter: FilterContext) => {
    let temp = { ...filterQuery };
    temp.filter = filter;
    setFilterQuery(temp);

    handleUpdateData(temp);
  };

  const handleUpdateData = async (newQuery: Filter) => {
    const query = handleUpdateFilter(newQuery);
    const newData = await getPlants(0, query);

    console.log("newData", newData);
  };

  const handleClearFilter = async () => {
    setFilterQuery(defaultFilter);
    const newData = await getPlants(0);

    console.log("newData", newData);
  };

  return (
    <>
      <FilterHeader
        onSaveSearch={handleSaveSearch}
        onSaveFilter={handleSaveFilter}
        onClearFilter={handleClearFilter}
      />
    </>
  );
}

export async function getServerSideProps() {
  const data = await getPlants(0);

  return {
    props: {
      plants: data,
    },
  };
}
