import React, { useState } from "react";
import { useParams } from "react-router-dom";
import theEventData from "../../Data/theEventData";
import Heading from "../Common/Headings/Heading";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import VideoBox from "./VideoBox";
import Error from "../Error";
import "./EventPage.css";

const EventCard = ({ name, details,background, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const sections = {
    problem: { title: "Problem Statement", content: details.info },
    rules: { title: "Rules", content: details.rules },
    team: { title: "Team Members", content: details.team },
    price: { title: "Price Details", content: details.price },
  };

  const renderSectionContent = () => {
    const section = sections[activeSection];
    if (section && section.content) {
      return (
        <div className="content-area">
          <h3>{section.title}</h3>
          <ul>
            {section.content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) setActiveSection(null);
  };

  return (
    <div className={`event-card ${index % 2 ? "reverse-layout" : ""}`}>
      <div className="image-container">
        <img
          src={background}
          alt={name}
          className="event-image"
        />
      </div>
      <div className="content-container">
        <h2 className="event-card-title">{name}</h2>
        {!isExpanded ? (
          <button className="view-details-btn" onClick={toggleExpand}>
            View Details
          </button>
        ) : (
          <div>
            <div className="options-container">
              {Object.keys(sections).map((key) => (
                <button
                  key={key}
                  className={`option-btn ${activeSection === key ? "active" : ""}`}
                  onClick={() => setActiveSection(key)}
                >
                  {sections[key].title}
                </button>
              ))}
            </div>
            {renderSectionContent()}
            <button className="collapse-btn" onClick={toggleExpand}>
              Hide Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const EventPage = ({ theParent }) => {
  const { event } = useParams();
  if (!theEventData[theParent]) return <Error />;
  const theData = event ? theEventData[theParent][event] : theEventData[theParent];

  if (!theData) return <Error />;
  const { title, headingSource, data } = theData;

  return (
    <div className="events_main">
      <VideoBox url={headingSource} />
      <Heading className="kaleido_heading" id="glheading" title={title} />
      <div className={`main-tech tech-${data.length}`}>
        {data.map((item, idx) => (
          <EventCard key={idx} {...item} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
