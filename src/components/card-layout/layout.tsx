import { FC } from "react";
import { ICardLayoutProps } from "./layout.interface";
import { StylesWrapper } from "./layout.styles";

export const CardLayout: FC<ICardLayoutProps> = ({ children }) => {
  if (!children) {
    return null;
  }

  return <StylesWrapper data-testid="card-layout">{children}</StylesWrapper>;
};
