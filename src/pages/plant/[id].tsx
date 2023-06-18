import config from "@/shared/config";
import { plantDataType } from "@/shared/types";
import { HomeLayout } from "@/components/layouts/home";
import { Header } from "@/components/header";
import { PlantDetailsLayout } from "@/components/layouts/plant-details";
import { OverviewCard } from "@/components/overview-card";
import { ShuffleButton } from "@/components/shuffle-button";
import { FavoriteButton } from "@/components/favorite-button";
import { useState } from "react";
import { CarouselImage } from "@/components/carousel-image";
import randomId from "@/shared/utils/generateRandomId";
import { useRouter } from "next/navigation";

type plantData = {
  plants: plantDataType;
  id: number;
};

export default function PlantDetails({ plants, id }: plantData) {
  const [currentId, setCurrentId] = useState<number>(id);
  const [currentData, setCurrentData] = useState<plantDataType>(plants);
  const [restartImage, setRestartImage] = useState<boolean>(false);

  const router = useRouter();

  const handleShuffleData = async () => {
    try {
      const newId = randomId(currentId);
      setCurrentId(newId);
      setRestartImage(true);

      const fetchAPI = await fetch(`${config.databaseUrl}/plants/${newId}`);
      const response = await fetchAPI.json();
      if (response) {
        router.push(`/plant/${newId}`);
        setCurrentData(response);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeLayout>
      <Header />
      <PlantDetailsLayout>
        <div className="plant-image">
          <CarouselImage
            images={currentData?.images}
            restartImage={restartImage}
            setRestartImage={setRestartImage}
          />
          <FavoriteButton />
        </div>
        <div className="plant-details">
          <h3>{currentData?.name.toUpperCase()}</h3>
          <OverviewCard data={currentData} />
        </div>
      </PlantDetailsLayout>
      <ShuffleButton handleShuffle={handleShuffleData} />
    </HomeLayout>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const fetchAPI = await fetch(`${config.databaseUrl}/plants/${id}`);
  const data: plantDataType = await fetchAPI.json();
  // const error = fetchAPI.ok ? false : fetchAPI.statusText;

  return {
    props: {
      plants: data,
      id,
    },
  };
}
