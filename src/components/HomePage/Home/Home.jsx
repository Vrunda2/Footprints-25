import React from "react";
import "./Home.css";
import mainHeader from "../../../assets/25header.png";
import { useMousePosition } from "../../../CustomHooks/useMousePosition";

function Home() {
  const position = useMousePosition();
  return (
    <>
      <div className="home-gif">
        <img
          src={mainHeader}
          alt="Main Header"
          id="home-header"
          className="zoom-animation"
        />
      </div>
      <div className="alt-bg" style={{'--xPos':`${position.x}px`,'--yPos':`${position.y}px`}}></div>
    </>
  );
}

export default Home;
