import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Formik, Form, Field, ErrorMessage } from "formik";

import formStyle from "./ManagerForm.module.css";
import axiosApi from "../../apis";
import Loader from "../Loader";

const renderInput = ({ field, ...props }) => {
  return (
    <input
      {...field}
      {...props}
      className={formStyle.inputField}
      autoComplete="off"
    />
  );
};

const renderError = ({ children }) => {
  return <p className={formStyle.error}>{children}</p>;
};

export const ExamForm = ({
  editItem,
  addItem,
  setShowModal,
  editFormId,
  setEditFormId
}) => {
  const [itemDetails, setItemDetails] = useState({
    name: "",
    conductingBody: "",
    level: "",
    website: "",
    duration: "",
    date: "",
    id: ""
  });
  const [loading, setLoading] = useState(true);

  const fetchFormDetails = async () => {
    try {
      const response = await axiosApi.get(`/exams/${editFormId}`);
      setTimeout(() => {
        setItemDetails(response.data);
        setLoading(false);
      }, 500);
    } catch (err) {
      console.log(err.response.data);
    }
    setShowModal(true);
  };

  useEffect(() => {
    if (editFormId) fetchFormDetails();
    else setLoading(false);
    //   eslint-disable-next-line
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Formik
      initialValues={_.pick(itemDetails, [
        "name",
        "conductingBody",
        "level",
        "duration",
        "date",
        "website"
      ])}
      enableReinitialize={true}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = "Name is required";
        }
        if (!values.conductingBody) {
          errors.conductingBody = "Conducting Body is required";
        }
        if (!values.level) {
          errors.level = "Level is required";
        }
        if (!values.website) {
          errors.website = "Website is required";
        }
        if (!values.duration) {
          errors.duration = "Duration is required";
        }
        if (!values.date) {
          errors.date = "Date is required";
        }
        return errors;
      }}
      onSubmit={values => {
        if (itemDetails.id) {
          editItem("exams", values, itemDetails.id);
          setEditFormId(null);
        } else addItem("exams", values);
        setShowModal(false);
      }}
    >
      {() => (
        <>
          <h1 style={{ marginBottom: "20px" }}>
            {(itemDetails.id ? "Edit " : "Add New ") + "Exam"}
          </h1>
          <Form className={formStyle.form}>
            <Field
              type="text"
              name="name"
              placeholder="Name of Exam"
              component={renderInput}
            />
            <ErrorMessage name="name" component={renderError} />
            <Field
              type="text"
              name="conductingBody"
              placeholder="Conducting Body"
              component={renderInput}
            />
            <ErrorMessage name="conductingBody" component={renderError} />
            <Field
              type="text"
              name="level"
              placeholder="Exam Level"
              component={renderInput}
            />
            <ErrorMessage name="level" component={renderError} />
            <Field
              type="text"
              name="website"
              placeholder="Exam Website"
              component={renderInput}
            />
            <ErrorMessage name="website" component={renderError} />
            <Field
              type="text"
              name="duration"
              placeholder="Exam Duration (in hours)"
              component={renderInput}
            />
            <ErrorMessage name="duration" component={renderError} />
            <Field
              type="text"
              name="date"
              placeholder="Date of Exam"
              component={renderInput}
            />
            <ErrorMessage name="date" component={renderError} />
            <div className={formStyle.btnContainer}>
              <button
                className={formStyle.modalBtn}
                onClick={() => {
                  setEditFormId(null);
                  setShowModal(false);
                }}
              >
                Go Back
              </button>
              <button type="submit" className={formStyle.submitBtn}>
                Submit
              </button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export const CourseForm = ({
  editItem,
  addItem,
  setShowModal,
  editFormId,
  setEditFormId
}) => {
  const [itemDetails, setItemDetails] = useState({
    name: "",
    fee: "",
    duration: "",
    stream: "",
    level: "",
    id: ""
  });
  const [loading, setLoading] = useState(true);

  const fetchFormDetails = async () => {
    try {
      const response = await axiosApi.get(`/courses/${editFormId}`);
      setTimeout(() => {
        setItemDetails(response.data);
        setLoading(false);
      }, 500);
    } catch (err) {
      console.log(err.response.data);
    }
    setShowModal(true);
  };

  useEffect(() => {
    if (editFormId) fetchFormDetails();
    else setLoading(false);
    //   eslint-disable-next-line
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Formik
      initialValues={_.pick(itemDetails, [
        "name",
        "fee",
        "level",
        "duration",
        "stream"
      ])}
      enableReinitialize={true}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = "Name is required";
        }
        if (!values.fee) {
          errors.fee = "Average Fee is required";
        }
        if (!values.level) {
          errors.level = "Level is required";
        }
        if (!values.duration) {
          errors.duration = "Course Duration is required";
        }
        if (!values.stream) {
          errors.stream = "Stream is required";
        }
        return errors;
      }}
      onSubmit={values => {
        if (itemDetails.id) {
          editItem("courses", values, itemDetails.id);
          setEditFormId(null);
        } else addItem("courses", values);
        setShowModal(false);
      }}
    >
      {() => (
        <>
          <h1 style={{ marginBottom: "20px" }}>
            {(itemDetails.id ? "Edit " : "Add New ") + "Course"}
          </h1>
          <Form className={formStyle.form}>
            <Field
              type="text"
              name="name"
              placeholder="Name of Course"
              component={renderInput}
            />
            <ErrorMessage name="name" component={renderError} />
            <Field
              type="text"
              name="fee"
              placeholder="Average Course Fee"
              component={renderInput}
            />
            <ErrorMessage name="fee" component={renderError} />
            <Field
              type="text"
              name="level"
              placeholder="Course Level"
              component={renderInput}
            />
            <ErrorMessage name="level" component={renderError} />
            <Field
              type="text"
              name="duration"
              placeholder="Course Duration (in years)"
              component={renderInput}
            />
            <ErrorMessage name="duration" component={renderError} />
            <Field
              type="text"
              name="stream"
              placeholder="Stream of Course"
              component={renderInput}
            />
            <ErrorMessage name="stream" component={renderError} />
            <div className={formStyle.btnContainer}>
              <button
                className={formStyle.modalBtn}
                onClick={() => {
                  setEditFormId(null);
                  setShowModal(false);
                }}
              >
                Go Back
              </button>
              <button type="submit" className={formStyle.submitBtn}>
                Submit
              </button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export const CollegeForm = ({
  editItem,
  addItem,
  setShowModal,
  editFormId,
  setEditFormId
}) => {
  const [itemDetails, setItemDetails] = useState({
    name: "",
    type: "",
    approval: "",
    website: "",
    city: "",
    state: "",
    id: ""
  });
  const [loading, setLoading] = useState(true);

  const fetchFormDetails = async () => {
    try {
      const response = await axiosApi.get(`/colleges/${editFormId}`);
      setTimeout(() => {
        const { city, state } = response.data.location;
        response.data = { ..._.omit(response.data, "location"), city, state };
        setItemDetails(response.data);
        setLoading(false);
      }, 500);
    } catch (err) {
      console.log(err.response.data);
    }
    setShowModal(true);
  };

  useEffect(() => {
    if (editFormId) fetchFormDetails();
    else setLoading(false);
    //   eslint-disable-next-line
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Formik
      initialValues={_.pick(itemDetails, [
        "name",
        "approval",
        "type",
        "city",
        "state",
        "website"
      ])}
      enableReinitialize={true}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = "Name is required";
        }
        if (!values.approval) {
          errors.approval = "Approving Institution is required";
        }
        if (!values.type) {
          errors.type = "Type of College is required";
        }
        if (!values.city) {
          errors.city = "City is required";
        }
        if (!values.state) {
          errors.state = "State is required";
        }
        return errors;
      }}
      onSubmit={values => {
        const { city, state } = values;
        values = {
          ..._.omit(values, ["city", "state"]),
          location: { city, state }
        };
        if (itemDetails.id) {
          editItem("colleges", values, itemDetails.id);
          setEditFormId(null);
        } else addItem("colleges", values);
        setShowModal(false);
      }}
    >
      {() => (
        <>
          <h1 style={{ marginBottom: "20px" }}>
            {(itemDetails.id ? "Edit " : "Add New ") + "College"}
          </h1>
          <Form className={formStyle.form}>
            <Field
              type="text"
              name="name"
              placeholder="Name of College"
              component={renderInput}
            />
            <ErrorMessage name="name" component={renderError} />
            <Field
              type="text"
              name="approval"
              placeholder="Approving Institution"
              component={renderInput}
            />
            <ErrorMessage name="approval" component={renderError} />
            <Field
              type="text"
              name="type"
              placeholder="Type of College"
              component={renderInput}
            />
            <ErrorMessage name="type" component={renderError} />
            <Field
              type="text"
              name="website"
              placeholder="College Website"
              component={renderInput}
            />
            <ErrorMessage name="website" component={renderError} />
            <Field
              type="text"
              name="city"
              placeholder="City where College is located"
              component={renderInput}
            />
            <ErrorMessage name="city" component={renderError} />
            <Field
              type="text"
              name="state"
              placeholder="State where College is located"
              component={renderInput}
            />
            <ErrorMessage name="state" component={renderError} />
            <div className={formStyle.btnContainer}>
              <button
                className={formStyle.modalBtn}
                onClick={() => {
                  setEditFormId(null);
                  setShowModal(false);
                }}
              >
                Go Back
              </button>
              <button type="submit" className={formStyle.submitBtn}>
                Submit
              </button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};
