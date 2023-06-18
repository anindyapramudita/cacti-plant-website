import { ShuffleIcon } from "@/assets/shuffle-icon";
import { FC } from "react";
import { IShuffleButtonProps } from "./shuffle-button.interface";
import { StylesWrapper } from "./shuffle-button.styles";

export const ShuffleButton: FC<IShuffleButtonProps> = ({ handleShuffle }) => {
  return (
    <StylesWrapper data-testid="button" onClick={handleShuffle}>
      <ShuffleIcon color="white" />
    </StylesWrapper>
  );
};
