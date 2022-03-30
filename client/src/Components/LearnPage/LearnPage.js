import PageFooter from "../PageFooter/PageFooter";
import PageHeader from "../PageHeader/PageHeader";
import { Link } from "react-router-dom";
import straightArrow from "../../assets/icons/icons8-straight.png";
import rightCurve from "../../assets/icons/icons8-right-curve.png";
import leftCurve from "../../assets/icons/icons8-left-curve.png";
import "./LearnPage.scss";

function LearnPage() {
  return (
    <div className="learn">
      <PageHeader header="Learn" />
      <div className="learn__main">
        <div className="learn__top-container">
          <div className="learn__progress">
            <h2 className="learn__progress-title">To Start</h2>
            <div className="learn__progress-stat-container">
              <p className="learn__progress-stat">
                If you're brand new, click 'Get Started', if not, click the
                module you left off on!
              </p>
            </div>
          </div>
          <div className="learn__module-start-container">
            <div className="learn__module">
              <h2 className="learn__module-title">Current Lesson:</h2>
              <p className="learn__module-lesson">Emergency Fund</p>
            </div>
            <Link to="/learn/intro">
              <button className="learn__start-button">Get Started!</button>
            </Link>
          </div>
        </div>
        <div className="learn__course-map">
          <h2 className="learn__course-map-title">Course Map</h2>
          <div className="learn__course-container">
            <div className="learn__course-lesson">
              <Link to="/learn/intro">Intro</Link>
            </div>
            <div className="learn__course-lesson">
              <Link className="learn__course-lesson-link" to="/learn/goals">
                Goals
              </Link>
            </div>
            <div className="learn__course-lesson">
              <Link className="learn__course-lesson-link" to="/learn/budget">
                Budget
              </Link>
            </div>
            <div className="learn__course-lesson">
              <Link className="learn__course-lesson-link" to="/learn/college">
                College
              </Link>
            </div>
            <div className="learn__course-lesson">
              <Link className="learn__course-lesson-link" to="/learn/debt">
                Debt
              </Link>
            </div>
            <div className="learn__course-lesson">
              <Link className="learn__course-lesson-link" to="/learn/savings">
                Saving
              </Link>
            </div>
            <div className="learn__course-lesson">
              <Link className="learn__course-lesson-link" to="/learn/credit">
                Credit
              </Link>
            </div>
            <div className="learn__course-lesson">
              <Link className="learn__course-lesson-link" to="/learn/insurance">
                Insurance
              </Link>
            </div>
            <div className="learn__course-lesson">
              <Link className="learn__course-lesson-link" to="/learn/retire">
                Retire
              </Link>
            </div>
            <img
              className="learn__course-arrow-intro"
              src={straightArrow}
              alt="arrow icon"
            />
            <img
              className="learn__course-arrow-goals"
              src={straightArrow}
              alt="arrow icon"
            />
            <img
              className="learn__course-arrow-budget"
              src={rightCurve}
              alt="arrow icon"
            />
            <img
              className="learn__course-arrow-college"
              src={leftCurve}
              alt="arrow icon"
            />
            <img
              className="learn__course-arrow-debt"
              src={straightArrow}
              alt="arrow icon"
            />
            <img
              className="learn__course-arrow-saving"
              src={straightArrow}
              alt="arrow icon"
            />
            <img
              className="learn__course-arrow-credit"
              src={straightArrow}
              alt="arrow icon"
            />
            <img
              className="learn__course-arrow-insurance"
              src={straightArrow}
              alt="arrow icon"
            />
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default LearnPage;
