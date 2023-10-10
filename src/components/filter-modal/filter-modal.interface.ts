export interface IFilterModalProps {
  open: boolean;
  onClose: () => void;
  onSaveFilter: (filter: FilterContext) => void;
  onClearFilter: () => void;
}

export type FilterContext = {
  water: string | undefined;
  seasons: string[];
  care: string | undefined;
  sun: string | undefined;
  size: string[];
};

export const defaultForm: FilterContext = {
  water: "",
  seasons: [],
  care: "",
  sun: "",
  size: [],
};
