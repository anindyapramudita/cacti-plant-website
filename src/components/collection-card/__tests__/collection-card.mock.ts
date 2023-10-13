import { PlantImagesType } from "@/shared/type/data-types";
import { ICollectionCardProps } from "../collection-card.interface";

const mockImage: PlantImagesType = {
  src: "https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  alt: "Example Image",
};

export const collectionCardMock: ICollectionCardProps = {
  title: "Mock Collection",
  image: mockImage,
  savedPlants: 5,
  onDeleteClick: () => console.log("Delete button clicked."),
};
