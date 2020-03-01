import React from "react";
import subscribeStyle from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <>
      <div
        className={`${subscribeStyle.registrationSection} ${subscribeStyle.containerFluid}`}
        style={{ margin: "100px auto" }}
      >
        <div className={subscribeStyle.registrationHeader}>
          <h1>Get Exclusive Updates</h1>
          <p>Register now with Examkhojo.com</p>
        </div>
        <form className={subscribeStyle.form}>
          <div className={subscribeStyle.input}>
            <label>Full Name</label>
            <input type="text" placeholder="Type your full name" />
          </div>
          <div className={subscribeStyle.input}>
            <label>Your Email</label>
            <input type="text" placeholder="Type your email" />
          </div>
          <button className={subscribeStyle.registerButton}>Subscribe</button>
        </form>
      </div>
    </>
  );
};

export default Subscribe;
