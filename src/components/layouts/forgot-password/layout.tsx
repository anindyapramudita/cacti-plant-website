import { FC } from "react";
import { StylesWrapper } from "./layout.styles";
import { IForgotPasswordLayoutProps } from "./layout.interface";

export const ForgotPasswordLayout: FC<IForgotPasswordLayoutProps> = ({
  children,
}) => {
  if (!children) {
    return null;
  }

  return (
    <StylesWrapper data-testid="forgot-password-layout">
      {children}
    </StylesWrapper>
  );
};
