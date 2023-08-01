import { Dispatch, ReactNode, SetStateAction } from "react";

export type FilterCategory = "water" | "season" | "care";

type Button = {
  label: string;
  value: any;
  icon?: ReactNode;
};
export interface IButtonGroupProps {
  buttons: Button[];
  handleButtonClick: (
    category: FilterCategory,
    value: (string | number)[]
  ) => void;
  category: FilterCategory;
  buttonClear: boolean;
  setButtonClear: Dispatch<SetStateAction<boolean>>;
}
