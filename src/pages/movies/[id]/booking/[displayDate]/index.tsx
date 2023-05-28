import Head from "next/head";
import Saloon from "@/components/Saloon";
import BuyTickets from "@/components/BuyTickets";
import { getMovie } from "@/util/dbAggregations";
import { ScreeningProps } from "@/types/screeningTypes";
import { GetServerSidePropsContext } from "next";
import { MovieProps } from "@/util/types";

    export async function getServerSideProps(context: GetServerSidePropsContext) {
        const {req, res, query, params} = context

        const id = params?.id ?? 0;
        const displayDate = params?.displayDate ?? "";

        let date = new Date(parseInt(displayDate?.toString()))
        const ISOdate = date.toISOString();
        const offsetFormattedDate = ISOdate.replace("Z", "+00:00");
    
        const url = `/api/movies/${id}/bookings/${offsetFormattedDate}`;

      return {
        props: {
          movieData: await getMovie(id.toString()),
          id: id,
          displayDate: displayDate,
          dbResponse: await fetch(url)           
        },
      };
    }

    export default function SelectSeats({ screenings, id, displayDate, movieData, dbResponse }: { screenings: ScreeningProps, id: string, displayDate: string, movieData: MovieProps, dbResponse: Response}) {
      let seats: number[] = []
      const handleDataFromSaloon = (selectedSeatIds: number[]) => {
        seats = selectedSeatIds;
      };

      return(
          <>
            <Head>
              <title>Lule Northern Light Cinema</title>
              <meta name="description" content="Kino project in next.js" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Saloon onData={handleDataFromSaloon} id={id} displayDate={displayDate} dbResponse={dbResponse}/>
            <BuyTickets screenings={screenings} selectedSeatIds={seats} id={id} displayDate={displayDate} movieData={movieData}/>
          </>
        );
      }