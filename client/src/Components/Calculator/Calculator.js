import PageFooter from "../PageFooter/PageFooter";
import PageHeader from "../PageHeader/PageHeader";
import { useState } from "react";
import "./Calculator.scss";

function Calculator() {
  let [weeks, setWeeks] = useState(0);
  let [days, setDays] = useState(0);
  let [months, setMonths] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDays(
      (days = Math.round(
        (e.target.cost.value / e.target.contribution.value) * 7
      ).toFixed(2))
    );
    setWeeks(
      (weeks = (e.target.cost.value / e.target.contribution.value).toFixed(2))
    );
    setMonths(
      (months = (
        ((e.target.cost.value / e.target.contribution.value) * 7) /
        30
      ).toFixed(2))
    );
  };

  return (
    <div className="calculator">
      <PageHeader header="Calculator" />
      <div className="calculator__main">
        <div className="calculator__instructions">
          <h2 className="calculator__header">How to use</h2>
          <p className="calculator__description">
            The purpose of this calculator is to help put your financial goals
            in perspective. First, put the price of whatever your goal is (car,
            house, vacation, fancy dinner etc). Next, add how much you could
            contribute on a weekly basis to that goal. Hit submit and get how
            long it would take to get what you want!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="calculator__form">
          <label for="cost" className="calculator__label">
            How much does it cost in USD?
          </label>
          <input name="cost" placeholder="Cost" className="calculator__input" />
          <label for="contribution" className="calculator__label">
            Weekly contribution
          </label>
          <input
            name="contribution"
            placeholder="Weekly Contribution"
            className="calculator__input"
          />
          <button className="calculator__button">SUBMIT</button>
        </form>
        <p className="calculator__value">
          It would take you {days} day(s), {weeks} week(s) or {months} month(s)
          to achieve your goal. You can do it!
        </p>
      </div>
      <PageFooter />
    </div>
  );
}

export default Calculator;
