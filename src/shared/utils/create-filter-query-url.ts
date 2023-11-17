import { Filter } from "@/hooks/use-plant-filter";

export const createFilterQueryUrl = (query: Filter) => {
  const tempQuery = [];

  if (query.search) {
    tempQuery.push(`search=${query.search}`);
  }

  if (typeof query.filter.care === "string") {
    if (query.filter.care && query.filter.care !== "3") {
      tempQuery.push(`care=${query.filter.care}`);
    }
  } else if (query.filter.care && query.filter.care > 0) {
    // } else if (query.filter.care && query.filter.care?.length > 0) {
    tempQuery.push(`care=${query.filter.care[0]}`);
  }

  if (typeof query.filter.water === "string") {
    if (query.filter.water && query.filter.water !== "3") {
      tempQuery.push(`water=${query.filter.water}`);
    }
  } else if (query.filter.water && query.filter.water > 0) {
    // } else if (query.filter.water && query.filter.water?.length > 0) {
    tempQuery.push(`water=${query.filter.water[0]}`);
  }

  if (typeof query.filter.sun === "string") {
    if (query.filter.sun && query.filter.sun !== "3") {
      tempQuery.push(`sun=${query.filter.sun}`);
    }
  } else if (query.filter.sun && query.filter.sun > 0) {
    // } else if (query.filter.sun && query.filter.sun?.length > 0) {
    tempQuery.push(`sun=${query.filter.sun[0]}`);
  }

  if (typeof query.filter.seasons === "string") {
    if (query.filter.seasons) {
      tempQuery.push(`seasons=${query.filter.seasons}`);
    }
  } else if (query.filter.seasons && query.filter.seasons?.length > 0) {
    query.filter.seasons.forEach((season) =>
      tempQuery.push(`seasons=${season}`)
    );
  }

  if (typeof query.filter.colors === "string") {
    if (query.filter.seasons) {
      tempQuery.push(`colors=${query.filter.seasons}`);
    }
  } else if (query.filter.colors && query.filter.colors?.length > 0) {
    query.filter.colors.forEach((color) => tempQuery.push(`colors=${color}`));
  }

  if (typeof query.filter.size === "string") {
    if (query.filter.size && query.filter.size !== "3") {
      tempQuery.push(`size=${query.filter.size}`);
    }
  }
  // else if (query.filter.size && query.filter.size?.length > 0) {
  //   query.filter.size.forEach((size) => tempQuery.push(`size=${size}`));
  // }
  // } else if (query.filter.size && query.filter.size?.length > 0) {
  //   query.filter.size.forEach((size) => tempQuery.push(`size=${size}`));
  // }

  return tempQuery.join("&");
};
