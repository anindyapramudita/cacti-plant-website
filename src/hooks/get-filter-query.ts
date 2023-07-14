import { Filter } from "@/hooks/use-plant-filter";

export const handleUpdateFilter = (filterContext: Filter) => {
  let query: string[] = [];

  if (filterContext.search) {
    query.push(`name match "*${filterContext.search}*"`);
  }

  if (filterContext.filter.water.length > 0) {
    let temp: string[] = [];
    filterContext.filter.water.forEach((waterValue: number | string) => {
      temp.push(`water.level == ${waterValue}`);
    });
    query.push(`(${temp.join(" || ")})`);
  }

  if (filterContext.filter.care.length > 0) {
    let temp: string[] = [];
    filterContext.filter.care.forEach((careValue: number | string) => {
      temp.push(`care.level == ${careValue}`);
    });
    query.push(`(${temp.join(" || ")})`);
  }

  if (filterContext.filter.season.length > 0) {
    let temp: string[] = [];
    filterContext.filter.season.forEach((seasonValue: number | string) => {
      temp.push(`seasons.${seasonValue} == true`);
    });
    query.push(`(${temp.join(" || ")})`);
  }

  const finalQuery = query.length > 0 ? `&& ${query.join(" && ")}` : null;

  return finalQuery;
};
