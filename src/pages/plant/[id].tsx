import { getPlantById } from "@/sanity/get-plants-by-id";
import { StylesWrapper } from "./index.styles";
import { CarouselImage } from "@/components/carousel-image";
import { PlantDataType } from "@/shared/type/data-types";
import { CategoryTab } from "@/components/category-tab";
import { useEffect, useMemo, useState } from "react";
import { Info, Season, seasonList } from "./index.interface";
import classNames from "classnames";

type PlantData = {
  plants: PlantDataType;
  onLikeClick: () => void;
};

export default function PlantDetails({ plants }: PlantData) {
  const [category, setCategory] = useState<Info>("description");
  const [textChanged, setTextchanged] = useState<boolean>(false);

  const renderInfo = useMemo(() => {
    const activeSeason: string[] = [];

    seasonList.forEach((season: Season) => {
      if (plants.seasons[season] === true) {
        activeSeason.push(season);
      }
    });

    if (category === "description") {
      return plants.description;
    } else if (category === "seasons") {
      return `Plant can live in these seasons: ${activeSeason.join(", ")}`;
    } else {
      return plants[category].info;
    }
  }, [plants, category]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (textChanged) {
        setTextchanged(false);
      }
    }, 500);

    return () => clearInterval(timer);
  }, [textChanged]);

  const handleCategoryClick = (newCategory: Info) => {
    setCategory(newCategory);
    setTextchanged(true);
  };

  return (
    <StylesWrapper>
      <div className="image-wrapper">
        <h2 className="plants-name">{plants.name}</h2>
        <CarouselImage images={plants.images} width={992} height={450} />
      </div>
      <div className="middle-line" />
      <div className="info-content">
        <CategoryTab onClick={handleCategoryClick} />
        <div
          className={classNames("info-text", { "text-changed": textChanged })}
        >
          <p className="category-header">{category.toUpperCase()}</p>
          <p>{renderInfo}</p>
        </div>
      </div>
    </StylesWrapper>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const data = await getPlantById(id);
  return {
    props: {
      plants: data[0],
    },
  };
}
