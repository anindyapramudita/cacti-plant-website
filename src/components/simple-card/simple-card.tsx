import { FC, useEffect, useState } from "react";
import { ISimpleCardProps } from "./simple-card.interface";
import { StylesWrapper } from "./simple-card.styles";
import { SliderImage } from "../slider-image";
import { IconButton } from "../icon-button";
import classNames from "classnames";
import { AiOutlinePlus } from "react-icons/ai";

export const SimpleCard: FC<ISimpleCardProps> = ({
  plant,
  id,
  onLikeClick,
  isLiked,
  onCollectionClick,
  ...props
}) => {
  const [liked, setLiked] = useState(isLiked);

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);

  const handleLike = async () => {
    const response = await onLikeClick(id);
    if (response) {
      setLiked(!liked);
    }
  };

  return (
    <StylesWrapper {...props}>
      <SliderImage images={plant.images} id={id} />
      <IconButton
        icon={<AiOutlinePlus size={15} className="collection-icon" />}
        onClick={() => onCollectionClick(id)}
        className="collection-button"
      />
      <IconButton
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="like-icon"
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
          </svg>
        }
        onClick={handleLike}
        className={classNames("like-button", { "is-liked": liked })}
      />
      <p className="plant-name">{plant.name}</p>
    </StylesWrapper>
  );
};
