import { plantDataType } from "@/shared/type/data-types";
import { Session } from "next-auth";

export interface ICardProps {
  data: plantDataType;
  session?: Session | null;
  onLikeClick: () => void;
}
