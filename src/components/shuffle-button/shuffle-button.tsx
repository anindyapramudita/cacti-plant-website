import { FC } from "react";
import { IShuffleButtonProps } from "./shuffle-button.interface";
import { StylesWrapper } from "./shuffle-button.styles";
import { BiShuffle } from "react-icons/bi";

export const ShuffleButton: FC<IShuffleButtonProps> = ({ handleShuffle }) => {
  return (
    <StylesWrapper data-testid="button" onClick={handleShuffle}>
      <BiShuffle color="white" size={20} />
    </StylesWrapper>
  );
};
