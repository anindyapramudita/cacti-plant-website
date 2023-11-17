export interface FilterType {
  water: string | undefined;
  care: string | undefined;
  sun: string | undefined;
  size: string | undefined;
  seasons: string | string[] | undefined;
  colors: string | string[] | undefined;
}

export interface Filter {
  search: string | string[] | undefined;
  filter: FilterType;
}

export interface SearchFilter {
  search: string;
}

export interface FilterActionSearch {
  type: "search.plant";
  payload: string;
}

export interface FilterActionUpdateFilter {
  type: "update.filter";
  payload: FilterType;
}

export interface FilterActionClear {
  type: "clear";
}

export type FilterAction =
  | FilterActionSearch
  | FilterActionUpdateFilter
  | FilterActionClear;
