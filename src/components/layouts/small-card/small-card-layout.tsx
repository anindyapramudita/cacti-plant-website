import { FC } from "react";
import { ISmallCardLayoutProps } from "./small-card-layout.interface";
import { StylesWrapper } from "./small-card-layout.styles";

export const SmallCardLayout: FC<ISmallCardLayoutProps> = ({ children }) => {
  if (!children) {
    return null;
  }

  return <StylesWrapper data-testid="card-layout">{children}</StylesWrapper>;
};
