import { FC } from "react";
import { ICardOverlayProps } from "./card-overlay.interface";
import { StylesWrapper, LevelWrapper } from "./card-overlay.styles";
import { RiLeafLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import {
  PiDrop,
  PiPottedPlant,
  PiFlower,
  PiSnowflakeBold,
} from "react-icons/pi";
import classNames from "classnames";
import {
  CARE_LEVEL_TITLE,
  SEASON_TITLE,
  SIZE_TITLE,
  WATER_TITLE,
} from "./card.overlay.constants";

export const CardOverlay: FC<ICardOverlayProps> = ({
  name = "",
  waterLevel = 0,
  careLevel = 0,
  sizeLevel = 0,
  seasons = {},
}) => {
  if (!name) {
    return null;
  }

  return (
    <StylesWrapper className="category-level" data-testid="card-overlay">
      <h3 className="plant-name">{name.toUpperCase()}</h3>
      <div className="category-level">
        <p className="level-title">{WATER_TITLE}</p>
        <LevelWrapper>
          {Array.from({ length: 5 }).map((_, index) => (
            <PiDrop
              key={index}
              className={classNames({ active: index < waterLevel })}
            />
          ))}
        </LevelWrapper>
      </div>
      <div className="category-level">
        <p className="level-title">{CARE_LEVEL_TITLE}</p>
        <LevelWrapper>
          {Array.from({ length: 5 }).map((_, index) => (
            <RiLeafLine
              key={index}
              className={classNames({ active: index < careLevel })}
            />
          ))}
        </LevelWrapper>
      </div>
      <div className="category-level">
        <p className="level-title">{SIZE_TITLE}</p>
        <LevelWrapper>
          {Array.from({ length: 3 }).map((_, index) => (
            <PiPottedPlant
              key={index}
              size={(index + 1) * 3 + 15}
              className={classNames({ active: index + 1 == sizeLevel })}
            />
          ))}
        </LevelWrapper>
      </div>
      <div className="category-level">
        <p className="level-title">{SEASON_TITLE}</p>
        <LevelWrapper>
          <PiFlower
            data-testid="spring-icon"
            className={classNames({ active: seasons?.spring })}
          />
          <FiSun
            data-testid="summer-icon"
            className={classNames({ active: seasons?.summer })}
          />
          <RiLeafLine
            data-testid="fall-icon"
            className={classNames({ active: seasons?.fall })}
          />
          <PiSnowflakeBold
            data-testid="winter-icon"
            className={classNames({ active: seasons?.winter })}
          />
        </LevelWrapper>
      </div>
    </StylesWrapper>
  );
};
