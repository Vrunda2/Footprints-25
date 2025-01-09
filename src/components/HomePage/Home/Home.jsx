import React from "react";
import "./Home.css";
import mainHeader from "../../../assets/FP25HeaderWhite.png";
import { useMousePosition } from "../../../CustomHooks/useMousePosition";

function Home() {
  const position = useMousePosition();
    return (
      <>
        <div className="home-header">
          <img
            src={mainHeader}
            alt="Header"
            id="home-header"
          />
        </div>
        <div className="alt-bg" style={{'--xPos':`${position.x}px`,'--yPos':`${position.y}px`}}>
        </div>       
      </>
    );
}
export default Home;