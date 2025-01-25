import React, { useEffect } from "react";
import Footer from "../Common/Footer/Footer";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import "./EntryToFest.css";
import mobileBanner from '../../assets/images/eventimage/MobBanner.jpg';
import desktopBanner from '../../assets/images/eventimage/desktop.png';

const EntryToFest = () => {
  useEffect(() => {
    document.title = "Event Details";
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with options
  }, []);

  return (
    <div className="event-simple-page">
      <div className="event-top-image">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopBanner} />
          <img src={mobileBanner} alt="Event Banner" />
        </picture>
      </div>
      <div className="event-contact-section" data-aos="fade-up">
        <h2>For More Details Contact</h2>
        <div className="contact-numbers">
          <p>Event Coordinators:</p>
          <ul>
            <li>+91 98765 43210</li>
            <li>+91 87654 32109</li>
            <li>+91 76543 21098</li>
            <li>+91 65432 10987</li>
          </ul>
        </div>
      </div>
      <Sponsors data-aos="fade-up" />
      <Footer data-aos="fade-up" />
    </div>
  );
};

export default EntryToFest;
