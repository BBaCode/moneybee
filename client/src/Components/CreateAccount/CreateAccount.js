import { Link } from "react-router-dom";
import { useState } from "react";
import "./CreateAccount.scss";
import axios from "axios";

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  async function registerUser(e) {
    if (!name || !email || !username || !password) {
      alert("Please make sure all fields are filled in");
      return;
    }
    e.preventDefault();
    await axios
      .post("http://localhost:8000/register", {
        name,
        username,
        email,
        password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="create-account">
      <h1 className="create-account__header">Create Account</h1>
      <form onSubmit={registerUser} className="create-account__form">
        <label for="name" className="create-account__label">
          Name
        </label>
        <input
          name="name"
          placeholder="Name"
          className="create-account__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="username" className="create-account__label">
          Username
        </label>
        <input
          name="username"
          placeholder="Username"
          className="create-account__input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label for="email" className="create-account__label">
          Email
        </label>
        <input
          name="email"
          placeholder="Email"
          className="create-account__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password" className="create-account__label">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="create-account__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <label for="confirm-password" className="create-account__label">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          className="create-account__input"
        /> */}
        {/* MAKE THIS A REDIRECT WITH STATE TO THE LOGIN */}
        {/* <Link to="/"> */}
        <button
          // onClick={() => {
          //   alert("Account successfully created!");
          // }}
          className="create-account__button"
        >
          Sign Up
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default CreateAccount;
