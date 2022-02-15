import React, { Fragment } from "react";
import logo from "../Images/logo.png";
import classes from "./EightSection.module.css";
export default function EightSection() {
  return (
      <Fragment>
          <div className={classes.name} id='contact'></div>
    <div className={classes.container}>
      <img src={logo} />
      <div className={classes.medium_container}>
        <div className={classes.contacts}>
          <div className={classes.title}>Contatti</div>
          <div className={classes.subtitle}>
            Dove siamo e come puoi raggiungerci
          </div>
          <div className={classes.text}>
            <p>Indirizzo: Via del Governo Vecchio, 87, 00186 – Roma</p>
            <p>Aperti tutti i giorni dalle 11:00 alle 23:30</p>
            <p>Telefono: 06 689 2574</p>
            <p>Email: info@cantinaecucina.it</p>
            <p>Facebook: @cantinaecucina</p>
            <p>
              Instagram:
              <a href="https://www.facebook.com/CANTINA-CUCINA-109740542445405">
                {" "}
                @cantinaecucinaofficial
              </a>
            </p>
            <p>
              TripAdvisor:{" "}
              <a href="https://www.instagram.com/cantinaecucinaofficial/">
                Cantina & Cucina
              </a>
            </p>
          </div>
        </div>
        <div className={classes.direct_line}>
          <div className={classes.title}>LINEA DIRETTA</div>
          <div className={classes.subtitle}>
            Online e sempre a portata di mano
          </div>
          <div className={classes.text}>
            <p>
              Vuoi contattarci per una richiesta particolare, per conoscerci
              meglio, per prenotare o altre richieste commerciali?
            </p>
          </div>
          <button>Scrivici Subito</button>
        </div>
      </div>
    </div>
    </Fragment>
  );
}
