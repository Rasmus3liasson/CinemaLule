import Link from "next/link";
import style from "./style.module.scss";
import React from "react";
import Router from "next/router";
import { ScreeningType } from "@/util/types";
import createBooking from "@/pages/api/bookings/POST";

export default function Payment({ screenings }: { screenings: ScreeningType }) {
    const link = `/orderConfirmation`;
    const cancelLink = `/`;
    function handleClick() {
        Router.push(link);
      }

      function handleCancelClick() {
        Router.push(cancelLink);
      }
    return (
        <section className={style.paymentContainer}>
            <h2 className={style.Headline}>Hur vill du betala?</h2>
            <ul>
                <li className={style.paymentMethod}><input type="radio" name="paymentMethod"/><span className={style.radioText}>Betala med mina poäng (250))</span></li>
                <li className={style.paymentMethod}><input type="radio" name="paymentMethod"/><span className={style.radioText}>Bankkort</span></li>
                <li className={style.paymentMethod}><input type="radio" name="paymentMethod"/><span className={style.radioText}>Swish</span></li>
            </ul>
            <p className ={style.savedCreditCardTitle}>Sparat bankkort</p>
            <div className={style.SavedCreditCard}>
                <img className = {style.creditCardIssuerImage}src="/visa-logo.png" alt="Image of credit card company"></img>
                <p className={style.cardNumber}>**** **** **** 5454</p>
            </div>
            <p className={style.totalAmountToPay}>Totalt att betala</p>
            <button onClick={handleClick} className={style.confirmButton} formAction="Submit">Bekräfta</button>
            <button onClick={handleCancelClick} className={style.cancelButton} formAction="Cancel">Avbryt</button>    
        </section>
    )
}
