import { IButtonProps } from "../button.interface";

export const buttonMockPrimary: IButtonProps = {
  children: "Click me",
  color: "primary",
  variant: "filled",
  size: "medium",
  isLoading: false,
  disabled: false,
  fullWidth: false,
  loaderDot: 3,
  loaderSize: "small",
  icon: <div />,
};

export const buttonMockSecondary: IButtonProps = {
  children: "Submit",
  color: "secondary",
  variant: "filled",
  size: "large",
  isLoading: false,
  disabled: false,
  fullWidth: false,
  icon: <div />,
};

export const buttonMockMonochrome: IButtonProps = {
  children: "Cancel",
  color: "monochrome",
  variant: "outlined",
  size: "small",
  isLoading: false,
  disabled: true,
  fullWidth: false,
  loaderDot: 1,
  loaderSize: "mini",
  icon: <div />,
};
