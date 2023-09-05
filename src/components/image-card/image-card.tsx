import { FC, useState } from "react";
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
  onLoadingComplete,
  ...props
}) => {
  const [loadComplete, setLoadComplete] = useState<boolean>(false);

  const handleOnLoadingComplete = () => {
    setLoadComplete(true);
    if (onLoadingComplete) {
      onLoadingComplete();
    }
  };

  return (
    <StyledImage
      {...props}
      className={classNames({ carousel: carousel && loadComplete }, className)}
      src={src ? src : NO_IMAGE}
      blurDataURL={imagePlaceholder}
      alt={alt ? alt : NO_IMAGE_ALT}
      width={width}
      height={height}
      placeholder="blur"
      style={{
        objectFit: "cover",
      }}
      onLoadingComplete={handleOnLoadingComplete}
    />
  );
};
