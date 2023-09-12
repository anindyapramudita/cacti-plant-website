import { FC } from "react";
import { StylesWrapper } from "./check-radio.styles";
import { ICheckRadioProps } from "./check-radio.interface";
import classNames from "classnames";

export const CheckRadio: FC<ICheckRadioProps> = ({
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
        hidden
        type="radio"
        id={id}
        value={value}
        className={classNames(className, "check-button-input")}
        data-testid="checkbox"
        {...register(registerName)}
      />
      <label htmlFor={id} className="check-box-label">
        {label}
      </label>
    </StylesWrapper>
  );
};
