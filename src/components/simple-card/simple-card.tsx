import { FC } from "react";
import { ISimpleCardProps } from "./simple-card.interface";
import { StylesWrapper } from "./simple-card.styles";
import { SliderImage } from "../slider-image";
import { IconButton } from "../icon-button";
import classNames from "classnames";

export const SimpleCard: FC<ISimpleCardProps> = ({
  plant,
  id,
  onLikeClick,
}) => {
  return (
    <StylesWrapper>
      <SliderImage images={plant.images} id={id} />
      <IconButton
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "rgba(0, 0, 0, 0.5)",
              height: "24px",
              width: "24px",
              stroke: "white",
              strokeWidth: 2,
              overflow: "visible",
            }}
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
          </svg>
        }
        onClick={onLikeClick}
        className={classNames("like-button", { isLiked: false })}
      />
      <p className="plant-name">{plant.name}</p>
    </StylesWrapper>
  );
};
