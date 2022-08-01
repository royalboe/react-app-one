import React, { useState } from "react";
import "./form.css";
const RecruitmentFormTwo = () => {
  const initialState = { username: "", email: "", password: "" };
  const [inputValue, setInputValue] = useState(initialState);
    const [errorCheck, setErrorCheck] = useState({});
    const [input, checkInput] = useState(false);

    function handleChange(event) {
      const { name, value } = event.target;
      setInputValue((prevValue) => {
        return {
          ...prevValue,
          [name]: value,
        };
      });
    }

    function handleSubmit(event) {
      event.preventDefault();
      validateInput(inputValue);
      setErrorCheck(validateInput(inputValue));
    }

    function validateInput(values) {
      let error = {};
      if (!values.username) {
        error.username = "Username is required";
      }
      if (!values.email || !values.email.includes("@")) {
        error.email = "Email is required";
      }
      if (
        !values.password ||
        values.password.length < 6 ||
        values.password.length > 20
      ) {
        error.password = "Password is required";
      }
      checkInput((prevValue) => {
        return error.username && error.password && error.email
          ? (prevValue = false)
          : (prevValue = true);
      });
      return error;
    }

    return (
      <div className="container">
        {input && <h1>LOGIN SUCCESSFUL</h1>}
        <h1>Recruitment Form</h1>
        <form post="" method="POST" onSubmit={handleSubmit}>
          <div className="form--grp">
            <label htmlFor="username" className="form--label">
              Username:
            </label>
            <input
              className="form--input"
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              required
            />
            <p>{errorCheck.username}</p>
          </div>
          <div className="form--grp">
            <label htmlFor="name" className="form--label">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              className="form--input"
              placeholder="name@gmail.com"
              name="email"
              onChange={handleChange}
              required
            />
            <p>{errorCheck.email}</p>
          </div>
          <div className="form--grp">
            <label htmlFor="name" className="form--label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form--input"
              name="password"
              required
              onChange={handleChange}
            />
            <p>{errorCheck.password}</p>
          </div>
          <div className="form--grp">
            <label htmlFor="submit-btn" className="form--label"></label>
            <button type="submit" id="btn-submit" className="form--input">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default RecruitmentFormTwo;
