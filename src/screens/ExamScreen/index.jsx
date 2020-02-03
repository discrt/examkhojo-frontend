import React from "react";

import InfoGroup from "../../components/InfoGroup";
import Collection from "../../components/Collection";

const ExamScreen = () => {
	return (
		<Collection header="Browse through Popular Exams" placeholder="Search for Exams">
			<InfoGroup header="Top Featured Exams" search="Search Exams" />
		</Collection>
	);
};

export default ExamScreen;
