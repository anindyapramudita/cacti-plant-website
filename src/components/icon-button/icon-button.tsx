import { FC } from "react";
import { StylesWrapper } from "./icon-button.styles";
import { IIconButtonProps } from "./icon-button.interface";

export const IconButton: FC<IIconButtonProps> = ({ icon, ...props }) => {
  return <StylesWrapper {...props}>{icon}</StylesWrapper>;
};
