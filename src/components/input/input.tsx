import { FC } from "react";
import { IInputContainerProps } from "./input.interface";
import { StylesWrapper } from "./input.styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const InputContainer: FC<IInputContainerProps> = ({
  children,
  id,
  label,
  isVisible,
  onClick,
}) => {
  return (
    <StylesWrapper className="input-wrapper">
      {children}
      <label htmlFor={id}>{label}</label>
      {onClick ? (
        <button onClick={onClick} type="button" className="eye-icon">
          {isVisible ? (
            <AiOutlineEyeInvisible size={20} />
          ) : (
            <AiOutlineEye size={20} />
          )}
        </button>
      ) : null}
    </StylesWrapper>
  );
};
