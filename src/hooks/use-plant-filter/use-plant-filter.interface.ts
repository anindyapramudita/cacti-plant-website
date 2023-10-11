interface FilterType {
  water: string | string[] | undefined;
  seasons: string | string[] | undefined;
  care: string | string[] | undefined;
  sun: string | string[] | undefined;
  size: string | string[] | undefined;
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
