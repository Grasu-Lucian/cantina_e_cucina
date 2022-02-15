import React from "react";
import classes from "./Navbar.module.css";
import logo from "../Images/logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, Fragment } from "react";
export default function Navbar() {
  const [mark, setMark] = useState(true);
  const [display, setDisplay] = useState({ display: "none", opacity: "0" });
  useEffect(() => {
    const timer = setTimeout(() => {
      if (mark) {
        setDisplay({ display: "none" });
      }
    }, 250);
    if (!mark) {
      setDisplay({ display: "flex" });
    }
    return () => {
      clearTimeout(timer);
    };
  }, [mark]);
  const eventClickHandler = () => {
    setMark(!mark);
  };
  return (
    <div className={classes.whole_navbar}>
      <div className={classes.navbar}>
        <div className={classes.container}>
          <img src={logo} />
          <a href="https://cantinaecucina.it">
            Cantina e Cucina - Hosteria Pizzeria
          </a>
        </div>
        <ul className={classes.navigation}>
          <li className={classes.nav_element1}>
          <a href="#Home">  <button>Home</button></a>
          </li>
          <li className={classes.nav_element2}>
            <a href="#Chi_Samino">
              <button>
                Chi<span>_</span>samino
              </button>
            </a>
          </li>
          <li className={classes.nav_element3}>
          <a href="#I_menu">    <button>
              I<span>_</span>menu
            </button></a>
          </li>
          <li className={classes.nav_element4}>
          <a href="#I_locale
            "> 
            <button >
             Il<span>_</span>locale
            </button>
            </a>
          </li>
          
          <li className={classes.nav_element5}>
          <a href="#review">     <button>Recensioni</button></a>
          </li>
          <li className={classes.nav_element6}>
          <a href="#contact">   <button>Contatti</button></a>
          </li>
        </ul>
        <button
          onClick={() => {
            eventClickHandler();
          }}
          className={classes.navigation2}
        >
          <FontAwesomeIcon icon={mark ? faBars : faTimes} />
        </button>
      </div>
      <div
        className={mark ? `${classes.nothing}` : `${classes.nav_options}`}
        style={display}
      >
        <button> <a href="#Home">Home</a></button>
        <button>
          <a href="#Chi_Samino">
            Chi<span>_</span>samino
          </a>
        </button>
        <button>
        <a href="#I_menu">  I<span>_</span>menu
        </a>   </button>
        <button>
        <a href="#I_locale
            "> Il<span>_</span>locale</a>
        </button>
        <button><a href="#review"> Recensioni</a></button>
        <button
          className={classes.special}
          style={{ borderBottom: " 2px solid black" }}
          >  <a href="#contact"> 
          Contatti</a>
        </button>
      </div>
    </div>
  );
}
