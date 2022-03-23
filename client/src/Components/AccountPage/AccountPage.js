import "./AccountPage.scss";
import { Link } from "react-router-dom";

function AccountPage() {
  //add a handlesubmit here to redirect and blah blah

  return (
    <div className="create-account">
      <h1 className="create-account__header">Account Info</h1>
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
          name="password"
          type="password"
          placeholder="Password"
          className="create-account__input"
        />
        <label for="confirm-password" className="create-account__label">
          Confirm Password
        </label>
        <input
          name="confirm-password"
          type="password"
          placeholder="Confirm Password"
          className="create-account__input"
        />
        {/* MAKE THIS A REDIRECT WITH STATE TO THE LOGIN */}
        <Link to="/">
          <button
            onClick={() => {
              alert("Account successfully updated");
            }}
            className="create-account__button"
          >
            Update Account
          </button>
        </Link>
      </form>
    </div>
  );
}

export default AccountPage;
