import { ChevronDownIcon } from "@/assets/chevron-down-icon";
import { ChevronUpIcon } from "@/assets/chevron-up-icon";
import { CloseIcon } from "@/assets/close-icon";
import { HeartIcon } from "@/assets/heart-outline-icon";
import config from "@/shared/config";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { CardOverlay } from "../card-overlay";
import { TransitionImage } from "../image";
import { ICardProps } from "./card.interface";
import {
  StylesWrapper,
  OverlayWrapper,
  SwipeUpWrapper,
  FavoriteWrapper,
} from "./card.styles";

export const Card: FC<ICardProps> = ({ data, session }) => {
  if (!data) {
    return null;
  }
  const router = useRouter();

  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleFavorite = () => {
    if (session) {
      setIsLiked(!isLiked);
    } else {
      router.push("/login");
    }
  };

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
      {/* <FavoriteWrapper isLiked={isLiked} onClick={handleFavorite}> */}
      <FavoriteWrapper isLiked={isLiked} onClick={() => setIsLiked(!isLiked)}>
        <HeartIcon />
      </FavoriteWrapper>
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
