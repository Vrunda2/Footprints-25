import React, { useEffect } from "react";
import Footer from "../Common/Footer/Footer";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import "./EntryToFest.css";
import mobileBanner from '../../assets/images/eventimage/MobBanner.jpg';
import desktopBanner from '../../assets/images/eventimage/WebBanner.jpg';
import { useMousePosition } from "../../CustomHooks/useMousePosition";

const EntryToFest = () => {
  useEffect(() => {
    document.title = "Event Details";
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with options
  }, []);

  const position = useMousePosition();

  return (
    <div className="event-simple-page">
      <div className="event-top-image">
        <picture className="banner-img">
          <source media="(min-width: 768px)" srcSet={desktopBanner} />
          <img src={mobileBanner} alt="Event Banner" />
        </picture>
      </div>
      <div className="event-contact-section" data-aos="fade-up">
        <h2>For More Details Contact</h2>
        <div className="contact-numbers">
          <ul>
            <a className="numberLink" href="tel:8849410379"><li>+91 88494 10379</li></a>
            <a className="numberLink" href="tel:9316304934"><li>+91 93163 04934</li></a>
          </ul>
        </div>
      </div>
      <div 
        className="alt-bg" 
        style={{'--xPos':`${position.x}px`,'--yPos':`${position.y}px`}}
      />
      <Sponsors data-aos="fade-up" />
      <Footer data-aos="fade-up" />
    </div>
  );
};

export default EntryToFest;
