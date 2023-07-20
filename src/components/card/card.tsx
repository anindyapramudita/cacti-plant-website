import Link from "next/link";
import { FC, useState } from "react";
import { CardOverlay } from "../card-overlay";
import { FavoriteButton } from "../favorite-button";
import { TransitionImage } from "../image";
import { ICardProps } from "./card.interface";
import { StylesWrapper } from "./card.styles";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";

export const Card: FC<ICardProps> = ({ data, handleOpenLogin, session }) => {
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLikeClick = () => {
    if (!session) {
      handleOpenLogin();
    } else {
      setIsLiked(!isLiked);
    }
  };

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
      <FavoriteButton onLikeClick={handleLikeClick} isLiked={isLiked} />
      <Link href={`/plant/${data._id}`}>
        <TransitionImage
          placeholder={imagePlaceholder}
          image={data.images[0].src}
          alt={data.images[0].alt}
        />
      </Link>
    </StylesWrapper>
  );
};
