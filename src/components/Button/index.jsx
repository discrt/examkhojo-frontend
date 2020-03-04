import React from "react";
import buttonStyle from "./Button.module.css";

const Button = ({ title, children, outline, onClick, style }) => {
  return (
    <button
      className={
        children
          ? outline
            ? buttonStyle.iconButtonOutline
            : buttonStyle.iconButtonPrimary
          : outline
          ? buttonStyle.buttonOutline
          : buttonStyle.buttonPrimary
      }
      style={style}
      onClick={onClick}
    >
      {children}
      {title}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  title: "",
  outline: false,
  onClick: null,
  style: null
};

export default Button;
