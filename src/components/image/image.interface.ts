import { HTMLAttributes } from "react";

export interface IImageProps extends HTMLAttributes<HTMLImageElement> {
  image: string;
  placeholder: string;
  alt: string;
}

// export interface IImageProps extends HTMLAttributes<HTMLImageElement>{
//   lowQualityImage: string;
//   highQualityImage: any;
// }
