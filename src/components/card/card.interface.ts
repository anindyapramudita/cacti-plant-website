import { PlantDataType } from "@/shared/type/data-types";
import { Session } from "next-auth";

export interface ICardProps {
  data: PlantDataType;
  session?: Session | null;
  onLikeClick: () => void;
}
