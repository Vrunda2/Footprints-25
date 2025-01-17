import React,{useEffect} from "react";
import "./Acco.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import VideoBox from "../EventPage/VideoBox";
import Revealing from '../Common/RevealingText/Revealing';
import { useMousePosition } from "../../CustomHooks/useMousePosition";

function Acco() {

  useEffect(() => {
  
    document.title="Accomodation | FootPrints'25"

  }, [])

  const position = useMousePosition();

  return (
    <>
      <div className="headingOffset">
        <VideoBox url={"ACCOMODATION"} />
      </div>
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
