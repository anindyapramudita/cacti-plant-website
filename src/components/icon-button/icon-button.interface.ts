import { ButtonHTMLAttributes, ReactElement } from "react";

export interface IIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
}
