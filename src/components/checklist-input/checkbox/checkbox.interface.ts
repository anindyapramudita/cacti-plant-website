import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  registerName: string;
  register: UseFormRegister<any>;
}
