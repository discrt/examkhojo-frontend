import React, { useEffect, useState } from "react";
import searchModalStyle from "./SearchModal.module.css";

const SearchModal = ({setShowSearch}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={searchModalStyle.modalContainer}>
      <div className={searchModalStyle.inputBar}>
        <i className={`far fa-times-circle ${searchModalStyle.closeBtn}`} onClick={()=> setShowSearch(false)}></i>
        <i className={`fas fa-search ${searchModalStyle.searchIcon}`}></i>
        <input
          type="text"
          placeholder="Search Exams, Colleges, Courses &amp; more"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
      </div>
      <div className={searchModalStyle.containerFluid}>
        <h1>Popular Searches</h1>
        <ul>
          <li>Engineering Colleges</li>
          <li>PG Courses</li>
          <li>UG Courses</li>
          <li>Top Engineering Exams</li>
          <li>Colleges in Bangalore</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchModal;
