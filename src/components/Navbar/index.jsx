import React from "react";
import { Link } from "react-router-dom";

import navbarStyle from "./Navbar.module.css";

const Navbar = () => {
	return (
		<div className={navbarStyle.navbar}>
			<Link to="/">
				<img src="/images/logo-white.png" className={navbarStyle.logo} alt="Brand Logo" />
			</Link>
			<div className={navbarStyle.links}>
				<Link to="/exams">Exams</Link>
				<Link to="/colleges">Colleges</Link>
				<Link to="/courses">Courses</Link>
				<button>Get Counselling</button>
				<button className={navbarStyle.login}>Log In</button>
				<button style={{ backgroundColor: "#006BC2" }}>Sign Up for Free</button>
			</div>
		</div>
	);
};

export default Navbar;
