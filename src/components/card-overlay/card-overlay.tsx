import { CircleIcon } from "@/assets/circle-icon";
import { LeafIcon } from "@/assets/leaf-icon";
import { PlantIcon } from "@/assets/plant-icon";
import { SnowIcon } from "@/assets/snow-icon";
import { SpringIcon } from "@/assets/spring-icon";
import { SummerIcon } from "@/assets/summer-icon";
import { WaterIcon } from "@/assets/water-icon";
import { FC } from "react";
import { ICardOverlayProps } from "./card-overlay.interface";
import { StylesWrapper, LevelWrapper } from "./card-overlay.styles";

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
              index < data.water ? (
                <WaterIcon color="white" />
              ) : (
                <WaterIcon color="#0e1d1d" />
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
              index < data.difficulty ? (
                <LeafIcon color="white" />
              ) : (
                <LeafIcon color="#0e1d1d" />
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
              index + 1 == data.size ? (
                <PlantIcon width={(index + 1) * 3 + 15} color="white" />
              ) : (
                <PlantIcon width={(index + 1) * 3 + 15} color="#0e1d1d" />
              )
            )}
        </LevelWrapper>
      </div>
      <div>
        <p>Season: </p>
        <LevelWrapper>
          {data.season.findIndex((season) => season === "spring") >= 0 ? (
            <SpringIcon color="white" />
          ) : (
            <SpringIcon color="#0e1d1d" />
          )}
          {data.season.findIndex((season) => season === "summer") >= 0 ? (
            <SummerIcon color="white" />
          ) : (
            <SummerIcon color="#0e1d1d" />
          )}
          {data.season.findIndex((season) => season === "fall") >= 0 ? (
            <LeafIcon color="white" />
          ) : (
            <LeafIcon color="#0e1d1d" />
          )}
          {data.season.findIndex((season) => season === "winter") >= 0 ? (
            <SnowIcon color="white" />
          ) : (
            <SnowIcon color="#0e1d1d" />
          )}
        </LevelWrapper>
      </div>
      {/* <div>
        <p>Color: </p>
        <LevelWrapper>
          {data.color.map((color, index) => (
            <CircleIcon color={color} />
          ))}
        </LevelWrapper>
      </div> */}
    </StylesWrapper>
  );
};
