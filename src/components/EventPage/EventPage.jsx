import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import theEventData from "../../Data/theEventData";
import Heading from "../Common/Headings/Heading";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import VideoBox from "./VideoBox";
import Error from "../Error";
import "./EventPage.css";
import { useMousePosition } from "../../CustomHooks/useMousePosition";

const EventCard = ({ name, details, background, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

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

  const position = useMousePosition();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) setActiveSection(null);
  };

  // Intersection Observer for fade-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`event-card ${index % 2 ? "reverse-layout" : ""} ${
        isVisible ? "fade-up" : ""
      }`}
      ref={cardRef}
    >
      <div className="image-container" id={name}>
        <img src={background} alt={name} className="event-image" />
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
                  className={`option-btn ${
                    activeSection === key ? "active" : ""
                  }`}
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
  const theData = event
    ? theEventData[theParent][event]
    : theEventData[theParent];

  if (!theData) return <Error />;
  const { title, headingSource, data, eventTitle } = theData;

  useEffect(() => {
    document.title = `${eventTitle}`;
  }, [title]);

  const position = useMousePosition();

  return (
    <>
      <div className="events_main">
        <div className="headingOffset">
          <div className="vidHolder">
            <VideoBox url={headingSource} />
          </div>
        </div>
        <div className="headingOffset">
          <Heading className="kaleido_heading" id="glheading" title={title} />
        </div>
        <div className={`main-tech tech-${data.length}`}>
          {data.map((item, idx) => (
            <EventCard key={idx} {...item} index={idx} />
          ))}
        </div>
        <div
          className="alt-bg"
          style={{
            "--xPos": `${position.x}px`,
            "--yPos": `${position.y}px`,
          }}
        />
      </div>
      <Sponsors />
      <Footer />
    </>
  );
};

export default EventPage;
