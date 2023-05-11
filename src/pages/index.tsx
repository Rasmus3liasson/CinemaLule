import Head from "next/head";
import Saloon from "@/components/Saloon";
import ScreeningsHome from "../components/ScreeningsHome";
import { ScreeningType } from "@/util/types";
import { getData } from "./api/screenings";

// TODO: Add database functions here. 
export async function getServerSideProps() {
  const data = await getData();
  return {
    props: {
      screenings: data,
    },
  };
}

export default function Home({ screenings }: { screenings: ScreeningType[] }) {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta name="description" content="Kino project in next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Saloon></Saloon>
  
      <ScreeningsHome screenings={screenings} />

    </>
  );
}
