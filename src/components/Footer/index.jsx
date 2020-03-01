import React from "react";
import footerStyle from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div
        className={`${footerStyle.registrationSection} ${footerStyle.containerFluid}`}
        style={{ margin: "100px auto" }}
      >
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
        <div className={footerStyle.containerFluid}>
          <div className={footerStyle.popularLinks}>
            <div>
              <h1>Popular Exams</h1>
              <a href="/">JEE</a>
              <a href="/">WBJEE</a>
              <a href="/">CEED</a>
              <a href="/">AIIMS</a>
            </div>
            <div>
              <h1>Top Colleges</h1>
              <a href="/">JU</a>
              <a href="/">IEM</a>
              <a href="/">Amity</a>
              <a href="/">UEM</a>
            </div>
            <div>
              <h1>Top Courses</h1>
              <a href="/">B. Tech</a>
              <a href="/">M. Tech</a>
              <a href="/">PhD</a>
              <a href="/">MBBS</a>
            </div>
            <div>
              <h1>Resources</h1>
              <a href="/">Brochure</a>
              <a href="/">Counselling</a>
              <a href="/">Edu Guide</a>
              <a href="/">Study Material</a>
            </div>
            <div>
              <h1>Company</h1>
              <a href="/">About Us</a>
              <a href="/">Advertising</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Contact Us</a>
              <a href="/">Careers</a>
              <a href="/">Terms &amp; Conditions</a>
            </div>
          </div>
          <div className={footerStyle.detailSection}>
            <img src="/images/logo-white.png" alt="Brand Logo" width={200} />
            <div className={footerStyle.iconGroup}>
              <a href="https://www.youtube.com/channel/UC4Kc7m9reV-1qxAUFap8-Zw/">
                <img src="/images/social-icon-youtube.svg" alt="Youtube Icon" />
              </a>
              <a href="https://www.facebook.com/examkhojo/">
                <img
                  src="/images/social-icon-facebook.svg"
                  alt="Facebook Icon"
                />
              </a>
              <a href="https://www.instagram.com/exam_khojo/">
                <img src="/images/social-icon-insta.svg" alt="Instagram Icon" />
              </a>
              <a href="https://in.pinterest.com/examkhojo/">
                <img
                  src="/images/social-icon-pinterest.svg"
                  alt="Pinterest Icon"
                />
              </a>
              <a href="https://twitter.com/examkhojo">
                <img src="/images/social-icon-twitter.svg" alt="Twitter Icon" />
              </a>
              <a href="https://www.linkedin.com/company/examkhojo">
                <img
                  src="/images/social-icon-linkedin.svg"
                  alt="LinkedIn Icon"
                />
              </a>
            </div>
          </div>
          <p className={footerStyle.copyright}>
            &copy; Copyright 2020 Examkhojo Pvt. Ltd. All rights reserved. All
            trademarks are owned by their respective owners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
