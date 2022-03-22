import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <div className="login__header">
        <h1 className="login__title">MONEYBEE</h1>
      </div>
      <form className="login__form">
        <label className="login__label">Username</label>
        <input placeholder="Username" className="login__input" />
        <label className="login__label">Password</label>
        <input placeholder="Password" className="login__input" />
        <button className="login__button">Log In</button>
      </form>
    </div>
  );
}

export default Login;
