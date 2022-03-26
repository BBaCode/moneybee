import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Dashboard from "./Components/Dashboard/Dashboard";
import AccountPage from "./Components/AccountPage/AccountPage";
import LearnPage from "./Components/LearnPage/LearnPage";
import TopicPage from "./Components/TopicPage/TopicPage";
import Calculator from "./Components/Calculator/Calculator";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/learn" component={LearnPage} />
          <Route path="/foundations" component={TopicPage} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/account" component={AccountPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
