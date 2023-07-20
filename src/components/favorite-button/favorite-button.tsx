import { FC } from "react";
import { IFavoriteButtonProps } from "./favorite-button.interface";
import { FavoriteWrapper } from "./favorite-button.styles";
import { AiFillHeart } from "react-icons/ai";

export const FavoriteButton: FC<IFavoriteButtonProps> = ({
  onLikeClick,
  isLiked,
}) => {
  return (
    <FavoriteWrapper isLiked={isLiked} onClick={onLikeClick}>
      <AiFillHeart />
    </FavoriteWrapper>
  );
};
