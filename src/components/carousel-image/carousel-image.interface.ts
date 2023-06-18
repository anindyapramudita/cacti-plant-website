import { plantImagesType } from "@/shared/types";
import { Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface ICarouselImage {
  images: plantImagesType[];
  restartImage: boolean;
  setRestartImage: Dispatch<SetStateAction<boolean>>;
}

// export interface IImageProps extends HTMLAttributes<HTMLImageElement> {
//   image: string;
//   placeholder: string;
//   alt: string;
// }

// export interface IImageProps extends HTMLAttributes<HTMLImageElement>{
//   lowQualityImage: string;
//   highQualityImage: any;
// }
