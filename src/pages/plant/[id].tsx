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
import { getPlantById } from "@/sanity/get-plants-by-id";
import { getRandomPlantByIndex } from "@/sanity/get-random-plant-by-index";

type plantData = {
  plants: plantDataType;
};

export default function PlantDetails({ plants }: plantData) {
  const [currentId, setCurrentId] = useState<number>(-1);
  const [currentData, setCurrentData] = useState<plantDataType>(plants);
  const [restartImage, setRestartImage] = useState<boolean>(false);

  const router = useRouter();

  const handleShuffleData = async () => {
    try {
      const newId = randomId(currentId, currentData?.total - 1);
      setCurrentId(newId);
      setRestartImage(true);
      const fetchAPI: plantDataType = await getRandomPlantByIndex(newId);
      if (fetchAPI) {
        router.push(`/plant/${fetchAPI._id}`);
        setCurrentData(fetchAPI);
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
  const data = await getPlantById(id);
  return {
    props: {
      plants: data[0],
    },
  };
}
