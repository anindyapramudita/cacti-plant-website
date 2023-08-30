import { HTMLInputTypeAttribute, ReactElement } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IInputProps {
  id: string;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  type?: HTMLInputTypeAttribute;
  icon?: ReactElement;
  helperText?: string;
  inputStatus?: "default" | "error" | "success";
}
