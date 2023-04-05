import Image from "next/image";
import { FC } from "react";
import { IImageProps } from "./image.interface";

export const TransitionImage: FC<IImageProps> = ({
  image,
  placeholder,
  alt,
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
