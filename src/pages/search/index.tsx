import config from "@/shared/config";
import { plantDataType } from "@/shared/types";
import { HomeLayout } from "@/components/layouts/home";
import { Header } from "@/components/header";
import { useEffect } from "react";
import { FilterHeader } from "@/components/filter-header";

export default function Home() {
  useEffect(() => {
    function handleKeyDown(e: any) {
      if (e.keyCode == 32) {
        console.log("hai");
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <HomeLayout>
      <Header />
      <FilterHeader />
    </HomeLayout>
  );
}

export async function getServerSideProps() {
  const fetchAPI = await fetch(`${config.databaseUrl}/plants`);
  const data: plantDataType[] = await fetchAPI.json();

  return {
    props: {
      plants: data,
    },
  };
}
