interface FilterType {
  water: number | null;
  seasons: string[];
  care: number | null;
  sun: number | null;
  size: number[];
}

export interface Filter {
  search: string;
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
