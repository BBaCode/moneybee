import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Dashboard from "./Components/Dashboard/Dashboard";
import AccountPage from "./Components/AccountPage/AccountPage";
import LearnPage from "./Components/LearnPage/LearnPage";
import IntroPage from "./Components/TopicPages/IntroPage";
import GoalsPage from "./Components/TopicPages/GoalsPage";
import BudgetPage from "./Components/TopicPages/BudgetPage";
import SavingPage from "./Components/TopicPages/SavingPage";
import DebtPage from "./Components/TopicPages/DebtPage";
import CollegePage from "./Components/TopicPages/CollegePage";
import CreditPage from "./Components/TopicPages/CreditPage";
import InsurancePage from "./Components/TopicPages/InsurancePage";
import RetirePage from "./Components/TopicPages/RetirePage";
import Calculator from "./Components/Calculator/Calculator";
import ResourcesPage from "./Components/ResourcesPage/ResourcesPage";
import NotesPage from "./Components/TopicPages/NotesPage";
import TestPage from "./Components/TestPage/TestPage";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/learn" exact component={LearnPage} />
          <Route path="/practice-test" component={TestPage} />
          <Route path="/learn/intro" component={IntroPage} />
          <Route path="/learn/goals" component={GoalsPage} />
          <Route path="/learn/budget" component={BudgetPage} />
          <Route path="/learn/savings" component={SavingPage} />
          <Route path="/learn/debt" component={DebtPage} />
          <Route path="/learn/college" component={CollegePage} />
          <Route path="/learn/credit" component={CreditPage} />
          <Route path="/learn/insurance" component={InsurancePage} />
          <Route path="/learn/retire" component={RetirePage} />
          <Route path="/learn/notes" component={NotesPage} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/account" component={AccountPage} />
          <Route path="/resources" component={ResourcesPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
