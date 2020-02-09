import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";

import authModalStyle from "./AuthModal.module.css";
import Modal from "../Modal";
import { registerUser, loginUser, oauthGoogleLogin } from "../../actions";

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
              registerUser(values);
            }}
          >
            {() => (
              <Form className={authModalStyle.form}>
                <Field
                  type="text"
                  name="name"
                  label="Name"
                  placeholder="Type Your Name"
                  component={renderInput}
                />
                <ErrorMessage name="name" component="div" />
                <Field
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Type Your Email"
                  component={renderInput}
                />
                <ErrorMessage name="email" component="div" />
                <Field
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Type Your Password"
                  component={renderInput}
                />
                <ErrorMessage name="password" component="div" />
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
                <ErrorMessage name="email" component="div" />
                <Field
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Type Your Password"
                  component={renderInput}
                />
                <ErrorMessage name="password" component="div" />
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
                onClick={e =>
                  e.target.parentElement.parentElement.parentElement.parentElement.classList.remove(
                    authModalStyle.rightPanelActive
                  )
                }
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
                onClick={e =>
                  e.target.parentElement.parentElement.parentElement.parentElement.classList.add(
                    authModalStyle.rightPanelActive
                  )
                }
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
