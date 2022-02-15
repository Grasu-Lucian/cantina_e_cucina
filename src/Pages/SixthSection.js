import React, { Fragment } from "react";
import { useState } from "react";
import logo from "../Images/logo.png";
import classes from "./SixthSection.module.css";
import image0 from "../Images/Gallery/image0.jpg";
import image1 from "../Images/Gallery/image1.jpg";
import image2 from "../Images/Gallery/image2.jpg";
import image3 from "../Images/Gallery/image3.jpg";
import image4 from "../Images/Gallery/image4.jpg";
import image5 from "../Images/Gallery/image5.jpg";
import image6 from "../Images/Gallery/image6.jpg";
import image7 from "../Images/Gallery/image7.jpg";
import image8 from "../Images/Gallery/image8.jpg";
import image9 from "../Images/Gallery/image9.jpg";
import image10 from "../Images/Gallery/image10.jpg";
import image11 from "../Images/Gallery/image11.jpg";
import FirstModal from "../Shared/FirstModal";
const images = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];
export default function SixthSection() {
  const[element,setElement]=useState(null)
  return (<Fragment>
    <div className={classes.name} id="I_locale"></div>
    <div className={classes.background}>
      <img src={logo} className={classes.logo}/>
      <div className={classes.title}>Il Nostro Locale</div>
      <div className={classes.grid}>
        <img className={classes.element0} onClick={()=>{setElement(0)}}src={image0} />
        <img className={classes.element1}  onClick={()=>{setElement(1)}}src={image1} />
        <img className={classes.element2}  onClick={()=>{setElement(2)}}src={image2} />
        <img className={classes.element3}  onClick={()=>{setElement(3)}}src={image3} />
        <img className={classes.element4}  onClick={()=>{setElement(4)}}src={image4} />
        <img className={classes.element5}  onClick={()=>{setElement(5)}}src={image5} />
        <img className={classes.element6}  onClick={()=>{setElement(6)}}src={image6} />
        <img className={classes.element7}  onClick={()=>{setElement(7)}}src={image7} />
        <img className={classes.element8}  onClick={()=>{setElement(8)}}src={image8} />
        <img className={classes.element9}  onClick={()=>{setElement(9)}}src={image9} />
        <img className={classes.element10}  onClick={()=>{setElement(10)}}src={image10} />
        <img className={classes.element11}  onClick={()=>{setElement(11)}}src={image11} />
        {(element||element==0) && (<FirstModal element={element} setElement={setElement}images={images}/>)}
      </div>
    </div>
    </Fragment>
  );
}
