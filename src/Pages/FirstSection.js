import React, { Fragment } from "react";
import classes from "./FirstSection.module.css";
import { useEffect, useState } from "react";
import image_slider0 from "../Images/image_slider0.jpeg";
import image_slider1 from "../Images/image_slider1.jpeg";
import image_slider2 from "../Images/image_slider2.jpeg";
import image_slider3 from "../Images/image_slider3.jpeg";
const images = [image_slider0, image_slider1, image_slider2, image_slider3];
export default function FirstSection() {
    const [number, setNumber] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (number < 3) {
        setNumber(number + 1);
      } else {
        setNumber(0);
      }
   
    }, 5000);
  
    return () => 
        clearInterval(interval)
      
    
  });
  return (
    <Fragment>
      <div className={classes.Home}id='Home'></div>
    <div className={classes.grid} >
      <div className={classes.container}>
        <h1>Cantina & Cucina</h1>
        <h2>Aperti tutti i “Santi” giorni, chiusi mai!</h2>
      </div>
        <div className={`${classes.element}`}>
      <img src={images[number]} className={classes.disappear}/>
    <img className={classes.small_image}src={images[3]}/>
      </div>
    </div>
    </Fragment>
  );
}
