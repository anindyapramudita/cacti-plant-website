import Image from "next/image";
// import Image from "next/legacy/image";
import { FC, useEffect, useState } from "react";
import { useProgressiveImage } from "./hook/use-progressive-image";
import { IImageProps } from "./image.interface";
import { StylesWrapper } from "./image.styles";

export const TransitionImage: FC<IImageProps> = ({
  image,
  placeholder,
  alt
}) => {

  return (<Image
      src={image}
      blurDataURL={placeholder}
      alt={alt}
      width={600}
      height={800}
      placeholder="blur"
      style={{
        objectFit: "cover",
        width: '100%',
        height: '100%'
      }}
    />
  );
};
