import { FilterContext } from "./components/filter-accordion/filter-accordion.interface";

export interface IFilterHeaderProps {
  onSaveFilter: (filter: FilterContext) => void;
  onSaveSearch: (search: string) => void;
  onClearFilter: () => void;
}
