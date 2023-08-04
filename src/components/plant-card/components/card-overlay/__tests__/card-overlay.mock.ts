import { plantMock } from "../../../../../../__mocks__";
import { ICardOverlayProps } from "../card-overlay.interface";

export const cardOverlayMock: ICardOverlayProps = {
  name: plantMock.name,
  waterLevel: plantMock.water.level,
  careLevel: plantMock.care.level,
  sizeLevel: plantMock.size.level,
  seasons: plantMock.seasons,
};
