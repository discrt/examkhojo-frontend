import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Loader from "../Loader";
import navbarStyle from "./Navbar.module.css";
import { logoutUser, getUser } from "../../actions";

const Navbar = ({ setShowModal, user, logoutUser, getUser, history }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(user === null);

  useEffect(() => {
    if (user === null) getUser();
    setTimeout(() => setLoading(false), 500);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={navbarStyle.navbar}>
      <Link to="/">
        <img
          src="/images/logo-white.png"
          className={navbarStyle.logo}
          alt="Brand Logo"
        />
      </Link>
      <div className={navbarStyle.links}>
        <Link to="/exams">Exams</Link>
        <Link to="/colleges">Colleges</Link>
        <Link to="/courses">Courses</Link>
        <button>Get Counselling</button>
        {loading ? (
          <Loader height="0" color="#ffffff" />
        ) : user ? (
          <div style={{ position: "relative" }}>
            <button
              className={navbarStyle.profileDropdown}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <i className="far fa-user" style={{ marginRight: "10px" }}></i>
              <p>You</p>
              <i
                className={`fas fa-chevron-${showDropdown ? "up" : "down"}`}
                style={{ marginLeft: "20px" }}
              ></i>
            </button>
            {showDropdown ? (
              <div className={navbarStyle.dropdown}>
                <p>
                  <Link
                    to="/dashboard"
                    style={{
                      color: "#000",
                      margin: 0,
                      padding: 0,
                      fontSize: "1rem"
                    }}
                  >
                    Dashboard
                  </Link>
                </p>
                <p
                  style={{ color: "#006BC2" }}
                  onClick={() => {
                    logoutUser();
                    history.push("/");
                  }}
                >
                  Logout
                </p>
              </div>
            ) : null}
          </div>
        ) : (
          <>
            <button
              className={navbarStyle.login}
              onClick={() => setShowModal(true)}
            >
              Log In
            </button>
            <button
              style={{ backgroundColor: "#006BC2" }}
              onClick={() => setShowModal(true)}
            >
              Sign Up for Free
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps, { logoutUser, getUser })(
  withRouter(Navbar)
);
