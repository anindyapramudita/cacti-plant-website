import { getPlants } from "@/sanity/get-plants";
import { StylesWrapper } from "./index.styles";
import Image from "next/image";
import { PlantDataType } from "@/shared/type/data-types";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";

type PlantData = {
  plants: PlantDataType[];
  onLikeClick: () => void;
};

export default function Home({
  plants,
}: // onLikeClick
PlantData) {
  return (
    <>
      <StylesWrapper className="home-layout">
        <Image
          src={plants[0]?.images[0]?.src}
          blurDataURL={imagePlaceholder}
          alt={plants[0]?.images[0]?.alt}
          width={227}
          height={600}
          placeholder="blur"
          className="image-component-1"
          style={{
            objectFit: "cover",
          }}
        />
        <Image
          src={plants[1]?.images[0]?.src}
          blurDataURL={imagePlaceholder}
          alt={plants[1]?.images[0]?.alt}
          width={400}
          height={600}
          placeholder="blur"
          className="image-component-2"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="text-wrapper">
          <h1 className="homepage-heading">
            Find the perfect plant for your place.
          </h1>
          <p className="homepage-subtitle">
            Find your perfect flora companion! Search by color, water, level of
            care family and much more. You can also learn about cool facts
            information related to each plant.
          </p>
          <button className="search-button">Search</button>
        </div>
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
