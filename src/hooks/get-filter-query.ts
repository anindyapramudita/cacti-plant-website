import { Filter } from "./use-plant-filter";

export const handleUpdateFilter = (filterContext: Filter) => {
  let query: string[] = [];

  if (filterContext.search) {
    if (typeof filterContext.search === "string") {
      query.push(`name match "*${filterContext.search}*"`);
    } else if (filterContext.search.length > 0) {
      query.push(`name match "*${filterContext.search[0]}*"`);
    }
  }

  if (filterContext.filter.water) {
    if (typeof filterContext.filter.water === "string") {
      query.push(`water.level == ${filterContext.filter.water}`);
    } else if (filterContext.filter.water.length > 0) {
      query.push(`water.level == ${filterContext.filter.water}`);
    }
  }

  if (filterContext.filter.care) {
    if (typeof filterContext.filter.care === "string") {
      query.push(`care.level == ${filterContext.filter.care}`);
    } else if (filterContext.filter.care.length > 0) {
      query.push(`care.level == ${filterContext.filter.care[0]}`);
    }
  }

  if (filterContext.filter.size) {
    if (typeof filterContext.filter.size === "string") {
      query.push(`size.level == ${filterContext.filter.size}`);
    } else if (filterContext.filter.size.length > 0) {
      let temp: string[] = [];
      filterContext.filter.size.forEach((size: number | string) => {
        temp.push(`size.level == ${size}`);
      });
      query.push(`(${temp.join(" || ")})`);
    }
  }

  if (filterContext.filter.seasons) {
    if (typeof filterContext.filter.seasons === "string") {
      query.push(`seasons.${filterContext.filter.seasons} == true`);
    } else if (filterContext.filter.seasons.length > 0) {
      let temp: string[] = [];
      filterContext.filter.seasons.forEach((seasonValue: number | string) => {
        temp.push(`seasons.${seasonValue} == true`);
      });
      query.push(`(${temp.join(" || ")})`);
    }
  }

  const finalQuery = query.length > 0 ? `&& ${query.join(" && ")}` : null;

  return finalQuery;
};
