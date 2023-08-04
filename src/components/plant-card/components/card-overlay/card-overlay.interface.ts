import { SeasonType } from "@/shared/type/data-types";

export interface ICardOverlayProps {
  name: string;
  waterLevel: number;
  careLevel: number;
  sizeLevel: number;
  seasons: SeasonType;
}
