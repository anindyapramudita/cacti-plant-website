import { FC } from "react";
import { IPlantDetailsLayoutProps } from "./layout.interface";
import { StylesWrapper } from "./layout.styles";

export const PlantDetailsLayout: FC<IPlantDetailsLayoutProps> = ({
  children,
}) => {
  if (!children) {
    return null;
  }

  return <StylesWrapper data-testid="card-layout">{children}</StylesWrapper>;
};
