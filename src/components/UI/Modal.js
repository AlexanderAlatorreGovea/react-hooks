import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const portalElement = document.getElementById('overlays');

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};
 
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
  {ReactDOM.createPortal(<ModalOverlay onClick={props.onClick} >{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
