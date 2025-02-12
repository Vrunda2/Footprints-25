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
      <div className="TandC" data-aos="fade-up">
        <h3>Terms and Conditions</h3>
        <p>
        You’re required to carry a screenshot of the QR and a copy of identity proof.
        <ul>
          <li>Entry for one person only.</li>
          <li>This pass is strictly non refundable and non transferable.</li>
          <li>If the pass is received from any sources other than the official bot for booking of the pass, then YOU ARE LIABLE for any issues during the admission process.</li>
          <li>In case of natural calamity/hazard the core Committee is not responsible for cancellation.</li>
          <li>This QR can be scanned only once. Person once admitted will not be allowed to re-enter under any circumstances.</li>
          <li>Professional cameras will not be allowed. Strict actions will be taken if we find anyone with cameras. </li>
          <li>You shall not bring all or any of the following into the venue: <br />
            <ol>
              <li value={1}>Smoking materials</li>
              <li>Laser pens</li>
              <li>Animals</li>
              <li>Food or drink</li>
              <li>Bottles, cans or glass containers</li>
              <li>Any item that may be interpreted as a weapon</li>
              <li>Illegal substances</li>
            </ol>
          </li>
          <li>All rights are reserved be the core Committee of FootPrints’25 for changes under any circumstances. </li>
          <li>People carrying objectionable items will be barred from the concert. </li>
          <li>Neither team FootPrints’25 nor the MSU FOTE is liable for any loss, injury or damage to any person or property however caused in any circumstances. </li>
          <li>Any delay of concert in enforcing any of the conditions shall not constitute a waiver of Team FootPrints’25 or the venue’s rights to do so. </li>
          <li>Rights of admission reserved.</li>
        </ul>
        </p>
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
