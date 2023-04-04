import config from "@/shared/config";
import { plantDataType } from "@/shared/types";
import { CardLayout } from "@/components/card-layout";
import type { NextApiRequest, NextApiResponse } from "next";
import { HomeLayout } from "@/components/home-layout";
import { Header } from "@/components/header";
import { Card } from "@/components/card";
import { useMemo } from "react";
import useDeviceSize from "@/hooks/use-device-size";

type plantData = {
  plants: plantDataType[];
};

export default function Home({ plants }: plantData) {
  const [width] = useDeviceSize();

  const cardData = useMemo(() => {
    let newData = [...plants];
    if (width < 576 && width > 0) {
      newData = [newData[0]];
      return newData;
    } else if (width < 992) {
      newData = [newData[0], newData[1]];
      return newData;
    } else {
      return newData;
    }
  }, [plants, width]);
  
  return (
    <HomeLayout>
      <Header />
      <CardLayout>
        {cardData.map((plant) => (
          <Card data={plant} />
        ))}
      </CardLayout>
    </HomeLayout>
  );
}

export async function getServerSideProps({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse<plantDataType>;
}) {
  const fetchAPI = await fetch(`${config.databaseUrl}/plants`);
  const data: plantDataType[] = await fetchAPI.json();
  const error = fetchAPI.ok ? false : fetchAPI.statusText;

  return {
    props: {
      plants: data,
    },
  };
}
