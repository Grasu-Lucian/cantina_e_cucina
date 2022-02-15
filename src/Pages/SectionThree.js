import React, { Fragment } from "react";
import logo from "../Images/logo.png";
import classes from "./SectionThree.module.css";
export default function SectionThree() {
  return (<Fragment>
    <div className={classes.name} id='Chi_Samino'></div>
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={logo} />
      </div>
      <div className={classes.title}>
        Cuciniamo Con Amore,
        <br />
        Degustiamo Con Passione,
        <br />
        Mangiamo Sempre 100% Italiano
      </div>
      <div className={classes.grid}>
        <div className={classes.article1}>
          <div className={classes.subtitle}>
            “Tre ragazzi del borgo…cresciuti troppo in fretta, un’unica
            passione, per la cucina casereccia…”
          </div>
          <div className={classes.text}>
            <h3>
              {" "}
              E’con questo ritornello in testa che Andrea, Simone e Riccardo
              hanno deciso di lanciarsi nel mondo della ristorazione romana
              sognando di fondere le tradizioni ereditate dalle proprie nonne
              con quelle dell’estrema ricerca per la qualità.
            </h3>
            <h3>
              Stufi di deliziare solo i palati di amici e parenti hanno deciso
              di proporre le loro ricette e i loro manicaretti a chiunque ne
              avesse la voglia al centro di Roma, nella splendida e accogliente
              via del Governo Vecchio, proprio accanto alla meravigliosa Piazza
              Navona.
            </h3>
            <h3>
              E finalmente in un palazzo del ‘500 tra arcate antiche e unici
              soffitti a cassettoni hanno creato Cantina e Cucina, un locale
              dallo stile Vintage, dal comfort moderno ma dal sapore antico,
              come quello di una volta.
            </h3>
          </div>
        </div>
        <div className={classes.article2}>
          <div className={classes.text}>
            <h3>
              Un posto dove ritrovarsi in compagnia di amici, dove festeggiare
              ricorrenze romantiche o dove fermarsi anche per una sosta
              solitaria, certi di trovare quel calore delle locande di una
              volta, dove l’ospite si confonde con l’amico.
            </h3>
            <h3>
              Tra una Carbonara coi Carciofi e un’Amatriciana Croccante, tra una
              Pizza a lievitazione naturale e della succulenta Ciccia della
              Macelleria Feroci e tra Salumi e Formaggi della migliore
              tradizione avrete l’imbarazzo della scelta per soddisfare il
              vostro palato e potrete annaffiare il tutto con l’ottima scelta
              della nostra Cantina o con i nostri Cocktails preparati ad arte
              dalle nostre mani.
            </h3>
            <h3>
              Leggendo vi sarò venuta fame e l’unico rimedio è…venirci a
              trovare…
            </h3>
            <h3>Vi aspettiamo!</h3>
            <h3>Andrea, Simone e Riccardo</h3>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}
