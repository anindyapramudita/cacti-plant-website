import { FC } from "react";
import { IShuffleButtonProps } from "./shuffle-button.interface";
import { StylesWrapper } from "./shuffle-button.styles";
import { BiShuffle } from "react-icons/bi";

export const ShuffleButton: FC<IShuffleButtonProps> = ({ handleShuffle }) => {
  return (
    <StylesWrapper data-testid="shuffle-button" onClick={handleShuffle}>
      <BiShuffle size={20} />
    </StylesWrapper>
  );
};
