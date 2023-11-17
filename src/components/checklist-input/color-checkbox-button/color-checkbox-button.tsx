import { FC } from "react";
import { IColorCheckboxButtonProps } from "./color-checkbox-button.interface";
import classNames from "classnames";
import { StylesWrapper } from "./color-checkbox-button.styles";

export const ColorCheckboxButton: FC<IColorCheckboxButtonProps> = ({
  id,
  value,
  className,
  register,
  registerName,
  color,
  ...props
}) => {
  return (
    <StylesWrapper color={color}>
      <input
        {...props}
        type="checkbox"
        hidden
        id={id}
        value={value}
        className={classNames(className, "check-box-input")}
        data-testid="checkbox"
        {...register(registerName)}
      />
      <label htmlFor={id} />
    </StylesWrapper>
  );
};
