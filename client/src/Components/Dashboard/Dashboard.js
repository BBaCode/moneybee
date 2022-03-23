import { Link } from "react-router-dom";
import "./Dashboard.scss";
import beeicon from "../../assets/icons/swarm.png";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__header">Dashboard</div>
      <div className="dashboard__main">
        <div className="dashboard__card dashboard__card--border-right-bottom">
          <Link className="dashboard__card-link" to="/learn">
            learn
          </Link>
        </div>
        <div className="dashboard__card dashboard__card--border-bottom">
          <Link className="dashboard__card-link" to="/budget">
            budget
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
      <div className="dashboard__footer">
        <img alt="bee icon" className="dashboard__icon" src={beeicon} />
      </div>
    </div>
  );
}

export default Dashboard;
