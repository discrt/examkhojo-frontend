import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import managerDashboardStyle from "./ManagerDashboard.module.css";
import InfoCard from "../../components/InfoCard";
import Modal from "../../components/Modal";
import { getList, deleteItem, addItem, editItem } from "../../actions";
import {
  ExamForm,
  CollegeForm,
  CourseForm
} from "../../components/ManagerForm";

const ManagerDashboard = ({
  admin,
  exams,
  colleges,
  courses,
  getList,
  deleteItem,
  addItem,
  editItem
}) => {
  const [current, setCurrent] = useState("exams");
  const [showModal, setShowModal] = useState(false);
  const [editFormId, setEditFormId] = useState(null);

  useEffect(() => {
    getList(current);
    // eslint-disable-next-line
  }, [current]);

  const renderList = () => {
    let list;
    switch (current) {
      case "exams":
        list = exams;
        break;
      case "colleges":
        list = colleges;
        break;
      case "courses":
        list = courses;
        break;
      default:
        list = [];
    }
    return list.map(cur => (
      <li key={cur.id}>
        <InfoCard
          header={cur.name}
          subheaders={_.values(_.omit(cur, ["name", "id"]))}
        >
          <div className={managerDashboardStyle.iconGroup}>
            <i
              className="far fa-edit"
              onClick={() => {
                setEditFormId(cur.id);
                setShowModal(true);
              }}
            ></i>
            <i
              className="fas fa-trash"
              onClick={() => deleteItem(current, cur.id)}
            ></i>
          </div>
        </InfoCard>
      </li>
    ));
  };

  const renderForm = () => {
    switch (current) {
      case "exams":
        return (
          <ExamForm
            setShowModal={setShowModal}
            addItem={addItem}
            editItem={editItem}
            editFormId={editFormId}
            setEditFormId={setEditFormId}
          />
        );
      case "colleges":
        return (
          <CollegeForm
            setShowModal={setShowModal}
            addItem={addItem}
            editItem={editItem}
            editFormId={editFormId}
            setEditFormId={setEditFormId}
          />
        );
      case "courses":
        return (
          <CourseForm
            setShowModal={setShowModal}
            addItem={addItem}
            editItem={editItem}
            editFormId={editFormId}
            setEditFormId={setEditFormId}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <a href="/admin">
        <div className={managerDashboardStyle.logout}>
          <i className="fas fa-power-off"></i>
          <p>Logout</p>
        </div>
      </a>
      {showModal ? <Modal>{renderForm()}</Modal> : null}
      <div className={managerDashboardStyle.container}>
        <div className={managerDashboardStyle.infoPanel}>
          <img src="/images/logo-main.png" width={200} alt="Examkhojo Logo" />
          <p className={managerDashboardStyle.header}>Hello, {admin.name}</p>
          <p className={managerDashboardStyle.subheader}>@{admin.username}</p>
          <div className={managerDashboardStyle.btnContainer}>
            <button
              className={managerDashboardStyle.btn}
              onClick={() => setCurrent("exams")}
            >
              <i className="fas fa-book"></i>
              <p>Exams</p>
            </button>
            <button
              className={managerDashboardStyle.btn}
              onClick={() => setCurrent("courses")}
            >
              <i className="fas fa-graduation-cap"></i>
              <p>Courses</p>
            </button>
            <button
              className={managerDashboardStyle.btn}
              onClick={() => setCurrent("colleges")}
            >
              <i className="fas fa-university"></i>
              <p>Colleges</p>
            </button>
          </div>
        </div>
        <div className={managerDashboardStyle.listContainer}>
          <h1 style={{ textTransform: "capitalize" }}>{current}</h1>
          <ul className={managerDashboardStyle.list}>{renderList()}</ul>
        </div>
      </div>
      <i
        className={`fas fa-plus-circle ${managerDashboardStyle.addBtn}`}
        onClick={() => setShowModal(true)}
      ></i>
    </>
  );
};

const mapStateToProps = state => {
  return {
    admin: state.admin,
    exams: state.exams,
    courses: state.courses,
    colleges: state.colleges
  };
};

export default connect(mapStateToProps, {
  getList,
  deleteItem,
  addItem,
  editItem
})(ManagerDashboard);
