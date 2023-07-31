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

export const CardOverlay: FC<ICardOverlayProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  const colorGenerator = (white: boolean) => {
    return white ? "white" : "#0e1d1d";
  };

  return (
    <StylesWrapper data-testid="card-layout">
      <h3>{data.name.toUpperCase()}</h3>
      <div>
        <p>Water: </p>
        <LevelWrapper>
          {Array(5)
            .fill("")
            .map((_, index) => (
              <PiDrop
                key={index}
                color={colorGenerator(index < data.water.level)}
              />
            ))}
        </LevelWrapper>
      </div>
      <div>
        <p>Difficulty: </p>
        <LevelWrapper>
          {Array(5)
            .fill("")
            .map((_, index) => (
              <RiLeafLine
                key={index}
                color={colorGenerator(index < data.water.level)}
              />
            ))}
        </LevelWrapper>
      </div>
      <div>
        <p>Size: </p>
        <LevelWrapper>
          {Array(3)
            .fill("")
            .map((_, index) => (
              <PiPottedPlant
                key={index}
                size={(index + 1) * 3 + 15}
                color={colorGenerator(index + 1 == data.size.level)}
              />
            ))}
        </LevelWrapper>
      </div>
      <div>
        <p>Season: </p>
        <LevelWrapper>
          <PiFlower color={colorGenerator(data.seasons.spring)} />
          <FiSun color={colorGenerator(data.seasons.summer)} />
          <RiLeafLine color={colorGenerator(data.seasons.fall)} />
          <PiSnowflakeBold color={colorGenerator(data.seasons.winter)} />
        </LevelWrapper>
      </div>
    </StylesWrapper>
  );
};
