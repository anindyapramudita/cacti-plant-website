import { FilterContext } from "../filter-accordion/utils/season-filter";

export interface IFilterHeaderProps {
  onSaveFilter: (filter: FilterContext) => void;
  onSaveSearch: (search: string) => void;
  onClearFilter: () => void;
}
