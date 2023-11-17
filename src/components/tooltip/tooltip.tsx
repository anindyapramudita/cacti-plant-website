import { FC } from "react";
import { ITooltipProps } from "./tooltip.interface";
import { StylesWrapper } from "./tooltip.styles";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const Tooltip: FC<ITooltipProps> = ({ label, information }) => {
  return (
    <StylesWrapper>
      {label ? label : <AiOutlineInfoCircle />}
      <div className="tooltip-wrapper">
        <p>{information}</p>
      </div>
    </StylesWrapper>
  );
};
