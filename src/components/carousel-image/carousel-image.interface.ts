import { PlantImagesType } from "@/shared/type/data-types";

export type PlantImages = {
  currentId: number;
  currentImage: {
    src: string;
    alt: string;
  };
};

export interface ICarouselImage {
  images: PlantImagesType[];
  width: number;
  height: number;
}
