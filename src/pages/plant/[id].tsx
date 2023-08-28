import { getPlantById } from "@/sanity/get-plants-by-id";
import { StylesWrapper } from "./index.styles";
import { CarouselImage } from "@/components/carousel-image";
import { PlantDataType } from "@/shared/type/data-types";
import { CategoryTab } from "@/components/category-tab";
import { useEffect, useState } from "react";
import { Info } from "./index.interface";
import { CategoryContent } from "@/components/category-content";

type PlantData = {
  plants: PlantDataType;
  onLikeClick: () => void;
};

export default function PlantDetails({ plants }: PlantData) {
  const [category, setCategory] = useState<Info>("description");
  const [textChanged, setTextchanged] = useState<boolean>(false);

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
        <CategoryContent plant={plants} category={category} />
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
