import { UseFormRegister } from "react-hook-form";

export interface ITextareaProps {
  id: string;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  rows?: number;
  width?: string;
}
