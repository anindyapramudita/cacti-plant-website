interface FilterType {
  water: number[];
  season: string[];
  difficulty: number[];
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
