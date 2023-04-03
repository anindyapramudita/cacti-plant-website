import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { TransitionImage } from "@/components/image";
import big from "../../public/big.jpeg";
import { useEffect, useState } from "react";
import config from "@/shared/config";
import { plantDataType, plantImagesType } from "@/shared/types";
import { Layout } from "@/components/layout";
import type { NextApiRequest, NextApiResponse } from 'next'

type plantData = {
  plants: plantDataType[]
}

export default function Home({
plants
}: plantData) {

  return (
    <>
      <Layout>
        {
          plants.map((plant) => (
            <TransitionImage
              placeholder={plant.images.placeholder}
              image={plant.images.mainImage}
              alt={plant.images.alt}
            />
          ))
          }
      </Layout>
    </>
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

