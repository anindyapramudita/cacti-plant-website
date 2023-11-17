import { FilterType } from "@/hooks/use-plant-filter/use-plant-filter.interface";

export interface IFilterModalProps {
  open: boolean;
  onClose: () => void;
  onSaveFilter: (filter: FilterContext) => void;
  onClearFilter: () => void;
  defaultFilter?: FilterType;
}

export type FilterContext = {
  water: string | undefined;
  seasons: string | string[] | undefined;
  care: string | undefined;
  sun: string | undefined;
  size: string | undefined;
  colors: string | string[] | undefined;
};

export const defaultForm: FilterContext = {
  water: "",
  seasons: [],
  care: "",
  sun: "",
  size: "",
  colors: [],
};
