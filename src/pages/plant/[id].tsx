import config from "@/shared/config";
import { plantDataType } from "@/shared/types";
import { HomeLayout } from "@/components/layouts/home";
import { Header } from "@/components/header";
import { TransitionImage } from "@/components/image";
import { PlantDetailsLayout } from "@/components/layouts/plant-details";
import { OverviewCard } from "@/components/overview-card";
import { ShuffleButton } from "@/components/shuffle-button";
import { FavoriteButton } from "@/components/favorite-button";

type plantData = {
  plants: plantDataType;
};

export default function PlantDetails({ plants }: plantData) {
  return (
    <HomeLayout>
      <Header />
      <PlantDetailsLayout>
        <div className="plant-image">
          <TransitionImage
            image={plants.images.mainImage}
            placeholder={plants.images.placeholder}
            alt={plants.images.alt}
          />
          <FavoriteButton />
        </div>
        <div className="plant-details">
          <h3>{plants.name.toUpperCase()}</h3>
          <OverviewCard data={plants} />
        </div>
      </PlantDetailsLayout>
      <ShuffleButton />
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
    },
  };
}
