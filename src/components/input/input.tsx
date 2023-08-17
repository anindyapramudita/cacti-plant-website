import { FC } from "react";
import { IInputProps } from "./input.interface";
import { StylesWrapper } from "./input.styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const Input: FC<IInputProps> = ({
  id,
  label,
  name,
  register,
  isVisible,
  onClick,
  type = "text",
  width,
}) => {
  return (
    <StylesWrapper
      className="input-wrapper"
      data-testid="input-container"
      width={width}
    >
      <input
        type={type}
        id={id}
        placeholder=" "
        className="input-component"
        {...register(name)}
        data-testid="input-component"
      />
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      {onClick ? (
        <button onClick={onClick} type="button" className="eye-icon">
          {isVisible ? (
            <AiOutlineEyeInvisible size={20} data-testid="eye-invisible" />
          ) : (
            <AiOutlineEye size={20} data-testid="eye-visible" />
          )}
        </button>
      ) : null}
    </StylesWrapper>
  );
};
