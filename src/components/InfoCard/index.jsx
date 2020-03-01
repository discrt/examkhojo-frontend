import React from "react";
import _ from "lodash";

import cardStyle from "./InfoCard.module.css";

const InfoCard = ({ header, subheaders, logo, children }) => {
  const renderDetails = () =>
    subheaders.map((cur, index) => {
      if (_.isPlainObject(cur))
        return (
          <div key={"object" + index} className={cardStyle.objectList}>
            {_.map(_.values(cur), el => (
              <div key={el}>{el}</div>
            ))}
          </div>
        );
      else return <p key={cur}>{cur}</p>;
    });
  return (
    <div className={cardStyle.container}>
      {logo ? (
        <img src={logo} alt="Logo" width={100} />
      ) : (
        <img src="/images/exam.png" alt="Logo" width={100} />
      )}
      <div className={cardStyle.details}>
        <h1 style={{ color: "#52535C", fontSize: "1.6rem" }}>{header}</h1>
        {renderDetails()}
      </div>
      {children}
    </div>
  );
};

export default InfoCard;
