import { combineReducers } from "redux";

const adminReducer = (state = null, action) => {
	switch (action.type) {
		case "ADMIN_LOGGED_IN":
			return action.payload;
		case "ADMIN_LOGGED_OUT":
			return false;
		case "ADMIN_ERROR":
			return { error: action.payload };
		default:
			return state;
	}
};

export default combineReducers({
	admin: adminReducer
});
