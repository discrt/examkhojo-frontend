import React, { useState } from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import AuthModal from "../AuthModal";
import collectionStyle from "./Collection.module.css";

const Collection = ({ header, placeholder, children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? <AuthModal setShowModal={setShowModal} /> : null}
      <div className={collectionStyle.landingPage}>
        <Navbar setShowModal={setShowModal} />
        <div className={collectionStyle.centralInput}>
          <h1 className={collectionStyle.header}>{header}</h1>
          <div className={collectionStyle.inputBar}>
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder={placeholder}
              onChange={event => setSearchTerm(event.target.value)}
              value={searchTerm}
            />
          </div>
        </div>
      </div>
      {children}
      <button className={collectionStyle.loadButton}>Load More</button>
      <Footer />
    </>
  );
};

export default Collection;
