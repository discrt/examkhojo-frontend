import React, { useEffect } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import adminStyle from "./AdminScreen.module.css";
import { connect } from "react-redux";
import { adminLogin } from "../../actions";

const AdminScreen = ({ adminLogin, admin }) => {
	useEffect(() => {
		console.log(admin);
	}, [admin]);

	const renderInput = ({ field, ...props }) => {
		return <input {...field} {...props} className={adminStyle.inputField} autoComplete="off" />;
	};

	const renderError = ({ children }) => {
		return <p className={adminStyle.error}>{children}</p>;
	};

	return (
		<>
			<h1 className={adminStyle.header}>Welcome to Examkhojo Admin Panel</h1>
			<img
				src="/images/logo-main.png"
				width={200}
				className={adminStyle.logo}
				alt="Examkhojo Logo"
			/>
			{admin && admin.error ? <div className={adminStyle.errorModal}>{admin.error}</div> : null}
			<Formik
				initialValues={{ username: "", password: "" }}
				validate={values => {
					const errors = {};
					if (!values.username) {
						errors.username = "Username is required";
					}
					if (!values.password) {
						errors.password = "Password is required";
					}
					return errors;
				}}
				onSubmit={values => {
					adminLogin(values.username, values.password);
				}}
				className={adminStyle.container}
			>
				{() => (
					<div className={adminStyle.container}>
						<p style={{ marginBottom: "30px" }}>Please Log In to continue</p>
						<Form className={adminStyle.form}>
							<Field type="text" name="username" placeholder="Username" component={renderInput} />
							<ErrorMessage name="username" component={renderError} />
							<Field
								type="password"
								name="password"
								placeholder="Password"
								component={renderInput}
							/>
							<ErrorMessage name="password" component={renderError} />
							<button type="submit" className={adminStyle.submitBtn}>
								Submit
							</button>
						</Form>
					</div>
				)}
			</Formik>
		</>
	);
};

const mapStateToProps = state => {
	return { admin: state.admin };
};

export default connect(mapStateToProps, { adminLogin })(AdminScreen);
