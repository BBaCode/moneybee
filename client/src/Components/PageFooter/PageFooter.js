import beeIcon from "../../assets/icons/swarm.png";
import { Link } from "react-router-dom";
import "./PageFooter.scss";

function PageFooter() {
  return (
    <div className="footer">
      <Link to="/dashboard">
        <img alt="bee icon" className="footer__icon" src={beeIcon} />
      </Link>
    </div>
  );
}

export default PageFooter;
