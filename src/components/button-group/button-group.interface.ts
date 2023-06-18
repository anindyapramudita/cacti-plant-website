import { ReactNode } from "react";

type FilterCategory = "water" | "season" | "difficulty";

type button = {
  label: string;
  value: any;
  icon?: ReactNode;
};
export interface IButtonGroupProps {
  buttons: button[];
  handleButtonClick: (category: FilterCategory, value: string | number) => void;
  category: FilterCategory;
}
