import Link from "next/link";
import { FC, useState } from "react";

import { FavoriteButton } from "../favorite-button";
import { TransitionImage } from "../image";
import { IPlantCardProps } from "./plant-card.interface";
import { StylesWrapper } from "./plant-card.styles";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";
import { CardOverlay } from "./components/card-overlay";
import { HIDE_SUMMARY, SEE_SUMMARY } from "./plant-card.constants";
import classNames from "classnames";

export const PlantCard: FC<IPlantCardProps> = ({
  plant,
  onLikeClick,
  isLiked = false,
}) => {
  const [showSummary, setShowSummary] = useState<boolean>(false);

  if (!plant) {
    return null;
  }

  return (
    <StylesWrapper showSummary={showSummary} data-testid="plant-card">
      <div
        role="button"
        tabIndex={0}
        className="swipe-up-icon"
        onClick={() => setShowSummary(!showSummary)}
        onKeyDown={() => setShowSummary(!showSummary)}
      >
        {showSummary ? <BiChevronDown size={40} /> : <BiChevronUp size={40} />}
        <p>{showSummary ? HIDE_SUMMARY : SEE_SUMMARY}</p>
      </div>
      <div
        className={classNames("card-overlay", { "show-overlay": showSummary })}
        data-testid="card-overlay-wrapper"
      >
        <CardOverlay
          name={plant.name}
          waterLevel={plant.water.level}
          careLevel={plant.care.level}
          sizeLevel={plant.size.level}
          seasons={plant.seasons}
        />
      </div>
      <FavoriteButton onLikeClick={onLikeClick} isLiked={isLiked} />
      <Link href={`/plant/${plant._id}`}>
        <TransitionImage
          placeholder={imagePlaceholder}
          image={plant.images[0].src}
          alt={plant.images[0].alt}
        />
      </Link>
    </StylesWrapper>
  );
};
