import { PlantDataType } from "@/shared/type/data-types";

export interface ISimpleCardProps {
  plant: PlantDataType;
  id: string;
  onLikeClick: (id: string) => Promise<boolean>;
  onCollectionClick: (plantId: string) => void;
  isLiked: boolean;
}
