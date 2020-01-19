import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import CollegeScreen from "../screens/CollegeScreen";
import ExamScreen from "../screens/ExamScreen";
import CourseScreen from "../screens/CourseScreen";
import DashboardScreen from "../screens/DashboardScreen.js";

const App = () => {
	return (
		<BrowserRouter>
			{/* <Route path="/" exact component={HomeScreen} /> */}
			<Route path="/" exact component={DashboardScreen} />
			<Route path="/colleges" exact component={CollegeScreen} />
			<Route path="/exams" exact component={ExamScreen} />
			<Route path="/courses" exact component={CourseScreen} />
		</BrowserRouter>
	);
};

export default App;
