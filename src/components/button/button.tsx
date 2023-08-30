import { FC } from "react";
import { Loader } from "../loader";
import { IButtonProps } from "./button.interface";
import { StylesWrapper } from "./button.styles";

export const Button: FC<IButtonProps> = ({
  children,
  className,
  disabled = false,
  isLoading = false,
  variant = "filled",
  color = "primary",
  size = "medium",
  fullWidth = false,
  loaderDot = 3,
  loaderSize = "small",
  icon,
  ...props
}) => {
  if (!children) {
    return null;
  }

  return (
    <StylesWrapper
      {...props}
      data-testid="button"
      disabled={disabled || isLoading}
      className={[
        `button-${variant}-${color}`,
        `size-${size}`,
        `${fullWidth ? "button-fullwidth" : ""}`,
        `${isLoading ? "button-loading" : ""}`,
        className,
      ].join(" ")}
    >
      {icon && !isLoading && <div className="button-icon">{icon}</div>}
      {children}
      {isLoading && <Loader size={loaderSize} number={loaderDot} />}
    </StylesWrapper>
  );
};
