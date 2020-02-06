import { combineReducers } from "redux";

const adminReducer = (state = null, action) => {
  switch (action.type) {
    case "ADMIN_LOGGED_IN":
      return action.payload;
    case "ADMIN_LOGGED_OUT":
      return false;
    case "ADMIN_ERROR":
      return { error: action.payload };
    case "MANAGER_LIST":
      return { ...state, managerList: action.payload };
    case "MANAGER_ADDED":
      return { ...state, managerList: [...state.managerList, action.payload] };
    default:
      return state;
  }
};

const examReducer = (state = [], action) => {
  switch (action.type) {
    case "EXAMS_LIST":
      return action.payload;
    case "EXAMS_ADDED":
      return [action.payload, ...state];
    default:
      return state;
  }
};
const courseReducer = (state = [], action) => {
  switch (action.type) {
    case "COURSES_LIST":
      return action.payload;
    case "COURSES_ADDED":
      return [action.payload, ...state];
    default:
      return state;
  }
};
const collegeReducer = (state = [], action) => {
  switch (action.type) {
    case "COLLEGES_LIST":
      return action.payload;
    case "COLLEGES_ADDED":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default combineReducers({
  admin: adminReducer,
  exams: examReducer,
  courses: courseReducer,
  colleges: collegeReducer
});
