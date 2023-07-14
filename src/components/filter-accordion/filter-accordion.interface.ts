import { FilterContext } from "./utils/season-filter";

export interface IFilterAccordionProps {
  isOpen: boolean;
  onSaveFilter: (filter: FilterContext) => void;
  onClearFilter: () => void;
}
