import React from "react";
import "./Home.css";
import mainHeader from "../../../assets/FP25PH.png";
import altBG from "../../../assets/GridEle.png"
import { useMousePosition } from "../../../CustomHooks/useMousePosition";

function Home() {
  const position = useMousePosition();
    return (
      <>
        <div className="home-gif">
          <img
            src={mainHeader}
            alt="Header"
            id="home-header"
          />
        </div>
        <div className="alt-bg">
          <img
            src={altBG}
            alt=""
            id="hoverBg"
          />
        </div>
      </>
    );
}
export default Home;