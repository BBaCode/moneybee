import PageFooter from "../PageFooter/PageFooter";
import PageHeader from "../PageHeader/PageHeader";
import { Link } from "react-router-dom";
import "./TopicPage.scss";

function BudgetPage() {
  return (
    <div className="topic">
      <PageHeader header="Final Notes" />
      <div className="topic__main">
        <div className="topic__main-notes">
          <div className="topic__main-notes-description">
            Congrats on completing all of the modules! I wanted to include a
            couple of notes below:
            <ul className="topic__main-notes-list">
              <li className="topic__main-notes-list-item">
                First, most of the information for this app was taken from:
                <a
                  href="https://fibyrei.com/personal-finance-101/"
                  className="topic__main-span"
                >
                  https://fibyrei.com/personal-finance-101/
                </a>{" "}
                I found that their personal finance information was some of the
                most straightforward and comprehensive, so definitely check them
                out if you have any questions about anything.{" "}
              </li>
              <li className="topic__main-notes-list-item">
                Second, I am not a financial planner and the purpose of this app
                is not to give advice on what you should do with your money.
                This is solely to help learn some of the basics so you can make
                more informed decisions{" "}
              </li>
              <li className="topic__main-notes-list-item">
                Lastly, thank you for checking out my app! I am hoping to add
                more modules including practice sections, more content, among
                other things, stay tuned for more!
              </li>
            </ul>
          </div>
        </div>
        <Link to="/dashboard">
          <button className="topic__button">Finish</button>
        </Link>
      </div>
      <PageFooter />
    </div>
  );
}

export default BudgetPage;
