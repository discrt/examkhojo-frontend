import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Navbar from "../../components/Navbar";
import InfoGroup from "../../components/InfoGroup";
import Footer from "../../components/Footer";
import AuthModal from "../../components/AuthModal";
import Loader from "../../components/Loader";
import dashboardStyle from "./DashboardScreen.module.css";
import { getUser } from "../../actions";

const DashboardScreen = ({ user, getUser }) => {
  const [loading, setLoading] = useState(user === null);

  useEffect(() => {
    if (user === null) getUser();
    setTimeout(() => setLoading(false), 500);
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Loader height="100vh" />
  ) : !user ? (
    <AuthModal />
  ) : (
    <>
      <div className={dashboardStyle.landingPage}>
        <Navbar />
        <div className={dashboardStyle.userProfile}>
          <img src="/images/user-icon.svg" alt="User Profile" width={100} />
          <div>
            <h2>{user.name}</h2>
            <div className={dashboardStyle.editSection}>
              <i className="far fa-edit"></i>
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

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps, { getUser })(DashboardScreen);
