import { plantDataType } from "@/shared/types";
import { CardLayout } from "@/components/card-layout";
import { HomeLayout } from "@/components/layouts/home";
import { Header } from "@/components/header";
import { useEffect, useMemo, useState } from "react";
import useDeviceSize from "@/hooks/use-device-size";
import { Card } from "@/components/card";
import { getPlants } from "@/sanity/get-plants";
import randomId from "@/shared/utils/generateRandomId";

type plantData = {
  plants: plantDataType[];
};

export default function Home({ plants }: plantData) {
  const [width] = useDeviceSize();
  const [currentData, setCurrentData] = useState<plantDataType[]>(plants);
  const [currentId, setCurrentId] = useState<number>(-1);

  const cardData = useMemo(() => {
    let newData = [...currentData];
    if (width < 576 && width > 0) {
      newData = [newData[0]];
      return newData;
    } else if (width < 992) {
      newData = [newData[0], newData[1]];
      return newData;
    } else {
      return newData;
    }
  }, [currentData, width]);

  useEffect(() => {
    const handleShuffleData = async () => {
      try {
        const newId = randomId(currentId, plants[0].total - 3);
        setCurrentId(newId);
        const fetchAPI: plantDataType[] = await getPlants(newId);
        if (fetchAPI) {
          setCurrentData(fetchAPI);
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
  }, [currentId, plants]);

  return (
    <HomeLayout>
      <Header />
      <CardLayout>
        {cardData.map((plant, index) => (
          <Card key={index} data={plant} />
        ))}
      </CardLayout>
    </HomeLayout>
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
