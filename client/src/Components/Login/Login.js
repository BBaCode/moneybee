import { Link } from "react-router-dom";
import { axios } from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <div className="login__header">
        <h1 className="login__title">MONEYBEE</h1>
      </div>
      <form className="login__form">
        <label for="username" className="login__label">
          Username
        </label>
        <input
          name="username"
          placeholder="Username"
          className="login__input"
        />
        <label for="password" className="login__label">
          Password
        </label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="login__input"
        />

        <Link className="login__link" to="/dashboard">
          <button className="login__button">Log In</button>
        </Link>
      </form>
      <p className="login__signup">
        Don't have an account?{" "}
        <Link to="/create-account">
          <span className="login__signup-link">Click here {""}</span>
        </Link>{" "}
        to sign up!
      </p>
    </div>
  );
}

export default Login;
