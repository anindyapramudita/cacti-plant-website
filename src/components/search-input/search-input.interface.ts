import { InputHTMLAttributes } from "react";

export interface ISeachInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onSaveSearch: (search: string) => void;
}
