import React, { useState } from "react";

import Navbar from "../../components/Navbar";
import homeStyle from "./HomeScreen.module.css";
import InfoGroup from "../../components/InfoGroup";
import Footer from "../../components/Footer";

const HomeScreen = () => {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<>
			<div className={homeStyle.landingPage}>
				<Navbar />
				<div className={homeStyle.centralInput}>
					<h1 className={homeStyle.header}>Be the Best Version of You</h1>
					<div className={homeStyle.inputBar}>
						<i className="fas fa-search"></i>
						<input
							type="text"
							placeholder="Search Exams, Colleges, Courses &amp; more"
							onChange={event => setSearchTerm(event.target.value)}
							value={searchTerm}
						/>
					</div>
				</div>
			</div>
			<div className={homeStyle.showcase}>
				<p className={homeStyle.showcaseHeader}>
					Having problems <br /> Deciding what to do?
				</p>
				<div className={homeStyle.showcaseContent}>
					<h3>Get Expert Counselling</h3>
					<p>
						We ease your biggest doubts with personalized Video Counselling from our Curated Experts
						and Answers from the student community
					</p>
					<button>Get Counselling</button>
				</div>
			</div>
			<InfoGroup header="Top Featured Exams" search="Search Exams" />
			<InfoGroup header="Top Featured Colleges" search="Search Colleges" />
			<InfoGroup header="Top Featured Courses" search="Search Courses" />
			<Footer />
		</>
	);
};

export default HomeScreen;
