interface FilterType {
  water: (number | string)[];
  season: (number | string)[];
  care: (number | string)[];
}

export interface Filter {
  search: string;
  filter: FilterType;
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
