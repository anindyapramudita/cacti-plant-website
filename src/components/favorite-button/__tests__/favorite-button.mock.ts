import { IFavoriteButtonProps } from "../favorite-button.interface";

export const favoriteButtonMock: IFavoriteButtonProps = {
  onLikeClick: () => {
    console.log("Clicked on like button");
  },
  isLiked: true,
};
