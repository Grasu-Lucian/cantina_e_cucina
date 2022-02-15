import React, { Fragment } from "react";
import classes from "./SeventhSection.module.css";
import trip from "../Images/trip.svg";
export default function SeventhSection() {
  return (
    <Fragment>
      <div className={classes.name} id="review"></div>
      <div className={classes.container}>
        <div className={classes.medium_container}>
          <div className={classes.title}>
            Hosteria e Pizzeria <span>Cantina & Cucina</span>
          </div>
          <h1 className={classes.subtitle}>gli ospiti cosa dicono di noi?</h1>
          <h2 className={classes.text}>
            Chi si loda si imbroda e allora abbiamo deciso di dare la parola
            direttamente ai nostri clienti pescando le ultime recensioni
            direttamente da TripAdvisor!
          </h2>
          <button>Leggi Tutte Le Recensioni</button>
        </div>
        <a href="https://www.tripadvisor.it/Restaurant_Review-g187791-d2094750-Reviews-Cantina_Cucina-Rome_Lazio.html">
          <button className={classes.tript_advisor}>
            <img src={trip} />
            <div className={classes.title1}>Cantina e cucina</div>
            <div className={classes.review}>
              <div className={classes.text1}>
                <p> Valutazione dei viaggiatori di Tripadvisor</p>
              </div>
              <div className={classes.star}>
                <span>●●●●</span>
                <div className={classes.color}>◖</div>16.781 recensioni
              </div>
            </div>
            <p>Classificazione Tripadvisor</p>
            <div className={classes.details}>
              <p> n°64 su 13284 punti di ristorazione a Roma </p>
            </div>

            <p>Recensioni recenti dei viaggiatori</p>
            <div className={classes.recenzi}>
              <p>
                Se si è a Roma non si può andar via senza aver provato questa
                fantastica osteria. Prima cosa, se la fila per entrare è lunga
                non disperate, l'attesa vale e poi spesso per renderla meno
                noiosa offrono un piccolo bicchiere di prosecco e della
                focaccia... <span>Altro</span>
              </p>
            </div>
            <div className={classes.recenzi}>
              <p>
                Ci siamo trovati fin da subito come se fossimo a casa. Accolti
                dalla simpaticissima cameriera “AF” e da Martina che ci ha
                seguito durante la cena. Il cibo è idilliaco…stavamo esplodendo
                dalla bontà e dalla quantità. Consiglio questo locale
                sicuramente a chi è in cerca... <span>Altro</span>
              </p>
            </div>
            <div className={classes.other}>
              <span>Leggi le recensioni</span>
              <span>Scrivi una recensione</span>
            </div>
          </button>
        </a>
      </div>
    </Fragment>
  );
}
