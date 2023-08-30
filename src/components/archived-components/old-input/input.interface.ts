import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IInputProps {
  id: string;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  isVisible?: boolean;
  onClick?: () => void;
  type?: HTMLInputTypeAttribute;
}
