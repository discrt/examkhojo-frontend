import React from "react";

import InfoGroup from "../../components/InfoGroup";
import Collection from "../../components/Collection";

const CourseScreen = () => {
	return (
		<Collection header="Browse through Popular Courses" placeholder="Search for Courses">
			<InfoGroup header="Top Featured Courses" search="Search Courses" />
		</Collection>
	);
};

export default CourseScreen;
