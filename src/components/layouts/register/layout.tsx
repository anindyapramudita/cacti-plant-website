import { FC } from "react";
import { IRegisterLayoutProps } from "./layout.interface";
import { StylesWrapper } from "./layout.styles";

export const RegisterLayout: FC<IRegisterLayoutProps> = ({ children }) => {
  if (!children) {
    return null;
  }

  return (
    <StylesWrapper data-testid="register-layout">{children}</StylesWrapper>
  );
};
