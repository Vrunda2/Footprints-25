import React from "react";
import "./Home.css";
import mainHeader from "../../../assets/Header25.png";
import { useMousePosition } from "../../../CustomHooks/useMousePosition";

function Home() {
  const position = useMousePosition();
  
  return (
    <>
      <img
        src={mainHeader}
        alt="Main Header"
        id="home-header"
        className="zoom-animation"
      />
      <div 
        className="alt-bg" 
        style={{'--xPos':`${position.x}px`,'--yPos':`${position.y}px`}}
      />
    </>
  );
}

export default Home;