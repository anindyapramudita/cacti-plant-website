import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export interface IInputContainerProps {
  children: any;
  id: string;
  label: string;
  isVisible?: boolean;
  setIsVisible?: Dispatch<SetStateAction<boolean>>;
}
