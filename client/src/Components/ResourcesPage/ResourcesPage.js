import PageHeader from "../PageHeader/PageHeader";
import PageFooter from "../PageFooter/PageFooter";
import "./ResourcesPage.scss";

function ResourcesPage() {
  return (
    <div className="resources">
      <PageHeader header="Resources" />
      <div className="resources__main">
        <p className="resources__header-description">
          Below are a few other resources for those that are interested in
          further learning!
        </p>
        <ul className="resources__list">
          <li className="resources__list-item">
            <a
              className="resources__link"
              href="https://www.investopedia.com/best-resources-for-improving-financial-literacy-5091689"
            >
              Improving Financial Literacy
            </a>
          </li>
          <li className="resources__list-item">
            <a
              className="resources__link"
              href="https://www.cnbc.com/2021/01/13/the-best-free-resources-to-help-you-learn-how-to-manage-your-money.html"
            >
              Learn To Manage Your Money
            </a>
          </li>
          <li className="resources__list-item">
            <a
              className="resources__link"
              href="https://www.nerdwallet.com/article/finance/budget-worksheet"
            >
              Free Budget Planner
            </a>
          </li>
          <li className="resources__list-item">
            <a
              className="resources__link"
              href="https://www.stackingbenjamins.com/about/"
            >
              Stacking Benjamins Podcast
            </a>
          </li>
          <li className="resources__list-item">
            <a className="resources__link" href="https://podcast.farnoosh.tv/">
              So Money Podcast
            </a>
          </li>
          <li className="resources__list-item">
            <a className="resources__link" href="https://www.learnvest.com/">
              LearnVest
            </a>
          </li>
          <li className="resources__list-item">
            <a className="resources__link" href="https://mint.intuit.com/">
              Mint (Highly Rated Phone App)
            </a>
          </li>
          <li className="resources__list-item">
            <a
              className="resources__link"
              href="https://www.moneymanagement.org/resources"
            >
              Other Resources
            </a>
          </li>
        </ul>
      </div>
      <PageFooter />
    </div>
  );
}

export default ResourcesPage;
