import { plantMock } from "../../../../__mocks__";
import { IPlantCardProps } from "../plant-card.interface";

export const plantCardMock: IPlantCardProps = {
  plant: plantMock,
  onLikeClick: () => {},
  isLiked: true,
};
