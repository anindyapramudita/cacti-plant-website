import { FC, useState } from "react";
import { ISmallCardProps, LevelRange } from "./small-card.interface";
import { StylesWrapper } from "./small-card.styles";
import { TransitionImage } from "../image";
import { FavoriteButton } from "../favorite-button";
import Link from "next/link";
import { LEVELS } from "./small-card.constants";

export const SmallCard: FC<ISmallCardProps> = ({
  data,
  session,
  onLikeClick,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleGetLevel = (level: LevelRange = 1) => {
    return LEVELS[level]
  };

  const handleLikeClicked = () => {
    if (!session) {
      onLikeClick();
    } else {
      setIsLiked(!isLiked);
    }
  };

  if (!data) {
    return null;
  }

  return (
    <StylesWrapper>
      <div className="card-image">
        <Link href={`/plant/${data._id}`}>
          <TransitionImage
            image={data?.images[0]?.src}
            alt={data?.images[0]?.alt}
          />
        </Link>
        <FavoriteButton onLikeClick={handleLikeClicked} isLiked={isLiked} />
      </div>
      <div className="card-info">
        <p className="plant-name">{data?.name}</p>
        <p className="plant-info">
          Water Needs: {handleGetLevel(data?.water?.level)}
        </p>
        <p className="plant-info">
          Care Level: {handleGetLevel(data?.care?.level)}
        </p>
      </div>
    </StylesWrapper>
  );
};
