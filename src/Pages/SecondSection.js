import React from "react";
import classes from "./SecondSection.module.css";
import logo from "../Images/logo.png";
export default function SecondSection() {
  return (
    <div className={classes.background}>
      <h1>Mangiare è un’esperienza emozionale.</h1>
      <div className={classes.container}>
        <p>
          Noi proviamo a fare ristorazione curando l’atmosfera, con personale
          che si prende cura di voi per farvi sentire come a casa vostra.
        </p>
        <p>
          I nostri cuochi e pizzaioli sono abituati alla cura dei dettagli, con
          proposte e prodotti cucinati espressamente per voi.
        </p>
        <p>
          Non ci sono elementi più o meno importanti di altri. Un buon pasto non
          è solo qualcosa che riempie lo stomaco, ma qualcosa di piacevole che
          possiamo aver dimenticato, che non viviamo da molto tempo.
        </p>
      </div>
    </div>
  );
}
