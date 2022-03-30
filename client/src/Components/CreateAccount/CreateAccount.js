import { Link } from "react-router-dom";
import "./CreateAccount.scss";

function CreateAccount() {
  return (
    <div className="create-account">
      <h1 className="create-account__header">Create Account</h1>
      <form className="create-account__form">
        <label for="name" className="create-account__label">
          Name
        </label>
        <input
          name="name"
          placeholder="Name"
          className="create-account__input"
        />
        <label for="username" className="create-account__label">
          Username
        </label>
        <input
          name="username"
          placeholder="Username"
          className="create-account__input"
        />
        <label for="email" className="create-account__label">
          Email
        </label>
        <input
          name="email"
          placeholder="Email"
          className="create-account__input"
        />
        <label for="password" className="create-account__label">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="create-account__input"
        />
        <label for="confirm-password" className="create-account__label">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          className="create-account__input"
        />
        {/* MAKE THIS A REDIRECT WITH STATE TO THE LOGIN */}
        <Link to="/">
          <button
            onClick={() => {
              alert("Account successfully created!");
            }}
            className="create-account__button"
          >
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
}

export default CreateAccount;
