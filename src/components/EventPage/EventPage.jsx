// Technotron.js

import React, { useState, useRef } from "react";
import "./EventPage.css"; // Make sure this path is correct
import { useParams } from "react-router-dom";
import theEventData from "../../Data/theEventData";
import Heading from "../Common/Headings/Heading";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Error from "../Error";
import VideoBox from "./VideoBox";

const EventPage = ({ theParent }) => {
  const { event } = useParams();
  // console.log(theParent);
  // console.log(event);
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

  const [isActive, setIsActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState(); // Set default tab
  const [selectedMenu, setSelectedMenu] = useState(null);
  const detailsRef = useRef(null);
  // const sectionRef= useRef(null);

  const toggleMenu = (menu) => {
    if (selectedMenu === menu) {
      // If clicking on the same tab and menu, toggle isActive only
      setIsActive(!isActive);
    } else {
      // If clicking on a different tab or menu, update both selectedTab and selectedMenu
      setIsActive(true);
      // setSelectedTab(tab);
      setSelectedMenu(menu);
      // Scroll to details section
      // detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggle = (tabname) => {
    setSelectedTab(tabname);

    const sectionRef = document.getElementById(`${tabname.toLowerCase()}`);
    if (sectionRef) {
      const offset = 250; // You can adjust this value based on your layout
      const offsetTop =
        sectionRef.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const data = theData["data"];

  return (
    <>
      <div className="events_main">
        <VideoBox url={theData["headingSource"]}/>
        <div className="text_info">
        
        {/* <div id="stars2"></div> */}
          <Heading
            className="kaleido_heading"
            id="glheading"
            title={theData.title}
          />
          {/* <div className="statement">
            <h4>
              {" "}
              Walking on water and developing software from scratch is easy only
              if both are frozen. It's hard enough to find an error in your code
              when you're looking for it, but it's even harder when you've
              assumed your code is error-free. From testing coding and decoding
              abilities, to programming skills and technical buzzhow,
              Cybernetics is the ultimate showdown arena. The logarithms are
              set, codes are built, but the question is will you be the first
              one to match it?
            </h4>
          </div> */}
        </div>
        <div className="main-tech">
          <div className={`tech${data.length===6?" when-six":""}${data.length===5?" when-five":""}${data.length===7?" when-seven":""}${data.length===1?" when-one":""}`}>
            {data?.map(({ name, background, details }, index) => (
              <div className="moon-icon-block" key={index}>
                <div
                  className=""
                  data-name={name}
                  style={{
                    
                    ...details.styles,
                  }}
                  data-aos="zoom-in-up"
                  onClick={() => toggle(name)}
                ></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="main_section">
          {data.map(({ name, details }, index) => (
            <div
              key={index}
              className={`details_each ${selectedTab === name ? "active" : ""}`}
              data-aos="zoom-in-up"
              id={`${name.toLowerCase()}`}
            >
              <Heading
                className="kaleido_heading"
                id="glheading"
                title={name}
              />

              <div className="details_each_" data-aos="zoom-in-up">
                <h4>Problem Statement</h4>
                <ul>
                  {details.info.map((info, index) => (
                    <li key={index}>{info}</li>
                  ))}
                </ul>
              </div>

              <div className={`containereve ${isActive ? "active" : ""}`}>
                <div
                  className="toggle-menu"
                  onClick={() => setIsActive(!isActive)}
                >
                  <div className="ripple-circle">
                    <span></span>
                  </div>
                </div>
                <ul className="menu" data-aos="zoom-in-up">
                  {details && (
                    <>
                      <li
                        style={{ "--i": 1 }}
                        onClick={() => toggleMenu("rules")}
                      >
                        <div className="a">
                          <div className="ripple-circle">
                            <span>Rules</span>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ "--i": 5 }}
                        onClick={() =>
                          toggleMenu(details.specs ? "specs" : "price")
                        }
                      >
                        <div className="a">
                          <div className="ripple-circle">
                            <span>{details.specs ? "Specs" : "Price"}</span>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ "--i": 6 }}
                        onClick={() => toggleMenu("team")}
                      >
                        <div className="a">
                          <div className="ripple-circle">
                            <span>Team</span>
                          </div>
                        </div>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Additional Details */}
              <div
                ref={detailsRef}
                className={`additional-details ${isActive ? "visible" : ""}`}
              >
                {details && (
                  <div className="details-content">
                    <h1>{selectedMenu}</h1>
                    {selectedMenu === "rules" && (
                      <ul>
                        {details.rules?.map((rule, index) => (
                          <li key={index}>{rule}</li>
                        ))}
                      </ul>
                    )}
                    {selectedMenu === "specs" && (
                      <ul>
                        {details.specs?.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    )}
                    {selectedMenu === "price" && (
                      <ul>
                        {details.price?.map((price, index) => (
                          <li key={index}>{price}</li>
                        ))}
                      </ul>
                    )}
                    {selectedMenu === "team" && (
                      <ul>
                        {details.team?.map((team, index) => (
                          <li key={index}>{team}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Sponsors />
      <Footer />
      
    </>
  );
};

export default EventPage;
