import { PlantDataType } from "@/shared/type/data-types";

export interface IPlantCardProps {
  plant: PlantDataType;
  onLikeClick: () => void;
  isLiked?: boolean;
}
