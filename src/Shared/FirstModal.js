import React from "react";
import { Component } from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./FirstModal.module.css";
export default function FirstModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <NextModal
          element={props.element}
          images={props.images}
          setElement={props.setElement}
        />,
        document.getElementById("backdrop-root")
      )}
      ,
      {ReactDOM.createPortal(
        <Background element={props.element} setElement={props.setElement} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
const NextModal = (props) => {
  const ClickEventHandler = () => {
    if (props.element < 11) {
      props.setElement(props.element + 1);
    } else {
      props.setElement(0);
    }
  };
  const ClickEventHandler1 = () => {
    if (props.element > 0) {
      props.setElement(props.element - 1);
    } else {
      props.setElement(11);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.number}>{`${props.element + 1}/12`}</div>
      <button
        className={classes.close}
        onClick={() => {
          props.setElement(null);
        }}
      >
        X
      </button>
      <button className={classes.back} onClick={ClickEventHandler1}>
        🡰
      </button>
      <img src={props.images[props.element]} />
      <button className={classes.next} onClick={ClickEventHandler}>
        🡲
      </button>
    </div>
  );
};

const Background = (props) => {
  return (
    <div
      onClick={() => {
        props.setElement(null);
      }}
      className={classes.background}
    ></div>
  );
};
