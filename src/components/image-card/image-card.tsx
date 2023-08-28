import { FC } from "react";
import { IImageCardProps } from "./index";
import { NO_IMAGE, NO_IMAGE_ALT } from "./image-card.constants";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";
import { StyledImage } from "./image-card.styles";
import classNames from "classnames";

export const ImageCard: FC<IImageCardProps> = ({
  src = NO_IMAGE,
  alt = NO_IMAGE_ALT,
  width = 600,
  height = 800,
  carousel = false,
  className = "",
  ...props
}) => {
  return (
    <StyledImage
      {...props}
      className={classNames({ carousel: carousel }, className)}
      src={src}
      blurDataURL={imagePlaceholder}
      alt={alt}
      width={width}
      height={height}
      placeholder="blur"
      style={{
        objectFit: "cover",
      }}
    />
  );
};
