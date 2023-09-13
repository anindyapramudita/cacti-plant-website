import { FC } from "react";
import { ICheckboxProps } from "./checkbox.interface";
import classNames from "classnames";
import { StylesWrapper } from "./checkbox.styles";

export const Checkbox: FC<ICheckboxProps> = ({
  id,
  label,
  value,
  className,
  register,
  registerName,
  ...props
}) => {
  return (
    <StylesWrapper>
      <input
        {...props}
        type="checkbox"
        id={id}
        value={value}
        className={classNames(className, "check-box-input")}
        data-testid="checkbox"
        {...register(registerName)}
      />
      <label htmlFor={id}>{label}</label>
    </StylesWrapper>
  );
};
