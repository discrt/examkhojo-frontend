import React from "react";

import Navbar from "../../components/Navbar";
import InfoGroup from "../../components/InfoGroup";
import Footer from "../../components/Footer";
import dashboardStyle from "./DashboardScreen.module.css";

const DashboardScreen = () => {
	return (
		<>
			<div className={dashboardStyle.landingPage}>
				<Navbar />
				<div className={dashboardStyle.userProfile}>
					<img src="/images/user-icon.svg" alt="User Profile" width={100} />
					<div>
						<h2>Amit Trivedi</h2>
						<div className={dashboardStyle.editSection}>
							<i class="far fa-edit"></i>
							<p>Edit</p>
						</div>
					</div>
				</div>
				<div className={dashboardStyle.bookmarkContainer}>
					<h2>Bookmarks</h2>
					<div className={dashboardStyle.bookmarkMenu}>
						<p>Exams</p>
						<p>Colleges</p>
						<p>Courses</p>
					</div>
				</div>
			</div>
			<InfoGroup header="Top Featured Exams" search="Search Exams" />
			<InfoGroup header="Top Featured Colleges" search="Search Colleges" />
			<InfoGroup header="Top Featured Courses" search="Search Courses" />
			<Footer />
		</>
	);
};

export default DashboardScreen;
