import { Link } from "react-router-dom";
import { axios } from "axios";
import "./Login.scss";

function Login() {
  //  async function handleLogin(e) {
  // e.preventDefault();
  // await axios
  // .get("http://localhost:8000/register", {
  //   name,
  //   username,
  //   email,
  //   password,
  // })
  // .then((res) => console.log(res))
  // .catch((err) => console.log(err));

  //  }

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
        {/* FIX TO MAKE A HANDLESUBMIT AND THEN REDIRECT TO DASHBOARD */}
        <Link className="login__link" to="/dashboard">
          <button className="login__button">Log In</button>
        </Link>
      </form>
      <p className="login__signup">
        Don't have an account?{" "}
        <Link to="/create-account">
          <span className="login__signup-link">Click here</span>
        </Link>{" "}
        to sign up!
      </p>
    </div>
  );
}

export default Login;
