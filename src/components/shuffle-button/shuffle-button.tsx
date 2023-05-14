import { ShuffleIcon } from "@/assets/shuffle-icon";
import { FC } from "react";
import { IShuffleButtonProps } from "./shuffle-button.interface";
import { StylesWrapper } from "./shuffle-button.styles";

export const ShuffleButton: FC<IShuffleButtonProps> = () => {
  return (
    <StylesWrapper data-testid="button">
      <ShuffleIcon color="white" />
    </StylesWrapper>
  );
};
