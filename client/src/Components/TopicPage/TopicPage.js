import PageFooter from "../PageFooter/PageFooter";
import PageHeader from "../PageHeader/PageHeader";
import TopicInformationCard from "../TopicInformationCard/TopicInformationCard";
import "./TopicPage.scss";

function TopicPage() {
  return (
    <div className="topic">
      <PageHeader header="Foundations (Topic)" />
      <div className="topic__main">
        <TopicInformationCard />
        <TopicInformationCard />
        <TopicInformationCard />
        <TopicInformationCard />
        <TopicInformationCard />
        <TopicInformationCard />
        <TopicInformationCard />
        <TopicInformationCard />
        <TopicInformationCard />
      </div>
      <PageFooter />
    </div>
  );
}

export default TopicPage;
