import { useState, useEffect } from "react";
import style from "./style.module.scss";
import React from "react";

export default function Seat({
  value,
  onSeatClick,
  isSelected,
  bookedSeats,
}: {
  value: number;
  onSeatClick: (seatValue: number) => void;
  isSelected: boolean;
  bookedSeats: number[];
}) {
  const [unavailable, setUnavailable] = useState(false);

  // to see if seat is already selected
  useEffect(() => {
    setUnavailable(bookedSeats.includes(value));
  }, [bookedSeats, value]);

  //check that only free chair can be selected
  const handleClick = () => {
    if (!unavailable) {
      onSeatClick(value);
    }
  };

  return (
    <div
      className={`${style.seat} ${
        isSelected ? style.selectedSeat : style.availableSeat
      } ${unavailable && style.unavailableSeat}`}
      onClick={handleClick}
    ></div>
  );
}
