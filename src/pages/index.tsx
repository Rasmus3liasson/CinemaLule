import Head from "next/head";
import AllMovies from "@/components/AllMovies";
import ScreeningsHome from "../components/ScreeningsHome";
import { ScreeningType } from "@/util/types";
import { getData } from "./api/screenings";

// This gets called on every request
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
      <AllMovies />
      <ScreeningsHome screenings={screenings} />
    </>
  );
}
