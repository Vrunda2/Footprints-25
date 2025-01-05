import React from "react";
import "./Home.css";
import mainHeader from "../../../assets/FP25PH.png";
import altBG from "../../../assets/GridEle.png"

function Home() {
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
          />
        </div>
      </>
    );
}
export default Home;