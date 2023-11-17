import { FC } from "react";
import { IRangeInputProps } from "./range-input.interface";
import { StylesWrapper } from "./range-input.styles";

export const RangeInput: FC<IRangeInputProps> = ({
  name,
  register,
  ...props
}) => {
  return (
    <StylesWrapper>
      <input
        type="range"
        {...props}
        className="input-range"
        {...register(name)}
      />
    </StylesWrapper>
  );
};
