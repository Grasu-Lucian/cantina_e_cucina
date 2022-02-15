import React, { Fragment } from "react";
import { useState } from "react";
import classes from "./FifthSection.module.css";
import menu1 from "../Images/meniu.jpg";
import menu2 from "../Images/meniu1.jpg";
import menu3 from "../Images/meniu_english.jpg";
import menu4 from "../Images/meniu_france.jpg";
import menu5 from "../Images/meniu_spain.jpg";
import background from '../Images/background.jpg'
import SecondModal from '../Shared/SecondModal.js'
const menu = [menu1, menu2, menu3, menu4, menu5];
export default function FifthSection() {
  const ClickEventHandler=(anc)=>{
    setMen(anc)
  }
  const [men,setMen]=useState(null)
  return (<Fragment>
    <div className={classes.name} id='I_menu'></div>
    <div className={classes.container}>
      <div className={classes.context}>
          <div className={classes.sizer}>
          <img src={background}/></div>
        <div className={classes.title}>Menù Aggiornati</div>
        <p>
          Potete scaricare e consultare i nostri Menù nella lingua desiderata
          cliccando sulle immagini dei menu di seguito!
        </p>
      </div>
      <div className={classes.grid}>
        <div className={classes.menu}>
          {menu.map((menu, anc) => (
           <div key={anc} onClick={()=>{ClickEventHandler(anc)}}className={classes.image}> <img src={menu} key={anc} />
</div>          ))}
        </div>
      </div>
      {(men||men==0) && (<SecondModal men={men}setMen={setMen} menu={menu}/>)}
    </div>
    </Fragment>
  );
}
