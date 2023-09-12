import { PlantDataType } from "@/shared/type/data-types";

export interface ISimpleCardProps {
  plant: PlantDataType;
  id: string;
  onLikeClick: () => void;
}
