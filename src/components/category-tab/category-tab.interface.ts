export type Info = "description" | "water" | "seasons" | "size" | "care";

export interface ICategoryTab {
  onClick: (category: Info) => void;
}
