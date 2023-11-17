import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IRangeInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<any>;
}
