import React from "react";

import footerStyle from "./Footer.module.css";

const Footer = () => {
	return (
		<div>
			<div className={footerStyle.registrationSection}>
				<div className={footerStyle.registrationHeader}>
					<h1>Get Exclusive Updates</h1>
					<p>Register now with Examkhojo.com</p>
				</div>
				<div className={footerStyle.input}>
					<label>Full Name</label>
					<input type="text" placeholder="Type your full name" />
				</div>
				<div className={footerStyle.input}>
					<label>Your Email</label>
					<input type="text" placeholder="Type your email" />
				</div>
				<button className={footerStyle.registerButton}>Subscribe</button>
			</div>
			<div className={footerStyle.footerSection}>
				<div className={footerStyle.popularLinks}>
					<div>
						<h1>Popular Exams</h1>
						<p>JEE</p>
						<p>WBJEE</p>
						<p>CEED</p>
						<p>AIIMS</p>
					</div>
					<div>
						<h1>Top Colleges</h1>
						<p>JU</p>
						<p>IEM</p>
						<p>Amity</p>
						<p>UEM</p>
					</div>
					<div>
						<h1>Top Courses</h1>
						<p>B. Tech</p>
						<p>M. Tech</p>
						<p>PhD</p>
						<p>MBBS</p>
					</div>
					<div>
						<h1>Resources</h1>
						<p>Brochure</p>
						<p>Counselling</p>
						<p>Edu Guide</p>
						<p>Study Material</p>
					</div>
				</div>
				<div className={footerStyle.detailSection}>
					<div style={{ textAlign: "left" }}>
						<img src="/images/logo-white.png" alt="Brand Logo" width={200} />
						<p>
							Examkhojo is a web portal for students. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div>
						<p>About Us</p>
						<p>Advertising</p>
						<p>Privacy Policy</p>
					</div>
					<div>
						<p>Contact Us</p>
						<p>Careers</p>
						<p>Terms &amp; Conditions</p>
					</div>
					<div className={footerStyle.iconGroup}>
						<div>
							<i class="fab fa-youtube"></i>
							<i class="fab fa-facebook"></i>
							<i class="fab fa-instagram"></i>
						</div>
						<div>
							<i class="fab fa-snapchat-ghost"></i>
							<i class="fab fa-twitter"></i>
							<i class="fab fa-linkedin"></i>
						</div>
					</div>
				</div>
				<p className={footerStyle.copyright}>
					&copy; Copyright 2020 Examkhojo Pvt. Ltd. All rights reserved. All trademarks are owned by
					their respective owners.
				</p>
			</div>
		</div>
	);
};

export default Footer;
