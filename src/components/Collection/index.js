import React, { useState } from "react";

import Navbar from "../Navbar";
import Footer from "../../components/Footer";
import collectionStyle from "./Collection.module.css";

const Collection = ({ header, placeholder, children }) => {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<>
			<div className={collectionStyle.landingPage}>
				<Navbar />
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
