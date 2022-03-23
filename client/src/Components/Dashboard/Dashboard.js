import "./Dashboard.scss";
import beeicon from "../../assets/icons/swarm.png";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__header">Dashboard</div>
      <div className="dashboard__main">
        <div className="dashboard__card dashboard__card--border-right-bottom">
          <h2>learn</h2>
        </div>
        <div className="dashboard__card dashboard__card--border-bottom">
          <h2>budget</h2>
        </div>
        <div className="dashboard__card dashboard__card--border-right">
          <h2>account</h2>
        </div>
        <div className="dashboard__card">
          <h2>other resources</h2>
        </div>
      </div>
      <div className="dashboard__footer">
        <img alt="bee icon" className="dashboard__icon" src={beeicon} />
      </div>
    </div>
  );
}

export default Dashboard;
