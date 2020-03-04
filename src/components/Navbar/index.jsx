import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getUser, logoutUser } from "../../actions";
import Button from "../Button";
import Loader from "../Loader";
import navbarStyle from "./Navbar.module.css";

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
        <Link to="/exams" style={{ paddingLeft: 0 }}>
          Exams
        </Link>
        <Link to="/colleges">Colleges</Link>
        <Link to="/courses">Courses</Link>
        <a href="/">Get Counselling</a>
        {loading ? (
          <Loader height="0" color="#ffffff" />
        ) : user ? (
          <div style={{ position: "relative" }}>
            <button
              className={navbarStyle.profileDropdown}
              style={{ paddingRight: 0 }}
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
            <Button
              title="Log In"
              onClick={() => setShowModal(true)}
              outline
              style={{ color: "#fff" }}
            />
            <Button
              title="Sign Up for Free"
              onClick={() => setShowModal(true)}
            />
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
