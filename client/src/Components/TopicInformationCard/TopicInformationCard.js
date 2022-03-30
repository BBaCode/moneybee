import "./TopicInformationCard.scss";

function TopicInformationCard({ information }) {
  return (
    <div className="topic-card">
      <div className="topic-card__container">
        <p className="topic-card__description">{information.info1}</p>
        <p className="topic-card__description">{information.info2}</p>
        <p className="topic-card__description">{information.info3 || " "}</p>
        <p className="topic-card__description">{information.info4 || " "}</p>
        <p className="topic-card__description">{information.info5 || " "}</p>
      </div>
    </div>
  );
}

export default TopicInformationCard;
