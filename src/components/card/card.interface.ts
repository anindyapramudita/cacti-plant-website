import { plantDataType } from "@/shared/type/data-types";

export interface ICardProps {
  data: plantDataType;
  session?: any;
  openLoginModal: () => void;
}
