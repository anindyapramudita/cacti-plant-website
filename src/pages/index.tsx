import { TransitionImage } from "@/components/image";
import config from "@/shared/config";
import { plantDataType } from "@/shared/types";
import { CardLayout } from "@/components/card-layout";
import type { NextApiRequest, NextApiResponse } from 'next'
import { HomeLayout } from "@/components/home-layout";
import { Header } from "@/components/header";

type plantData = {
  plants: plantDataType[]
}

export default function Home({
plants
}: plantData) {

  return (
    // <HomeLayout>
    <>
      <Header/>
      <CardLayout>
        {
          plants.map((plant) => (
            <TransitionImage
              placeholder={plant.images.placeholder}
              image={plant.images.mainImage}
              alt={plant.images.alt}
            />
          ))
          }
      </CardLayout>
    </>
    // </HomeLayout>
  );
}

export async function getServerSideProps({req, res}: {req: NextApiRequest, res: NextApiResponse<plantDataType>}) {

  const fetchAPI = await fetch(`${config.databaseUrl}/plants`)
  const data: plantDataType = await fetchAPI.json()
  const error = fetchAPI.ok ? false : fetchAPI.statusText;

  return {
    props: {
      plants: data
  }
  }
}

