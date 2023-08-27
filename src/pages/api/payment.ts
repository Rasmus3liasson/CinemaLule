import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  Grattis: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ Grattis: "Dina valda platser är bokade" });
}
