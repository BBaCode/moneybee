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
            <h2 className="learn__progress-title">Progress</h2>
            <div className="learn__progress-stat-container">
              <p className="learn__progress-stat learn__progress-chapters">
                0/9 topics
              </p>
              <p className="learn__progress-stat">33% complete!</p>
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
            <div className="learn__course-lesson">Intro</div>
            <div className="learn__course-lesson">Goals</div>
            <div className="learn__course-lesson">Budget</div>
            <div className="learn__course-lesson">College</div>
            <div className="learn__course-lesson">Debt</div>
            <div className="learn__course-lesson">Saving</div>
            <div className="learn__course-lesson">Credit</div>
            <div className="learn__course-lesson">Insurance</div>
            <div className="learn__course-lesson">Retire</div>
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
