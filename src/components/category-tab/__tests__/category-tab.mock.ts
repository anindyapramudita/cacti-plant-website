import { ICategoryTab } from "../category-tab.interface";

export type Info = "description" | "water" | "seasons" | "size" | "care";

export const categoryTabMock: ICategoryTab = {
  onClick: (category) => {
    console.log(`Clicked on ${category} tab`);
  },
};
