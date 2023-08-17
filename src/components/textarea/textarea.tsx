import { FC } from "react";
import { StylesWrapper } from "./textarea.styles";
import { ITextareaProps } from "./textarea.interface";

export const Textarea: FC<ITextareaProps> = ({
  id,
  label,
  name,
  register,
  rows = 1,
  width,
}) => {
  return (
    <StylesWrapper
      className="textarea-wrapper"
      data-testid="textarea-container"
      width={width}
    >
      <textarea
        className="textarea-component"
        rows={rows}
        id={id}
        placeholder=" "
        {...register(name)}
        data-testid="textarea-component"
      />
      <label className="textarea-label" htmlFor={id}>
        {label}
      </label>
    </StylesWrapper>
  );
};
