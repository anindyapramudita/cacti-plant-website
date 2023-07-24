import { FC, useState } from "react";
import { ISmallCardProps } from "./small-card.interface";
import { StylesWrapper } from "./small-card.styles";
import { TransitionImage } from "../image";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";
import { FavoriteButton } from "../favorite-button";
import Link from "next/link";

export const SmallCard: FC<ISmallCardProps> = ({
  data,
  session,
  onLikeClick,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleGetLevel = (level: number) => {
    if (level === 1) return "Low";
    if (level === 2) return "Medium";
    if (level === 3) return "High";
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
            image={data.images[0].src}
            alt={data.images[0].alt}
            placeholder={imagePlaceholder}
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
