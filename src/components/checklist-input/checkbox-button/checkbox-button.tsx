import { FC } from "react";
import { ICheckboxButtonProps } from "./checkbox-button.interface";
import classNames from "classnames";
import { StylesWrapper } from "./checkbox-button.styles";

export const CheckboxButton: FC<ICheckboxButtonProps> = ({
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
        hidden
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
