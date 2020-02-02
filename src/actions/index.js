import axiosApi from "../apis";

export const adminLogin = (username, password) => {
	return async (dispatch, getState) => {
		try {
			const response = await axiosApi.post("/api/admin/login", { username, password });
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
