import { Link } from "react-router-dom";
import PageHeader from "../PageHeader/PageHeader";
import PageFooter from "../PageFooter/PageFooter";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard">
      <PageHeader header="Dashboard" />
      <div className="dashboard__main">
        <div className="dashboard__card dashboard__card--border-right-bottom">
          <Link className="dashboard__card-link" to="/learn">
            learn
          </Link>
        </div>
        <div className="dashboard__card dashboard__card--border-bottom">
          <Link className="dashboard__card-link" to="/calculator">
            calculator
          </Link>
        </div>
        <div className="dashboard__card dashboard__card--border-right">
          <Link className="dashboard__card-link" to="/account">
            account
          </Link>
        </div>
        <div className="dashboard__card">
          <Link className="dashboard__card-link" to="/resources">
            resources
          </Link>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default Dashboard;
