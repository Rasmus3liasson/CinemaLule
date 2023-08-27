import { Dispatch, SetStateAction, createContext } from "react";
import { BookingInterface } from "@/types/booking";

export const bookingInfoContext = createContext<{
  bookingInfo: BookingInterface;
  setBookingInfo: Dispatch<SetStateAction<BookingInterface>>;
}>({
  bookingInfo: {} as BookingInterface,
  setBookingInfo: () => {},
});
