import React, { Fragment } from "react";
import classes from "./FourthSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCocktail,
  faCheese,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import background from "../Images/background.jpg";
export default function FourthSection() {
  return (
    <Fragment>
      <div className={classes.image_container}>
        <img className={classes.image} src={background} />
      </div>
      <div className={classes.container}>
        <div className={classes.title}>I Servizi</div>
        <div className={classes.text}>
          <p>
            Da noi potrai gustare un buon Caffè Lavazza seduto nella nostra sala
            privata oppure ai tavolini esterni. Potrai degustare un buon vino
            oppure un cocktail preparato dai nostri selezionati Barman.{" "}
            <span>CANTINA & CUCINA </span>
            non è solo Hosteria e Pizzeria, siamo anche:
          </p>
        </div>
        <div className={classes.grid}>
          <div className={classes.small_container}>
            <div>
              <FontAwesomeIcon className={classes.icon} icon={faCocktail} />
            </div>
            <div className={classes.text1}>Cocktail Bar</div>
          </div>
          <div className={classes.small_container}>
            <div>
              <FontAwesomeIcon className={classes.icon} icon={faCheese} />
            </div>
            <div className={classes.text1} > Aperitive Bar</div>
          </div>
          <div className={classes.small_container}>
            <div>
              <FontAwesomeIcon className={classes.icon} icon={faCoffee} />
            </div>
            <div className={classes.text1}> Caffetteria</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
