import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IColorCheckboxButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  registerName: string;
  register: UseFormRegister<any>;
  color: string;
}
