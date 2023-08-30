import { FC } from "react";
import { IInputProps } from "./input.interface";
import { StylesWrapper } from "./input.styles";
import classNames from "classnames";

export const Input: FC<IInputProps> = ({
  id,
  label,
  name,
  register,
  type = "text",
  icon,
  helperText,
  inputStatus = "default",
}) => {
  return (
    <StylesWrapper className="wrapper" data-testid="input-container">
      <div className="input-container">
        <input
          type={type}
          id={id}
          placeholder=" "
          {...register(name)}
          data-testid="input-component"
          className={classNames(
            "input-component",
            { "with-icon": icon },
            `input-${inputStatus}`
          )}
        />
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
        {icon && <div className="icon">{icon}</div>}
      </div>
      {helperText && (
        <p className={classNames("helper-text", `helper-text-${inputStatus}`)}>
          {helperText}
        </p>
      )}
    </StylesWrapper>
  );
};
