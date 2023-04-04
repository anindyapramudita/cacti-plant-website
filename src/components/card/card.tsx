import { ChevronDownIcon } from "@/assets/chevron-down-icon";
import { ChevronUpIcon } from "@/assets/chevron-up-icon";
import { FC, useState } from "react";
import { TransitionImage } from "../image";
import { ICardProps } from "./card.interface";
import { StylesWrapper, OverlayWrapper, SwipeUpWrapper } from "./card.styles";

export const Card: FC<ICardProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  const [showSummary, setShowSummary] = useState<boolean>(false);
  
  return (
    <StylesWrapper showSummary={showSummary}>
      {showSummary ? (
        <SwipeUpWrapper
          onClick={() => setShowSummary(!showSummary)}
          showSummary={showSummary}
        >
          <ChevronDownIcon color="white" />
          <p>click to hide summary</p>
        </SwipeUpWrapper>
      ) : (
        <SwipeUpWrapper
          onClick={() => setShowSummary(!showSummary)}
          showSummary={showSummary}
        >
          <ChevronUpIcon color="white" />
          <p>click to see summary</p>
        </SwipeUpWrapper>
      )}
      <OverlayWrapper>
        <p>{data.name}</p>
      </OverlayWrapper>
      <TransitionImage
        placeholder={data.images.placeholder}
        image={data.images.mainImage}
        alt={data.images.alt}
      />
    </StylesWrapper>
  );
};
