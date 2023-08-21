export interface IFilterAccordionProps {
  isOpen: boolean;
  onSaveFilter: (filter: FilterContext) => void;
  onClearFilter: () => void;
}

export type FilterContext = {
  water: (number | string)[];
  season: (number | string)[];
  care: (number | string)[];
};

export const defaultForm: FilterContext = {
  water: [],
  season: [],
  care: [],
};
