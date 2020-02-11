import React from "react";
import _ from "lodash";

import cardStyle from "./InfoCard.module.css";

const InfoCard = ({ header, subheaders, link, logo, children }) => {
  const renderDetails = () =>
    subheaders.map((cur, index) => {
      if (_.isPlainObject(cur))
        return (
          <div key={"object" + index} className={cardStyle.objectList}>
            {_.map(_.values(cur), (el, index) => (
              <div key={el}>{el}</div>
            ))}
          </div>
        );
      else return <p key={cur}>{cur}</p>;
    });
  return (
    <div className={cardStyle.container}>
      {logo ? <img src={logo} alt="Logo" width={100} /> : null}
      <div className={cardStyle.details}>
        <h1>{header}</h1>
        {renderDetails()}
      </div>
      {children}
    </div>
  );
};

export default InfoCard;
