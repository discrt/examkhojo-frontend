import React, { useState } from "react";

import infoStyle from "./InfoGroup.module.css";
import InfoCard from "../InfoCard";

const InfoGroup = ({ header, search }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className={infoStyle.infoContainer}>
      <div className={infoStyle.headerSection}>
        <div>
          <h1>{header}</h1>
          <p className={infoStyle.description}>
            We ease your biggest doubts with personalized Video Counselling from
            our Curated Experts and Answers from the student community
          </p>
        </div>
        <div className={infoStyle.inputBar}>
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder={search}
            onChange={event => setSearchTerm(event.target.value)}
            value={searchTerm}
          />
        </div>
      </div>
      <div className={infoStyle.cardGroup}>
        <InfoCard
          header="Exam 1"
          subheaders={[
            "Feb 14, 2020",
            "National Testing Agency",
            "National Level"
          ]}
        />
        <InfoCard
          header="Exam 1"
          subheaders={[
            "Feb 14, 2020",
            "National Testing Agency",
            "National Level"
          ]}
        />
        <InfoCard
          header="Exam 1"
          subheaders={[
            "Feb 14, 2020",
            "National Testing Agency",
            "National Level"
          ]}
        />
      </div>
    </div>
  );
};

export default InfoGroup;
