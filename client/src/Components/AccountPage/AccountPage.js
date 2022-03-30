import PageHeader from "../PageHeader/PageHeader";
import PageFooter from "../PageFooter/PageFooter";
import "./AccountPage.scss";
import { Link } from "react-router-dom";

function AccountPage() {
  //add a handlesubmit here to redirect and blah blah

  return (
    <div className="account">
      <PageHeader header="Account Info" />

      <form className="account__form">
        <label for="name" className="account__label">
          Name
        </label>
        <input name="name" placeholder="Name" className="account__input" />
        <label for="username" className="account__label">
          Username
        </label>
        <input
          name="username"
          placeholder="Username"
          className="account__input"
        />
        <label for="email" className="account__label">
          Email
        </label>
        <input name="email" placeholder="Email" className="account__input" />
        <label for="password" className="account__label">
          Password
        </label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="account__input"
        />
        <label for="confirm-password" className="account__label">
          Confirm Password
        </label>
        <input
          name="confirm-password"
          type="password"
          placeholder="Confirm Password"
          className="account__input"
        />
        {/* MAKE THIS A REDIRECT WITH STATE TO THE LOGIN */}
        <Link to="/">
          <button
            onClick={() => {
              alert("Account successfully updated");
            }}
            className="account__button"
          >
            Update Account
          </button>
        </Link>
      </form>
      <PageFooter />
    </div>
  );
}

export default AccountPage;
