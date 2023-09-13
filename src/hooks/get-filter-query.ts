import { Filter } from "@/hooks/use-plant-filter";

export const handleUpdateFilter = (filterContext: Filter) => {
  let query: string[] = [];

  if (filterContext.search) {
    query.push(`name match "*${filterContext.search}*"`);
  }

  if (filterContext.filter.water) {
    query.push(`water.level == ${filterContext.filter.water}`);
  }

  if (filterContext.filter.care) {
    query.push(`care.level == ${filterContext.filter.care}`);
  }

  if (filterContext.filter.size.length > 0) {
    let temp: string[] = [];
    filterContext.filter.size.forEach((careValue: number) => {
      temp.push(`size.level == ${careValue}`);
    });
    query.push(`(${temp.join(" || ")})`);
  }

  if (filterContext.filter.seasons.length > 0) {
    let temp: string[] = [];
    filterContext.filter.seasons.forEach((seasonValue: number | string) => {
      temp.push(`seasons.${seasonValue} == true`);
    });
    query.push(`(${temp.join(" || ")})`);
  }

  const finalQuery = query.length > 0 ? `&& ${query.join(" && ")}` : null;

  return finalQuery;
};
