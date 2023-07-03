import { plantImagesType } from "@/shared/types";
import { Dispatch, SetStateAction } from "react";

export interface ICarouselImage {
  images: plantImagesType[];
  restartImage: boolean;
  setRestartImage: Dispatch<SetStateAction<boolean>>;
}
