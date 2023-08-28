import { PlantDataType } from "@/shared/type/data-types";

export const seasonList: Season[] = ["spring", "summer", "fall", "winter"];
export const categoryList: Info[] = [
  "description",
  "water",
  "care",
  "seasons",
  "size",
];
export type Season = "spring" | "summer" | "fall" | "winter";
export type Info = "description" | "water" | "seasons" | "size" | "care";

export interface ICategoryContentProps {
  plant: PlantDataType;
  category: Info;
}
