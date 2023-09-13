export interface IFilterModalProps {
  open: boolean;
  onClose: () => void;
  onSaveFilter: (filter: FilterContext) => void;
  onClearFilter: () => void;
}

export type FilterContext = {
  water: number | null;
  seasons: string[];
  care: number | null;
  sun: number | null;
  size: number[];
};

export const defaultForm: FilterContext = {
  water: null,
  seasons: [],
  care: null,
  sun: null,
  size: [],
};
