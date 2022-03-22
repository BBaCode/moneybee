import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/create-account" component={CreateAccount} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
