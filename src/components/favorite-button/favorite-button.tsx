import { HeartIcon } from "@/assets/heart-outline-icon";
import { FC, useState } from "react";
import { IFavoriteButtonProps } from "./favorite-button.interface";
import { FavoriteWrapper } from "./favorite-button.styles";

export const FavoriteButton: FC<IFavoriteButtonProps> = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <FavoriteWrapper isLiked={isLiked} onClick={() => setIsLiked(!isLiked)}>
      <HeartIcon />
    </FavoriteWrapper>
  );
};
