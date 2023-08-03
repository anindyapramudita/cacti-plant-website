import { PlantDataType } from "@/shared/type/data-types";
import { useEffect, useMemo, useState } from "react";
import useDeviceSize from "@/hooks/use-device-size";
import { PlantCard } from "@/components/refactor-card";
import { getPlants } from "@/sanity/get-plants";
import randomId from "@/shared/utils/generateRandomId";
import { StylesWrapper } from "./index.styles";
import { useSession } from "next-auth/react";

type PlantData = {
  plants: PlantDataType[];
  onLikeClick: () => void;
};

export default function Home({ plants, onLikeClick }: PlantData) {
  const { data: session } = useSession();
  const [width] = useDeviceSize();
  const [currentState, setCurrentState] = useState<{plants: PlantDataType[], currentId: number, isLiked: boolean[]}>({
    plants,
    currentId: -1,
    isLiked: [false, false, false] //this is temporary until we have isLiked is in the database
  })

  const cardData = useMemo(() => {
    let newData = [...currentState.plants]
    if (width < 576 && width > 0) {
      newData = [newData[0]];
      return newData;
    } else if (width < 992) {
      newData = [newData[0], newData[1]];
      return newData;
    } else {
      return newData;
    }
  }, [currentState.plants, width]);

  useEffect(() => {
    const handleShuffleData = async () => {
      try {
        const newId = randomId(currentState.currentId, plants[0].total - 3);
        const fetchAPI: PlantDataType[] = await getPlants(newId);
        if (fetchAPI) {
          setCurrentState({...currentState, currentId: newId, plants: fetchAPI, isLiked: [false, false, false]})
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    };

    function handleKeyDown(e: any) {
      if (e.keyCode == 32) {
        handleShuffleData();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentState, plants]);

  const handleLikeClick = (id: number) => {
    if(!session){
      onLikeClick();
    } else {
      console.log('liked!')
      let temp = [...currentState.isLiked]
      temp[id] = !temp[id]
      setCurrentState({...currentState, isLiked: temp});
    }
  }

  return (
    <>
      <StylesWrapper className="home-layout">
        {cardData.map((plant, index) => (
          <PlantCard
            key={index}
            plant={plant}
            onLikeClick={()=>handleLikeClick(index)}
            isLiked={currentState.isLiked[index]}
          />
        ))}
      </StylesWrapper>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getPlants(0);

  return {
    props: {
      plants: data,
    },
  };
}
