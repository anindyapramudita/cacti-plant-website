import { getPlants } from "@/sanity/get-plants";
import { StylesWrapper } from "./index.styles";
import { PlantDataType } from "@/shared/type/data-types";
import { ImageCard } from "@/components/image-card";
import { useEffect, useMemo, useState } from "react";
import { HOME_HEADING, HOME_SUBTITLE } from "@/shared/utils/constants";
import { useRouter } from "next/router";
import { Button } from "@/components/button";

type PlantData = {
  plants: PlantDataType[];
  onLikeClick: () => void;
};

type CarouselPlant = {
  currentId: number;
  firstPlantImage: {
    src: string;
    alt: string;
  };
  secondPlantImage: {
    src: string;
    alt: string;
  };
};

export default function Home({
  plants,
}: // onLikeClick
PlantData) {
  const { push } = useRouter();
  const defaultState: CarouselPlant = useMemo(() => {
    return {
      currentId: 0,
      firstPlantImage: {
        src: plants[0]?.images[0]?.src,
        alt: plants[0]?.images[0]?.alt,
      },
      secondPlantImage: {
        src: plants[1]?.images[0]?.src,
        alt: plants[2]?.images[0]?.alt,
      },
    };
  }, [plants]);

  const [currentState, setCurrentState] = useState<CarouselPlant>(defaultState);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentState.currentId >= plants.length - 2) {
        setCurrentState(defaultState);
      } else {
        const prevId = currentState.currentId;
        setCurrentState({
          currentId: prevId + 2,
          firstPlantImage: {
            src: plants[prevId + 2]?.images[0]?.src,
            alt: plants[prevId + 2]?.images[0]?.alt,
          },
          secondPlantImage: {
            src: plants[prevId + 3]?.images[0]?.src,
            alt: plants[prevId + 3]?.images[0]?.alt,
          },
        });
      }
    }, 4980);

    return () => clearInterval(intervalId);
  }, [currentState.currentId, defaultState, plants]);

  return (
    <>
      <StylesWrapper className="home-layout">
        <ImageCard
          src={currentState.firstPlantImage.src}
          alt={currentState.firstPlantImage.alt}
          width={227}
          height={600}
          carousel
          className="image-component-1"
        />
        <ImageCard
          src={currentState.secondPlantImage.src}
          alt={currentState.secondPlantImage.alt}
          width={400}
          height={600}
          carousel
          className="image-component-2"
        />
        <div className="text-wrapper">
          <h1 className="homepage-heading">{HOME_HEADING}</h1>
          <p className="homepage-subtitle">{HOME_SUBTITLE}</p>
          <Button onClick={() => push("/search")}>Search</Button>
        </div>
      </StylesWrapper>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getPlants(0, "", 10);

  return {
    props: {
      plants: data,
    },
  };
}
