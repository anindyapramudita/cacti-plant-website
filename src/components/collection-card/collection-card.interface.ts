import { PlantImagesType } from "@/shared/type/data-types";

export interface ICollectionCardProps {
  title: string;
  image: PlantImagesType;
  savedPlants: number;
  onDeleteClick: () => void;
}
