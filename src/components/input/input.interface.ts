import { InputHTMLAttributes, ReactElement } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export interface IInputContainerProps {
  children: ReactElement;
  id: string;
  label: string;
  isVisible?: boolean;
  onClick?: () => void;
}
