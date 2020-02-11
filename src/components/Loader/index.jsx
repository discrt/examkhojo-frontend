import React from "react";

import loaderStyle from "./Loader.module.css";

const Loader = ({ height, color }) => (
  <div style={{ height, position: "relative" }}>
    <div className={loaderStyle.ldsRipple}>
      <div style={{ borderColor: color }}></div>
      <div style={{ borderColor: color }}></div>
    </div>
  </div>
);

Loader.defaultProps = {
  height: "200px",
  color: "#000000"
};

export default Loader;
