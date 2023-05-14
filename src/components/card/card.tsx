import { ChevronDownIcon } from "@/assets/chevron-down-icon";
import { ChevronUpIcon } from "@/assets/chevron-up-icon";
import config from "@/shared/config";
import Link from "next/link";
import { FC, useState } from "react";
import { CardOverlay } from "../card-overlay";
import { FavoriteButton } from "../favorite-button";
import { TransitionImage } from "../image";
import { ICardProps } from "./card.interface";
import { StylesWrapper, OverlayWrapper, SwipeUpWrapper } from "./card.styles";

export const Card: FC<ICardProps> = ({ data }) => {
  const [showSummary, setShowSummary] = useState<boolean>(false);

  if (!data) {
    return null;
  }

  return (
    <StylesWrapper showSummary={showSummary}>
      {showSummary ? (
        <SwipeUpWrapper
          onClick={() => setShowSummary(!showSummary)}
          showSummary={showSummary}
        >
          <ChevronDownIcon color="white" />
          <p>hide summary</p>
        </SwipeUpWrapper>
      ) : (
        <SwipeUpWrapper
          onClick={() => setShowSummary(!showSummary)}
          showSummary={showSummary}
        >
          <ChevronUpIcon color="white" />
          <p>see summary</p>
        </SwipeUpWrapper>
      )}
      <OverlayWrapper>
        <CardOverlay data={data} />
      </OverlayWrapper>
      <FavoriteButton />
      <Link href={`${config.websiteUrl}/plant/${data.id}`}>
        <TransitionImage
          placeholder={data.images.placeholder}
          image={data.images.mainImage}
          alt={data.images.alt}
        />
      </Link>
    </StylesWrapper>
  );
};
