import { FC } from "react";
import { Loader } from "../loader";
import { IButtonProps } from "./button.interface";
import { StylesWrapper, StylesText } from "./button.styles";

export const Button: FC<IButtonProps> = ({
  children,
  disabled = false,
  isLoading = false,
  variant = "filled",
  color = "primary",
  size = "medium",
  fullWidth = false,
  loaderDot = 3,
  loaderSize = "small",
  ...props
}) => {
  if (!children) {
    return null;
  }

  return (
    <StylesWrapper
      data-testid="button"
      color={color}
      variant={variant}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      <p>{children}</p>
      {isLoading && <Loader size={loaderSize} number={loaderDot} />}
    </StylesWrapper>
  );
};
