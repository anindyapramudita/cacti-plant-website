import config from "@/shared/config";
import Link from "next/link";
import { FC, useState } from "react";
import { CardOverlay } from "../card-overlay";
import { FavoriteButton } from "../favorite-button";
import { TransitionImage } from "../image";
import { ICardProps } from "./card.interface";
import { StylesWrapper } from "./card.styles";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

export const Card: FC<ICardProps> = ({ data }) => {
  const [showSummary, setShowSummary] = useState<boolean>(false);

  if (!data) {
    return null;
  }

  return (
    <StylesWrapper showSummary={showSummary}>
      <div
        role="button"
        tabIndex={0}
        className="swipe-up-icon"
        onClick={() => setShowSummary(!showSummary)}
        onKeyDown={() => setShowSummary(!showSummary)}
      >
        {showSummary ? <BiChevronDown size={40} /> : <BiChevronUp size={40} />}
        <p>{showSummary ? "hide summary" : "see summary"}</p>
      </div>
      <div className="card-overlay">
        <CardOverlay data={data} />
      </div>
      <FavoriteButton />
      <Link href={`${config.websiteUrl}/plant/${data.id}`}>
        <TransitionImage
          placeholder={data.images[0].placeholder}
          image={data.images[0].mainImage}
          alt={data.images[0].alt}
        />
      </Link>
    </StylesWrapper>
  );
};
