import { plantDataType } from "@/shared/type/data-types";
import { Session } from "next-auth";

export interface ISmallCardProps {
  data: plantDataType;
  session?: Session | null;
  onLikeClick: () => void;
}
