import { FC } from "react";
import { IShuffleButtonProps } from "./shuffle-button.interface";
import { StylesWrapper } from "./shuffle-button.styles";
import { BiShuffle } from "react-icons/bi";

export const ShuffleButton: FC<IShuffleButtonProps> = ({ onClick }) => {
  return (
    <StylesWrapper data-testid="shuffle-button" onClick={onClick}>
      <BiShuffle size={20} />
    </StylesWrapper>
  );
};
