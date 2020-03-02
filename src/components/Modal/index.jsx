import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import modalStyle from "./Modal.module.css";

const Modal = ({ children, background, containerBackground }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return ReactDOM.createPortal(
    <div className={modalStyle.background} style={{background: containerBackground}}>
      <div className={modalStyle.container} style={{ background }}>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

Modal.defaultProps = {
  background: "#fff",
  containerBackground: "rgba(0, 0, 0, 0.4)"
};

export default Modal;
