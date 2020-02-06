import React from "react";

import loaderStyle from "./Loader.module.css";

const Loader = () => (
  <div style={{ height: "200px", position: "relative" }}>
    <div className={loaderStyle.ldsRipple}>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
