import { FC, useState } from "react";
import { IFavoriteButtonProps } from "./favorite-button.interface";
import { FavoriteWrapper } from "./favorite-button.styles";
import { AiFillHeart } from "react-icons/ai";
import { useSession } from "next-auth/react";

export const FavoriteButton: FC<IFavoriteButtonProps> = ({
  openLoginModal,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { data } = useSession();

  const onClick = () => {
    data?.user?.name ? setIsLiked(!isLiked) : openLoginModal();
  };
  return (
    <FavoriteWrapper isLiked={isLiked} onClick={onClick}>
      <AiFillHeart />
    </FavoriteWrapper>
  );
};
