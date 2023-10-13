import { ICategoryContentProps } from "../category-content.interface";

export const categoryContentMock: ICategoryContentProps = {
  plant: {
    _id: "396cd060-efbe-4999-a331-ba0eddcf7ec8",
    _createdAt: "2023-07-20T15:12:53Z",
    name: "Lavandula",
    images: [
      {
        alt: "Lavandula 1",
        src: "https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
    ],
    description:
      "Lavandula (common name lavender) is a genus of 47 known species of flowering plants in the mint family, Lamiaceae.",
    water: {
      level: 3,
      info: "Water newly planted lavender once or twice a week during its first full growing season to help the root system get established.",
    },
    care: {
      level: 3,
      info: "Lavender is easy to grow and look after. It needs a well-drained soil and a sunny position.",
    },
    seasons: { summer: true, spring: true },
    size: {
      level: 3,
      info: "Lavender plants can reach a height of 1-3 feet, depending on the variety.",
    },
    colors: ["purple"],
    total: 22,
  },
  category: "description",
};
