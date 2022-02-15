import React from 'react';
import ReactDOM  from 'react-dom';
import classes from './FirstModal.module.css'
export default function SecondModal(props) {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <NextModal
          men={props.men}
          menu={props.menu}
          setMen={props.setMen}
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

const Background = (props) => {
    return (
      <div
        onClick={() => {
          props.setMen(null);
        }}
        className={classes.background}
      ></div>
    );
  };
  const NextModal = (props) => {
    const ClickEventHandler = () => {
      if (props.men < 4) {
        props.setMen(props.men + 1);
      } else {
        props.setMen(0);
      }
    };
    const ClickEventHandler1 = () => {
      if (props.men > 0) {
        props.setMen(props.men - 1);
      } else {
        props.setMen(4);
      }
    };
    return (
      <div className={classes.container}>
        <div className={classes.number}>{`${props.men + 1}/5`}</div>
        <button
          className={classes.close}
          onClick={() => {
            props.setMen(null);
          }}
        >
          X
        </button>
        <button className={classes.back} onClick={ClickEventHandler1}>
          🡰
        </button>
        <img src={props.menu[props.men]} />
        <button className={classes.next} onClick={ClickEventHandler}>
          🡲
        </button>
      </div>
    );
  };