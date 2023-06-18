import { ButtonHTMLAttributes } from "react";

export interface IShuffleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleShuffle: () => void;
}
