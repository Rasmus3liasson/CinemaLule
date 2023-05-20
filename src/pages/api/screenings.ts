import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/util/connectMongo";
import Movie from "../../../models/movie";

export default async function handler(req: NextApiRequest, res: MovieLink) {
  const data = await getTenScreenings();

  res.status(200).json(data);
}
interface MovieLink extends NextApiResponse {
  title: string;
  poster: string;
  screeningDate: Date;
}
export async function getTenScreenings() {
  await connectMongo();

  const currentDate = new Date();

  const tenRandomScreenings = await Movie.aggregate([
    {
      $unwind: "$screenings",
    },
    {
      $match: {
        screenings: { $gte: currentDate },
      },
    },
    {
      $sort: {
        screenings: 1,
      },
    },
    {
      $lookup: {
        from: "Movies",
        localField: "_id",
        foreignField: "_id",
        as: "movie",
      },
    },
    {
      $limit: 10,
    },
    {
      // TODO: adding location and language perhaps
      $project: {
        _id: 0,
        title: 1,
        poster: '$imgUrl',
        location: '$location',
        screening: {
          $dateToString: {
            date: "$screenings",
          },
        },
      },
    },
  ]);
  const data = tenRandomScreenings;
  console.log(data);
  return data;
}
