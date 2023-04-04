import { FC } from "react";
import { IHomeLayoutProps } from "./layout.interface";
import { StylesWrapper } from "./layout.styles";

export const HomeLayout: FC<IHomeLayoutProps> = ({ children }) => {
  if (!children) {
    return null;
  }

  return <StylesWrapper data-testid="card-layout">{children}</StylesWrapper>;
};
