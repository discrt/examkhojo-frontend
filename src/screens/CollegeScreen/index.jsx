import React from "react";

import InfoGroup from "../../components/InfoGroup";
import Collection from "../../components/Collection";

const CollegeScreen = () => {
	return (
		<Collection header="Check Out the Top Colleges" placeholder="Search for Colleges">
			<InfoGroup header="Top Featured Colleges" search="Search Colleges" />
		</Collection>
	);
};

export default CollegeScreen;
