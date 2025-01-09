import React,{useEffect} from "react";
import "./Acco.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Heading from "../Common/Headings/Heading";
import Revealing from '../Common/RevealingText/Revealing';

function Acco() {

  useEffect(() => {
  
    document.title="Accomodation | FootPrints'25"

  }, [])

  return (
    <>
      <div className="acco_header_img" id="parent_div">
        
        <div className="text-on-image-acco">
          {/* <p>Accomodation</p> */}
          <Heading id="heading_sponsors_page" title="ACCOMODATION" />
        </div>
        {/* <hr /> */}
      </div>
      {/* <div className="reveal-text">
        <p className="reveal-soon-text">REVEALING SOON!</p>
      </div> */}
      <Revealing />

      <Sponsors />
      <div id="stars"></div>
      <div id="stars2"></div>
      <Footer />
    </>
  );
}

export default Acco;
