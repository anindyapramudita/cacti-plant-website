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
                color={index < data.water.level ? "white" : "#0e1d1d"}
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
                color={index < data.water.level ? "white" : "#0e1d1d"}
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
                color={index + 1 == data.size.level ? "white" : "#0e1d1d"}
              />
            ))}
        </LevelWrapper>
      </div>
      <div>
        <p>Season: </p>
        <LevelWrapper>
          <PiFlower color={data.season.spring ? "white" : "#0e1d1d"} />
          <FiSun color={data.season.summer ? "white" : "#0e1d1d"} />
          <RiLeafLine color={data.season.fall ? "white" : "#0e1d1d"} />
          <PiSnowflakeBold color={data.season.winter ? "white" : "#0e1d1d"} />
        </LevelWrapper>
      </div>
    </StylesWrapper>
  );
};
