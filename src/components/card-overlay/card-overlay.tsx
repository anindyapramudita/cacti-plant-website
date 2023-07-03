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
            .map((_, index) =>
              index < data.water.level ? (
                <PiDrop key={index} color="white" />
              ) : (
                <PiDrop key={index} color="#0e1d1d" />
              )
            )}
        </LevelWrapper>
      </div>
      <div>
        <p>Difficulty: </p>
        <LevelWrapper>
          {Array(5)
            .fill("")
            .map((_, index) =>
              index < data.difficulty.level ? (
                <RiLeafLine key={index} color="white" />
              ) : (
                <RiLeafLine key={index} color="#0e1d1d" />
              )
            )}
        </LevelWrapper>
      </div>
      <div>
        <p>Size: </p>
        <LevelWrapper>
          {Array(3)
            .fill("")
            .map((_, index) =>
              index + 1 == data.size.level ? (
                <PiPottedPlant
                  key={index}
                  size={(index + 1) * 3 + 15}
                  color="white"
                />
              ) : (
                <PiPottedPlant
                  key={index}
                  size={(index + 1) * 3 + 15}
                  color="#0e1d1d"
                />
              )
            )}
        </LevelWrapper>
      </div>
      <div>
        <p>Season: </p>
        <LevelWrapper>
          {data.season.findIndex((season) => season === "spring") >= 0 ? (
            <PiFlower color="white" />
          ) : (
            <PiFlower color="#0e1d1d" />
          )}
          {data.season.findIndex((season) => season === "summer") >= 0 ? (
            <FiSun color="white" />
          ) : (
            <FiSun color="#0e1d1d" />
          )}
          {data.season.findIndex((season) => season === "fall") >= 0 ? (
            <RiLeafLine color="white" />
          ) : (
            <RiLeafLine color="#0e1d1d" />
          )}
          {data.season.findIndex((season) => season === "winter") >= 0 ? (
            <PiSnowflakeBold color="white" />
          ) : (
            <PiSnowflakeBold color="#0e1d1d" />
          )}
        </LevelWrapper>
      </div>
    </StylesWrapper>
  );
};
