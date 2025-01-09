import React from "react";
import "./Home.css";
import mainHeader from "../../../assets/25header.png";

function Home() {
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
    </>
  );
}

export default Home;
