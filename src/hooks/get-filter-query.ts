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
      if (filterContext.filter.water !== "3")
        query.push(
          `water.level == ${parseInt(filterContext.filter.water) + 1}`
        );
    }
  }

  if (filterContext.filter.care) {
    if (typeof filterContext.filter.care === "string") {
      if (filterContext.filter.care !== "3")
        query.push(`care.level == ${parseInt(filterContext.filter.care) + 1}`);
    }
  }

  if (filterContext.filter.size) {
    if (typeof filterContext.filter.size === "string") {
      if (filterContext.filter.size !== "3")
        query.push(`size.level == ${parseInt(filterContext.filter.size) + 1}`);
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

  if (filterContext.filter.colors) {
    if (typeof filterContext.filter.colors === "string") {
      query.push(`colors == ${filterContext.filter.colors}`);
    } else if (filterContext.filter.colors.length > 0) {
      let temp: string[] = [];
      filterContext.filter.colors.forEach((colorValue: number | string) => {
        temp.push(`color == ${colorValue}`);
      });
      query.push(`(${temp.join(" || ")})`);
    }
  }

  const finalQuery = query.length > 0 ? `&& ${query.join(" && ")}` : null;

  return finalQuery;
};
