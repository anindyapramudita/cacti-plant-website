import { PlantDataType } from "@/shared/type/data-types";
import { Session } from "next-auth";

export interface ISmallCardProps {
  data: PlantDataType;
  session?: Session | null;
  onLikeClick: () => void;
}

export type LevelRange = 1 | 2 | 3