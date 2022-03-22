import "./CreateAccount.scss";

function CreateAccount() {
  return (
    <div className="create-account">
      <h1 className="create-account__header">Create Account</h1>
      <form className="create-account__form">
        <label className="create-account__label">Name</label>
        <input placeholder="Name" className="create-account__input" />
        <label className="create-account__label">Username</label>
        <input placeholder="Username" className="create-account__input" />
        <label className="create-account__label">Email</label>
        <input placeholder="Email" className="create-account__input" />
        <label className="create-account__label">Password</label>
        <input placeholder="Password" className="create-account__input" />
        <label className="create-account__label">Confirm Password</label>
        <input
          placeholder="Confirm Password"
          className="create-account__input"
        />
        <button className="create-account__button">Sign Up</button>
      </form>
    </div>
  );
}

export default CreateAccount;
