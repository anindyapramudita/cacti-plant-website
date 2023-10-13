import {
  AutocompletePlant,
  Collection,
  LevelInfoType,
  PlantDataType,
} from "@/shared/type/data-types";
import { ICarouselImage } from "../carousel-image.interface";

export const carouselImageMock: ICarouselImage = {
  images: [
    {
      src: "https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      alt: "Image 1",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1672998563388-5976b020f4a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3424&q=80",
      alt: "Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1646667342847-0e53b32efd85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3328&q=80",
      alt: "Image 3",
    },
  ],
  width: 800,
  height: 600,
};

export const mockLevelInfo: LevelInfoType = {
  level: 2,
  info: "This is level 2 information.",
};

export const mockPlantData: PlantDataType = {
  _id: "1",
  _createdAt: "2023-10-11",
  name: "Mock Plant",
  images: [
    { src: "plantImage1.jpg", alt: "Plant Image 1" },
    { src: "plantImage2.jpg", alt: "Plant Image 2" },
  ],
  description: "This is a mock plant description.",
  water: mockLevelInfo,
  care: mockLevelInfo,
  seasons: { spring: true, summer: false, fall: true, winter: false },
  size: { level: 1, info: "Small plant size." },
  colors: ["green", "yellow", "red"],
  total: 10,
};

export const mockAutocompletePlant: AutocompletePlant = {
  _id: "2",
  _createdAt: "2023-10-11",
  name: "Autocomplete Plant",
  images: {
    src: "autocompletePlantImage.jpg",
    alt: "Autocomplete Plant Image",
  },
};

export const mockCollection: Collection = {
  _id: "3",
  title: "Mock Collection",
  image: { src: "collectionImage.jpg", alt: "Collection Image" },
  saved: 5,
};
