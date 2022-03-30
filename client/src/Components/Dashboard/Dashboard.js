import { Link } from "react-router-dom";
import PageHeader from "../PageHeader/PageHeader";
import PageFooter from "../PageFooter/PageFooter";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard">
      <PageHeader header="Home" />
      <div className="dashboard__main">
        <div className="dashboard__card dashboard__card--border-right-bottom">
          <Link className="dashboard__card-link" to="/learn">
            Learn
          </Link>
        </div>
        <div className="dashboard__card dashboard__card--border-bottom">
          <Link className="dashboard__card-link" to="/calculator">
            Calculator
          </Link>
        </div>
        <div className="dashboard__card dashboard__card--border-right">
          <Link className="dashboard__card-link" to="/account">
            Account
          </Link>
        </div>
        <div className="dashboard__card">
          <Link className="dashboard__card-link" to="/resources">
            Resources
          </Link>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default Dashboard;
