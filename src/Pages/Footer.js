import React from "react";
import classes from "./Footer.module.css";
import logo from "../Images/logo.png";
export default function Footer() {
  return (
    <div className={classes.container}>
     <div className={classes.image_container}> <img src={logo} /></div>
      <footer>
        <p>
          © 2016 – 2020 | Cantina & Cucina – Tutti i diritti riservati – Privacy
          Policy | Cookie Policy
        </p>
        <p>Copyright ©2022 by Grasu Lucian</p>
      </footer>
    </div>
  );
}
