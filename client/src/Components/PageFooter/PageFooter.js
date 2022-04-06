import beeIcon from "../../assets/icons/swarm.png";
import appleIcon from "../../assets/icons/icons8-apple-30.png";
import calculatorIcon from "../../assets/icons/icons8-calculator-24.png";
import personIcon from "../../assets/icons/icons8-person-30.png";
import webIcon from "../../assets/icons/icons8-web-30.png";
import { Link } from "react-router-dom";
import "./PageFooter.scss";

function PageFooter() {
  return (
    <div className="footer">
      <div className="footer__icon-container footer__learn-icon-container">
        <Link to="/learn">
          <img alt="apple" className="footer__icon " src={appleIcon} />
          <p className="footer__text">Learn</p>
        </Link>
      </div>
      <div className="footer__icon-container">
        <Link to="/calculator">
          <img alt="calculator" className="footer__icon" src={calculatorIcon} />
          <p className="footer__text">Calc</p>
        </Link>
      </div>
      <div className="footer__icon-container">
        <Link to="/dashboard">
          <img alt="bee icon" className="footer__icon" src={beeIcon} />
          <p className="footer__text">Home</p>
        </Link>
      </div>
      <div className="footer__icon-container">
        <Link to="/account">
          <img alt="person" className="footer__icon" src={personIcon} />
          <p className="footer__text">You</p>
        </Link>
      </div>
      <div className="footer__icon-container">
        <Link to="/resources">
          <img alt="web" className="footer__icon" src={webIcon} />
          <p className="footer__text">More</p>
        </Link>
      </div>
    </div>
  );
}

export default PageFooter;
