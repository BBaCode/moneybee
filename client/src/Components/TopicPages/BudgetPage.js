import PageFooter from "../PageFooter/PageFooter";
import PageHeader from "../PageHeader/PageHeader";
import TopicInformationCard from "../TopicInformationCard/TopicInformationCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./TopicPage.scss";

function BudgetPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [title, setTitle] = useState([]);
  const [information, setInformation] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/finance/3`).then(
      (res) => {
        setIsLoaded(true);
        setTitle(res.data.title);
        setInformation(res.data.information[0]);
        console.log(res.data.information[0]);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="topic">
        <PageHeader header={title} />
        <div className="topic__main">
          <TopicInformationCard information={information} />
          <Link to="/learn/savings">
            <button className="topic__button">Next</button>
          </Link>
        </div>
        <PageFooter />
      </div>
    );
  }
}

export default BudgetPage;
