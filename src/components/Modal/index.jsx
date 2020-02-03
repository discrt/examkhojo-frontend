import React from "react";
import ReactDOM from "react-dom";

import modalStyle from "./Modal.module.css";

const Modal = ({ children }) => {
	return ReactDOM.createPortal(
		<div className={modalStyle.background}>
			<div className={modalStyle.container}>{children}</div>
		</div>,
		document.getElementById("modal")
	);
};

export default Modal;
