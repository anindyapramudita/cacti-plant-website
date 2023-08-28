import { FC } from "react";
import {
  ICategoryContentProps,
  Season,
  categoryList,
  seasonList,
} from "./category-content.interface";
import { StylesWrapper } from "./category-content.styles";
import classNames from "classnames";
import { Info } from "../category-tab/category-tab.interface";

export const CategoryContent: FC<ICategoryContentProps> = ({
  plant,
  category,
}) => {
  const renderInfo = (currentCategory: Info, index: number) => {
    const activeSeason: string[] = [];

    seasonList.forEach((season: Season) => {
      if (plant.seasons[season] === true) {
        activeSeason.push(season);
      }
    });

    if (currentCategory === "description") {
      return (
        <div className="info-text" key={`${currentCategory}-${index}`}>
          <p className={classNames("category-header", "info")}>
            {currentCategory.toUpperCase()}
          </p>
          <p className={classNames("category-info", "info")}>
            {plant.description}
          </p>
        </div>
      );
    } else if (currentCategory === "seasons") {
      return (
        <div className="info-text" key={`${currentCategory}-${index}`}>
          <p className={classNames("category-header", "info")}>
            {currentCategory.toUpperCase()}
          </p>
          <p className={classNames("category-info", "info")}>
            Plant can live in these seasons: {activeSeason.join(", ")}
          </p>
        </div>
      );
    } else {
      return (
        <div className="info-text" key={`${currentCategory}-${index}`}>
          <p className={classNames("category-header", "info")}>
            {currentCategory.toUpperCase()}
          </p>
          <p className={classNames("category-info", "info")}>
            {plant[currentCategory].info}
          </p>
        </div>
      );
    }
  };

  return (
    <StylesWrapper category={category}>
      <div className="content-wrapper">
        {categoryList.map((cat, index) => {
          return renderInfo(cat, index);
        })}
      </div>
    </StylesWrapper>
  );
};
