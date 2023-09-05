import { FC, useState } from "react";
import { ISmallCardProps } from "./small-card.interface";
import { StylesWrapper } from "./small-card.styles";
import { IconButton } from "../icon-button";
import { AiFillHeart } from "react-icons/ai";
import classNames from "classnames";
import { SliderImage } from "../slider-image";

export const SmallCard: FC<ISmallCardProps> = ({
  data,
  // session,
  // onLikeClick,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  if (!data) {
    return null;
  }

  return (
    <StylesWrapper>
      <div className="card-image">
        <SliderImage
          images={data.images}
          width={300}
          height={300}
          imageLink={`/plant/${data._id}`}
        />
        {/* <Link href={`/plant/${data._id}`}>
          <TransitionImage
            image={data?.images[0]?.src}
            alt={data?.images[0]?.alt}
          />
        </Link> */}
        <IconButton
          icon={<AiFillHeart size={30} type="button" className="love-icon" />}
          className={classNames("favorite-button", { clicked: isLiked })}
          onClick={() => setIsLiked(!isLiked)}
        />
        {/* <FavoriteButton onLikeClick={handleLikeClicked} isLiked={isLiked} /> */}
      </div>
      <div className="card-info">
        <p className="plant-name">{data?.name}</p>
      </div>
    </StylesWrapper>
  );
};
