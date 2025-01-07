import React, { useState } from "react";
import { useParams } from "react-router-dom";
import theEventData from "../../Data/theEventData";
import Heading from "../Common/Headings/Heading";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./EventPage.css";
import Error from "../Error";
import VideoBox from "./VideoBox";

const EventCard = ({ name, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const getContent = () => {
    switch (activeSection) {
      case 'problem':
        return {
          title: 'Problem Statement',
          content: details.info.map((info, index) => (
            <li key={index}>{info}</li>
          ))
        };
      case 'rules':
        return {
          title: 'Rules',
          content: details.rules?.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))
        };
      case 'team':
        return {
          title: 'Team Members',
          content: details.team?.map((member, index) => (
            <li key={index}>{member}</li>
          ))
        };
      case 'price':
        return {
          title: 'Price Details',
          content: details.price?.map((price, index) => (
            <li key={index}>{price}</li>
          ))
        };
      default:
        return { title: name, content: null };
    }
  };

  const content = getContent();

  return (
    <div className="event-card">
      <h2 className="event-card-title">{content.title}</h2>
      
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="view-details-btn"
        >
          View Details
        </button>
      ) : (
        <div>
          <div className="options-container">
            <button
              onClick={() => setActiveSection('problem')}
              className={`option-btn ${activeSection === 'problem' ? 'active' : ''}`}
            >
              Problem Statement
            </button>
            <button
              onClick={() => setActiveSection('rules')}
              className={`option-btn ${activeSection === 'rules' ? 'active' : ''}`}
            >
              Rules
            </button>
            <button
              onClick={() => setActiveSection('team')}
              className={`option-btn ${activeSection === 'team' ? 'active' : ''}`}
            >
              Team Members
            </button>
            <button
              onClick={() => setActiveSection('price')}
              className={`option-btn ${activeSection === 'price' ? 'active' : ''}`}
            >
              Price
            </button>
          </div>
          
          {activeSection && content.content && (
            <div className="content-area">
              <ul>{content.content}</ul>
            </div>
          )}
          
          <button
            onClick={() => {
              setIsExpanded(false);
              setActiveSection(null);
            }}
            className="collapse-btn"
          >
            Collapse
          </button>
        </div>
      )}
    </div>
  );
};

const EventPage = ({ theParent }) => {
  const { event } = useParams();
  let theData = [];
  
  if (!event) {
    if(!theEventData[theParent]){
      return <Error/>;
    }
    theData = theEventData[theParent];
  } else {
    if(!theEventData[theParent][event]){
      return <Error />;
    }
    theData = theEventData[theParent][event];
  }

  const data = theData["data"];

  return (
    <div className="events_main">
      <VideoBox url={theData["headingSource"]}/>
      <div className="text_info">
        <Heading
          className="kaleido_heading"
          id="glheading"
          title={theData.title}
        />
      </div>
      <div className="main-tech">
        <div className={`tech ${data.length===6?" when-six":""} ${data.length===5?" when-five":""} ${data.length===7?" when-seven":""} ${data.length===1?" when-one":""}`}>
          {data?.map(({ name, background, details }, index) => (
            <div className="moon-icon-block" key={index}>
              <div
                className="moon-icon"
                data-name={name}
                style={{
                  backgroundImage: `url(${background})`,
                  ...details.styles,
                }}
                data-aos="zoom-in-up"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="main_section">
        {data.map((item, index) => (
          <EventCard key={index} name={item.name} details={item.details} />
        ))}
      </div>
      <Sponsors />
      <Footer />
    </div>
  );
};

export default EventPage;