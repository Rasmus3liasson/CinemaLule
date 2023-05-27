import { getMovie } from "@/util/dbAggregations";
import Head from "next/head";
import connectMongo from "@/util/connectMongo";
import Saloon from "@/components/Saloon";
import BuyTickets from "@/components/BuyTickets";
import Movie from "../../../../../models/movie";
import { getTenScreenings } from "@/pages/api/screenings";
import { ScreeningType } from "@/util/types";
import { useContext } from "react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from 'next/router';

const handleDataFromSaloon = (selectedSeatIds: Number[]) => {
    console.log('Data received from Saloon:', selectedSeatIds);
  };
  
    export async function getServerSideProps(context: GetServerSidePropsContext) {
        const {req, res, query, params} = context

        const id = params?.id ?? null;
        const displayDate = params?.displayDate ?? null;
      return {
        props: {
          screenings: await getTenScreenings(),
          id: id,
          displayDate: displayDate                       
        },
      };
    }

    export default function SelectSeats({ screenings, id, displayDate }: { screenings: ScreeningType[], id: string, displayDate: string}) {
      const router = useRouter();
       
      return(
          <>
            <Head>
              <title>Lule Northern Light Cinema</title>
              <meta name="description" content="Kino project in next.js" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Saloon onData={handleDataFromSaloon} id={id} displayDate={displayDate}/>
            <BuyTickets screenings selectedSeatIds/>
          </>
        );
        
      }