import React, { useEffect } from "react";
import Footer from "../Common/Footer/Footer";
import Achivements from "./Achivements/Achivements";
import Glimpse from "./Glimpse/Glimpse";
import Home from "./Home/Home";
// Common CSS File //
import "../Common/CSS/MediaQuery.css";
import "../Common/CSS/Root.css";
import Testimonials24 from "./Testimonials/Testimonials24";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Segments from "./Segment/Segments";

function Homepage() {
  useEffect(() => {
    document.title = "Home | FootPrints'25";
  }, []);

  return (
    <>
     
      <Home />
      <Segments />
      <Glimpse />
      <Testimonials24 />
      <Achivements />
      <Sponsors/>
      <Footer />
    </>
  );
}

export default Homepage;
