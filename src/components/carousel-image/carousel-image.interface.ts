import { PlantImagesType } from "@/shared/type/data-types";
import { Dispatch, SetStateAction } from "react";

export interface ICarouselImage {
  images: PlantImagesType[];
  restartImage: boolean;
  setRestartImage: Dispatch<SetStateAction<boolean>>;
}
