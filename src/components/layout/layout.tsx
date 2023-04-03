import { FC } from "react";
import { ILayoutProps } from "./layout.interface";
import { StylesWrapper } from "./layout.styles";

export const Layout: FC<ILayoutProps> = ({ children }) => {
  if (!children) {
    return null;
  }

  return <StylesWrapper data-testid="card-layout">{children}</StylesWrapper>;
};
