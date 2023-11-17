import { FilterType } from "@/hooks/use-plant-filter/use-plant-filter.interface";
import { ReactElement } from "react";

export interface IPlantFilterProps {
  onSaveFilter: (filter: FilterContext) => void;
  onClearFilter: () => void;
  defaultFilter?: FilterType;
}

export type Range = {
  name: "care" | "water" | "sun" | "size";
  icon: ReactElement;
  label: string[];
  information: string;
};

export type Seasons = {
  label: string;
  value: string;
};

export type FilterContext = {
  water: string | undefined;
  care: string | undefined;
  sun: string | undefined;
  size: string | undefined;
  seasons: string | string[] | undefined;
  colors: string | string[] | undefined;
};
