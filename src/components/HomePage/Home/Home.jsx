import React from "react";
import "./Home.css";
import mainHeader from "../../../assets/FP25PH.png";

function Home() {
    return (
      <>
        <div className="home-gif">
          <img
            src={mainHeader}
            alt=""
            id="home-header"
          />
        </div>
      </>
    );
}
export default Home;