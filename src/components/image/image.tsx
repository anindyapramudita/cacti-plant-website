import Image from "next/image";
import { FC } from "react";
import { IImageProps } from "./image.interface";
import { NO_IMAGE, NO_IMAGE_ALT } from "./image.constants";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";

export const TransitionImage: FC<IImageProps> = ({
  image = NO_IMAGE,
  placeholder = imagePlaceholder,
  alt = NO_IMAGE_ALT,
}) => {
  return (
    <Image
      src={image}
      blurDataURL={placeholder}
      alt={alt}
      width={600}
      height={800}
      placeholder="blur"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    />
  );
};
