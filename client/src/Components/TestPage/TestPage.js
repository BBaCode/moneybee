import "./TestPage.scss";
import { Link } from "react-router-dom";
import PageFooter from "../PageFooter/PageFooter";
import PageHeader from "../PageHeader/PageHeader";

function TestPage() {
  return (
    <div className="test">
      <PageHeader header="Test" />
      <div className="test__main">
        <div className="test__card">
          <div className="test__container">
            <p className="test__question">
              What are the first things to think about and write down when
              starting the financial planning process?
            </p>
            <button
              onClick={() => {
                alert(
                  "Goals! Remember, you need to have an idea of where you want to go, or you won't get anywhere!"
                );
              }}
              className="test__button"
            >
              See Answer
            </button>
          </div>
        </div>
        <div className="test__card">
          <div className="test__container">
            <p className="test__question">
              What are some ways that you can prepare and make use of a budget?
              (Think online tools, apps as well as anything else).
            </p>
            <button
              onClick={() => {
                alert(
                  "Mint, Capital One, Microsoft Excel, handwritten, among many others. Be creative! While it is important to make sure you are capturing all of your income and expenses, you can visualize and record that in several ways."
                );
              }}
              className="test__button"
            >
              See Answer
            </button>
          </div>
        </div>

        <div className="test__card">
          <div className="test__container">
            <p className="test__question">
              How many months of expenses should you have saved according to
              most financial experts?
            </p>
            <button
              onClick={() => {
                alert(
                  "3-6 months. When in doubt, lean toward the higher side if you can."
                );
              }}
              className="test__button"
            >
              See Answer
            </button>
          </div>
        </div>

        <div className="test__card">
          <div className="test__container">
            <p className="test__question">
              What are some examples of kinds of debt you can owe?
            </p>
            <button
              onClick={() => {
                alert(
                  "Debt can involve cash, property, services, among many other things."
                );
              }}
              className="test__button"
            >
              See Answer
            </button>
          </div>
        </div>

        <div className="test__card">
          <div className="test__container">
            <p className="test__question">
              What is the snowball method of paying off debt?
            </p>
            <button
              onClick={() => {
                alert(
                  "The snowball method involved throwing all of your extra funds at your smallest outstanding debt. Once you pay off that debt, you add the monthly payment that you eliminated to your next largest debt. If you are motivated by small but steady wins, then this is a great option."
                );
              }}
              className="test__button"
            >
              See Answer
            </button>
          </div>
        </div>

        <div className="test__card">
          <div className="test__container">
            <p className="test__question">
              Should you be considering and applying for college?
            </p>
            <button
              onClick={() => {
                alert(
                  "Trick Question! There is no right answer, take the time to research the pros and cons and how they fit into your life and financial goals."
                );
              }}
              className="test__button"
            >
              See Answer
            </button>
          </div>
        </div>

        <div className="test__card">
          <div className="test__container">
            <p className="test__question">
              Where are some places that you can see your credit score?
            </p>
            <button
              onClick={() => {
                alert("Credit Karma or Credit Sesame");
              }}
              className="test__button"
            >
              See Answer
            </button>
          </div>
        </div>

        <div className="test__card">
          <div className="test__container">
            <p className="test__question">
              What is an example of an employer sponsored plan?
            </p>
            <button
              onClick={() => {
                alert(
                  "401(k). Dont forget that you can always save for retirment using an IRA and do not need to be employed to do so!"
                );
              }}
              className="test__button"
            >
              See Answer
            </button>
          </div>
        </div>
        <Link to="/dashboard">
          <button className="test__button">Finish</button>
        </Link>
      </div>
      <PageFooter />
    </div>
  );
}

export default TestPage;
