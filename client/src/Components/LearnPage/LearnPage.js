import PageFooter from "../PageFooter/PageFooter";
import PageHeader from "../PageHeader/PageHeader";
import { Link } from "react-router-dom";
import "./LearnPage.scss";

function LearnPage() {
  return (
    <div className="learn">
      <PageHeader header="Learn" />
      <div className="learn__main">
        <div className="learn__top-container">
          <div className="learn__progress">
            <h2 className="learn__progress-title">Progress</h2>
            <div>
              <p className="learn__progress-chapters">Chapters: 0/3</p>
              <p>Lessons: 0/30</p>
            </div>
          </div>
          <div className="learn__module-start-container">
            <div className="learn__module">
              <h2 className="learn__module-title">Current Lesson:</h2>
              <p>Emergency Fund</p>
            </div>
            <Link to="/foundations">
              <button className="learn__start">Get Started!</button>
            </Link>
          </div>
        </div>
        <div className="learn__course-map">
          <h2 className="learn__course-map-title">Course Map</h2>
          <div className="learn__course-container">
            <div className="learn__foundations">
              <p>1. Foundations</p>
            </div>
            <div className="learn__savings">
              <p className="learn__savings-p">2. Savings</p>
            </div>
            <div className="learn__college">
              <div className="learn__empty-foundation"></div>
              <div className="learn__empty-foundation"></div>
              <p>3. College</p>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default LearnPage;
