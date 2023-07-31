import { PlantDataType } from "@/shared/type/data-types";
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
import { useSession } from "next-auth/react";

type PlantData = {
  plants: PlantDataType;
  onLikeClick: () => void;
};

export default function PlantDetails({ plants, onLikeClick }: PlantData) {
  const [currentId, setCurrentId] = useState<number>(-1);
  const [currentData, setCurrentData] = useState<PlantDataType>(plants);
  const [restartImage, setRestartImage] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const router = useRouter();
  const { data: session } = useSession();

  const handleShuffleData = async () => {
    try {
      const newId = randomId(currentId, currentData?.total - 1);
      setCurrentId(newId);
      setRestartImage(true);
      const fetchAPI: PlantDataType = await getRandomPlantByIndex(newId);
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

  const handleLikeClick = () => {
    if (!session) {
      onLikeClick();
    } else {
      setIsLiked(!isLiked);
    }
  };

  return (
    <PlantDetailsLayout>
      <div className="plant-image">
        <CarouselImage
          images={currentData?.images}
          restartImage={restartImage}
          setRestartImage={setRestartImage}
        />
        <FavoriteButton onLikeClick={handleLikeClick} isLiked={isLiked} />
      </div>
      <div className="plant-details">
        <h3>{currentData?.name.toUpperCase()}</h3>
        <OverviewCard data={currentData} />
      </div>
      <ShuffleButton onClick={handleShuffleData} />
    </PlantDetailsLayout>
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
