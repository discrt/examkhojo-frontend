import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser, oauthGoogleLogin, registerUser } from "../../actions";
import Modal from "../Modal";
import authModalStyle from "./AuthModal.module.css";

const renderInput = ({ field, ...props }) => {
  return (
    <div className={authModalStyle.inputContainer}>
      <label>{props.label}</label>
      <input {...field} {...props} spellCheck="false" autoComplete="off" />
    </div>
  );
};

const AuthModal = ({
  setShowModal,
  registerUser,
  loginUser,
  oauthGoogleLogin,
  user,
  history
}) => {
  useEffect(() => {
    if (user) {
      setShowModal && setShowModal(false);
      history.push("/dashboard");
    }
    // eslint-disable-next-line
  }, [user]);

  const [showPassword, setShowPassword] = useState(false);

  const renderPasswordInput = ({ field, ...props }) => {
    return (
      <div className={authModalStyle.inputContainer}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
          className={authModalStyle.passwordContainer}
        >
          <input {...field} {...props} spellCheck="false" autoComplete="off" />
          <img
            src={
              showPassword
                ? "/images/Eye Invisible.svg"
                : "/images/Eye Visibility.svg"
            }
            alt={showPassword ? "Hide Password" : "Show Password"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <Modal background="rgba(0,0,0,0)">
      <div className={authModalStyle.container}>
        <div
          className={`${authModalStyle.formContainer} ${authModalStyle.signupContainer}`}
        >
          <div className={authModalStyle.header}>Welcome to Examkhojo</div>
          <div className={authModalStyle.subheader}>Sign Up</div>
          <Formik
            initialValues={{ email: "", name: "", password: "" }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email is required";
              }
              if (
                !/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
                  values.email
                )
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.name) {
                errors.name = "Name is required";
              }
              if (values.password.length < 8) {
                errors.password = "Password must be 8 characters long";
              }
              return errors;
            }}
            onSubmit={values => {
              values = {
                ...values,
                registrationSlug: window.location.href.split("/").pop()
                  ? window.location.href.split("/").pop()
                  : "home"
              };
              registerUser(values);
            }}
          >
            {() => (
              <Form className={authModalStyle.form} autoComplete="false">
                <Field
                  type="text"
                  name="name"
                  label="Name"
                  placeholder="Type Your Name"
                  component={renderInput}
                />
                <ErrorMessage
                  name="name"
                  render={msg => (
                    <div style={{ fontSize: "0.8rem", color: "#C64545" }}>
                      {msg}
                    </div>
                  )}
                />
                <Field
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Type Your Email"
                  component={renderInput}
                />
                <ErrorMessage
                  name="email"
                  render={msg => (
                    <div style={{ fontSize: "0.8rem", color: "#C64545" }}>
                      {msg}
                    </div>
                  )}
                />
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label="Password"
                  placeholder="Type Your Password"
                  component={renderInput}
                />
                <ErrorMessage
                  name="password"
                  render={msg => (
                    <div style={{ fontSize: "0.8rem", color: "#C64545" }}>
                      {msg}
                    </div>
                  )}
                />
                <button
                  type="submit"
                  className={`${authModalStyle.signup} ${authModalStyle.btn}`}
                >
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>
          <hr />
          <div className={authModalStyle.socialContainer}>
            <button
              className={authModalStyle.social}
              onClick={oauthGoogleLogin}
            >
              <i className="fab fa-google-plus-g"></i>
              <p>Continue with Google</p>
            </button>
            <button className={authModalStyle.social}>
              <i className="fab fa-facebook-f"></i>
              <p>Continue with Facebook</p>
            </button>
          </div>
        </div>
        <div
          className={`${authModalStyle.formContainer} ${authModalStyle.signinContainer}`}
        >
          <div className={authModalStyle.header}>Welcome Back</div>
          <div className={authModalStyle.subheader}>Log In</div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email is required";
              }
              if (
                !/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
                  values.email
                )
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={values => {
              loginUser(values);
            }}
          >
            {() => (
              <Form className={authModalStyle.form}>
                <Field
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Type Your Email"
                  component={renderInput}
                />
                <ErrorMessage
                  name="email"
                  render={msg => (
                    <div style={{ fontSize: "0.8rem", color: "#C64545" }}>
                      {msg}
                    </div>
                  )}
                />
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label="Password"
                  placeholder="Type Your Password"
                  component={renderPasswordInput}
                />
                <button
                  type="submit"
                  className={`${authModalStyle.signup} ${authModalStyle.btn}`}
                >
                  Log In
                </button>
              </Form>
            )}
          </Formik>
          <hr />
          <div className={authModalStyle.socialContainer}>
            <button
              className={authModalStyle.social}
              onClick={oauthGoogleLogin}
            >
              <i className="fab fa-google-plus-g"></i>
              <p>Continue with Google</p>
            </button>
            <button className={authModalStyle.social}>
              <i className="fab fa-facebook-f"></i>
              <p>Continue with Facebook</p>
            </button>
          </div>
        </div>
        <div className={authModalStyle.overlayContainer}>
          <div className={authModalStyle.overlay}>
            <div
              className={`${authModalStyle.overlayPanel} ${authModalStyle.overlayLeft}`}
            >
              <h1 className={authModalStyle.header}>
                Already Have an Account?
              </h1>
              <p>Log In to access all your bookmarked items</p>
              <button
                className={authModalStyle.btn}
                onClick={e => {
                  e.target.parentElement.parentElement.parentElement.parentElement.classList.remove(
                    authModalStyle.rightPanelActive
                  );
                  setShowPassword(false);
                }}
              >
                Log In
              </button>
            </div>
            <div
              className={`${authModalStyle.overlayPanel} ${authModalStyle.overlayRight}`}
            >
              <h1 className={authModalStyle.header}>Don’t Have an Account?</h1>
              <p>Sign up to stay updated with the latest details</p>
              <button
                className={authModalStyle.btn}
                onClick={e => {
                  e.target.parentElement.parentElement.parentElement.parentElement.classList.add(
                    authModalStyle.rightPanelActive
                  );
                  setShowPassword(false);
                }}
              >
                Sign Up for Free
              </button>
            </div>
          </div>
        </div>
        {setShowModal ? (
          <i
            className={`far fa-times-circle ${authModalStyle.closeBtn}`}
            onClick={() => setShowModal(false)}
          ></i>
        ) : null}
      </div>
    </Modal>
  );
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps, {
  registerUser,
  loginUser,
  oauthGoogleLogin
})(withRouter(AuthModal));
