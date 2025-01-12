import React,{useEffect} from "react";
import "./Acco.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Heading from "../Common/Headings/Heading";
import Revealing from '../Common/RevealingText/Revealing';
import { useMousePosition } from "../../CustomHooks/useMousePosition";

function Acco() {

  useEffect(() => {
  
    document.title="Accomodation | FootPrints'25"

  }, [])

  const position = useMousePosition();

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
      <div 
        className="alt-bg" 
        style={{'--xPos':`${position.x}px`,'--yPos':`${position.y}px`}}
      />

      <Sponsors />
      <Footer />
    </>
  );
}

export default Acco;
