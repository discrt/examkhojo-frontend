import _ from "lodash";

import axiosApi from "../apis";

export const adminLogin = (username, password) => {
  return async dispatch => {
    try {
      const response = await axiosApi.post("/admin/login", {
        username,
        password
      });
      dispatch({
        type: "ADMIN_LOGGED_IN",
        payload: response.data
      });
    } catch (err) {
      dispatch({
        type: "ADMIN_ERROR",
        payload: err.response.data
      });
    }
  };
};

export const registerManager = (name, username, password) => {
  return async dispatch => {
    try {
      const response = await axiosApi.post("/admin", {
        name,
        username,
        password,
        userType: "manager"
      });
      dispatch({
        type: "MANAGER_ADDED",
        payload: response.data
      });
    } catch (err) {
      console.log("Something went wrong");
    }
  };
};

export const getManagers = () => {
  return async dispatch => {
    try {
      const response = await axiosApi.get("/admin/managers");
      dispatch({
        type: "MANAGER_LIST",
        payload: response.data
      });
    } catch (err) {
      console.log("Something went wrong while fetching managers");
    }
  };
};

export const deleteManager = username => {
  return async (dispatch, getState) => {
    try {
      await axiosApi.delete(`/admin/${username}`);
      let managerList = getState().admin.managerList;
      managerList = _.filter(
        managerList,
        manager => manager.username !== username
      );
      dispatch({
        type: "MANAGER_LIST",
        payload: managerList
      });
    } catch (err) {
      console.log("Something went wrong while deleting manager");
    }
  };
};
