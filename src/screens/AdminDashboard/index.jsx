import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import adminDashboardStyle from "./AdminDashboard.module.css";
import { registerManager, getManagers, deleteManager } from "../../actions";
import Modal from "../../components/Modal";

const AdminDashboard = ({
  admin,
  registerManager,
  getManagers,
  deleteManager
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    getManagers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderInput = ({ field, ...props }) => {
    return (
      <input
        {...field}
        {...props}
        className={adminDashboardStyle.inputField}
        autoComplete="off"
      />
    );
  };

  const renderError = ({ children }) => {
    return <p className={adminDashboardStyle.error}>{children}</p>;
  };

  const renderManagers = () => {
    if (admin.managerList && admin.managerList.length)
      return admin.managerList.map(cur => (
        <li key={cur.username}>
          {renderDeleteAlert(cur)}
          <div className={adminDashboardStyle.managerInfoContainer}>
            <p className={adminDashboardStyle.header}>{cur.name}</p>
            <p className={adminDashboardStyle.subheader}>@{cur.username}</p>
          </div>
          <i className="fas fa-trash" onClick={() => setShowAlert(cur)}></i>
        </li>
      ));
    return (
      <p
        style={{
          marginTop: "20px",
          fontSize: "1.2rem",
          fontFamily: "Mark-Bold"
        }}
      >
        No Managers exist currently!
      </p>
    );
  };

  const renderDeleteAlert = manager => {
    return showAlert && showAlert === manager ? (
      <Modal>
        <div style={{ fontSize: "1.5rem" }}>
          Do you want to remove {manager.name} from Manager List?
        </div>
        <div className={adminDashboardStyle.btnContainer}>
          <button
            className={adminDashboardStyle.modalBtn}
            onClick={() => setShowAlert(false)}
          >
            Go Back
          </button>
          <button
            className={adminDashboardStyle.modalBtn}
            onClick={() => {
              deleteManager(manager.username);
              setShowAlert(false);
            }}
            style={{ background: "#006bc2", color: "#ffffff" }}
          >
            Delete
          </button>
        </div>
      </Modal>
    ) : null;
  };

  return (
    <>
      {showModal ? (
        <Modal>
          <Formik
            initialValues={{ name: "", username: "", password: "" }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = "Name is required";
              }
              if (!values.username) {
                errors.username = "Username is required";
              }
              if (values.password.length < 8) {
                errors.password =
                  "Password length must be atleast 8 characters";
              }
              return errors;
            }}
            onSubmit={values => {
              registerManager(values.name, values.username, values.password);
              setShowModal(false);
            }}
          >
            {() => (
              <>
                <h1 style={{ marginBottom: "20px" }}>Add New Manager</h1>
                <Form className={adminDashboardStyle.form}>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    component={renderInput}
                  />
                  <ErrorMessage name="name" component={renderError} />
                  <Field
                    type="text"
                    name="username"
                    placeholder="Username"
                    component={renderInput}
                  />
                  <ErrorMessage name="username" component={renderError} />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    component={renderInput}
                  />
                  <ErrorMessage name="password" component={renderError} />
                  <div className={adminDashboardStyle.btnContainer}>
                    <button
                      className={adminDashboardStyle.modalBtn}
                      onClick={() => setShowModal(false)}
                    >
                      Go Back
                    </button>
                    <button
                      type="submit"
                      className={adminDashboardStyle.submitBtn}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </Modal>
      ) : null}
      <a href="/admin">
        <div className={adminDashboardStyle.logout}>
          <i className="fas fa-power-off"></i>
          <p>Logout</p>
        </div>
      </a>
      <div className={adminDashboardStyle.container}>
        <div className={adminDashboardStyle.infoPanel}>
          <img src="/images/logo-main.png" width={200} alt="Examkhojo Logo" />
          <p className={adminDashboardStyle.header}>Hello, {admin.name}</p>
          <p className={adminDashboardStyle.subheader}>@{admin.username}</p>
        </div>
        <div className={adminDashboardStyle.managerList}>
          <h1>Existing Managers</h1>
          <ul>{renderManagers()}</ul>
        </div>
      </div>
      <i
        className={`fas fa-plus-circle ${adminDashboardStyle.addBtn}`}
        onClick={() => setShowModal(true)}
      ></i>
    </>
  );
};

const mapStateToProps = state => {
  return {
    admin: state.admin
  };
};

export default connect(mapStateToProps, {
  registerManager,
  getManagers,
  deleteManager
})(AdminDashboard);
