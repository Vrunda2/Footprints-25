// Technotron.js

import React, { useState, useRef } from "react";
import "../technotron.css"; // Make sure this path is correct
import icon1 from "../../../assets/images/Logo/runtime.png";
import icon2 from "../../../assets/images/Logo/code-n-create.png";
import icon3 from "../../../assets/images/Logo/hackprints.png";
import icon4 from "../../../assets/images/Logo/space.png";
import Heading from "../../Common/Headings/Heading";

import Vid from "../../../assets/images/Logo/c.mp4";

const Techx = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState(); // Set default tab
  const [selectedMenu, setSelectedMenu] = useState(null);
  const detailsRef = useRef(null);
  const [activeIcons, setActiveIcons] = useState({});
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

  const iconsRow1 = [
    {
      name: "Runtime",
      background: icon1,
      details: {
        info: [
          "This event tests your programming skills. The challenge is to code the real-life problems in the computer world using any programming language interviewing different stages of coding and scoring the most among them",
        ],
        rules: [
          "- No help from internet is allowed",
          "- Programming languages preferred C, C++, C#, python, java etc",
          "-	Criteria for qualification in round 2 and 3 will be filtered by the ranking given to each coder by Price footprints",
          "-	Event will take place in the computer lab of the faculty, so no laptop is required from the participant",
          "-	Event will take place in the computer lab of the faculty, so no laptop is required from the participant",
        ],
        Member: ["Individual"],
        Price: ["100 Rs"],
      },
    },
    
  ];

  const getSelectedDetails = () => {
    const selectedIcon = [...iconsRow1].find(
      (icon) => icon.name === selectedTab
    );
    return selectedIcon ? selectedIcon.details : null;
  };

  const selectedDetails = getSelectedDetails();
  

  return (
    <div className="events_main">
      <div className="video_main">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          width="100%"
        >
          <source src={Vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text_info">
        <Heading
          className="kaleido_heading"
          id="glheading"
          title={"Technical Events for Computer and IT Department"}
        />
        <div className="statement">
          <h4>
            {" "}
            Walking on water and developing software from scratch is easy only
            if both are frozen. It's hard enough to find an error in your code
            when you're looking for it, but it's even harder when you've assumed
            your code is error-free. From testing coding and decoding abilities,
            to programming skills and technical buzzhow, Cybernetics is the
            ultimate showdown arena. The logarithms are set, codes are built,
            but the question is will you be the first one to match it?
          </h4>
        </div>
      </div>
      <div className="main-tech">
        <div className="tech" >
          {iconsRow1.map(({ name, background, details }, index) => (
            <div
              key={index}
              className="moon-icon"
              data-name={name}
              style={{
                backgroundImage: `url(${background})`,
                ...details.styles,
              }}
              data-aos="zoom-in-up"
              onClick={() => toggle(name)}
            ></div>
          ))}
        </div>
      </div>
      <div className="main_section">
        {iconsRow1.map(({ name, details }, index) => (
          <div
            key={index}
            className={`details_each ${selectedTab === name ? "active" : ""}`}
            data-aos="zoom-in-up"
            id={`${name.toLowerCase()}`}
          >
            <Heading className="kaleido_heading" id="glheading" title={name} />

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
                      onClick={() => toggleMenu("Member")}
                    >
                      <div className="a">
                        <div className="ripple-circle">
                        <span>Member</span>
                        </div>
                        
                      </div>
                    </li>
                    <li style={{ "--i": 6 }} onClick={() => toggleMenu("Price")}>
                      <div className="a">
                        <div className="ripple-circle">
                        <span>Price</span>
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
                      {details.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  )}
                  {selectedMenu === "Member" && (
                    <ul>
                      {details.Member.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  )}
                  {selectedMenu === "Price" && (
                    <ul>
                      {details.Price.map((Price, index) => (
                        <li key={index}>{Price}</li>
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
  );
};

export default Techx;