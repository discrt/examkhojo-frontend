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

export const deleteManager = id => {
  return async (dispatch, getState) => {
    try {
      await axiosApi.delete(`/admin/${id}`);
      let managerList = getState().admin.managerList;
      managerList = _.filter(managerList, manager => manager.id !== id);
      dispatch({
        type: "MANAGER_LIST",
        payload: managerList
      });
    } catch (err) {
      console.log("Something went wrong while deleting manager");
    }
  };
};

export const getList = option => {
  return async dispatch => {
    try {
      const response = await axiosApi.get(`/${option}`);
      dispatch({
        type: `${option.toUpperCase()}_LIST`,
        payload: response.data
      });
    } catch (err) {
      console.log("Something went wrong!");
    }
  };
};

export const deleteItem = (option, id) => {
  return async (dispatch, getState) => {
    try {
      await axiosApi.delete(`/${option}/${id}`);
      let list = getState()[option];
      list = _.filter(list, item => item.id !== id);
      dispatch({
        type: `${option.toUpperCase()}_LIST`,
        payload: list
      });
    } catch (err) {
      console.log("Something went wrong!");
    }
  };
};

export const addItem = (option, values) => {
  return async dispatch => {
    try {
      const response = await axiosApi.post(`/${option}`, values);
      dispatch({
        type: `${option.toUpperCase()}_ADDED`,
        payload: response.data
      });
    } catch (err) {
      console.log("Something went wrong while adding item!");
    }
  };
};

export const editItem = (option, values, id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axiosApi.put(`/${option}/${id}`, values);
      let list = getState()[option];
      list = _.map(list, item => {
        if (item.id === id) return response.data;
        else return item;
      });
      dispatch({
        type: `${option.toUpperCase()}_LIST`,
        payload: list
      });
    } catch (err) {
      console.log("Something went wrong while updating item!");
    }
  };
};
