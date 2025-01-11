import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSubtitleClick = () => {
    navigate("/home");
  };

  return (
    <div className="main-star">
      <div className="overlay"></div>
      <div className="logo-container">
        <img 
          src="src\components\LandingPage\Footprints25Silver.png"
          alt="Footprints 25 Logo" 
          className="center-logo"
          
        />
      </div>
      <div id="subtitle">
        <span onClick={handleSubtitleClick}>
        Discover More
        </span>
      </div>
    </div>
  );
};

export default LandingPage;