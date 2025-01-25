import React, { useEffect } from "react";
import "./RollingSquare.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import ImageCarousel from "./ImageCaraousal";
import Heading from "../Common/Headings/Heading";
import imageSources from "../../Data/RollingSquaresImages";
import { useMousePosition } from "../../CustomHooks/useMousePosition";
import VideoBox from "../EventPage/VideoBox";
import AOS from "aos";
import "aos/dist/aos.css";
import rsVid from "../../assets/Anim/RS.png";

export default function RollingSquare() {
  useEffect(() => {
    document.title = "Rolling Squares | FootPrints'25";
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with options
  }, []);

  const position = useMousePosition();

  return (
    <>
      <section>
        <VideoBox url={rsVid} />

        <Heading
          className="kaleido_heading"
          id="glheading"
          title={"Rolling Squares"}
        />
        <div data-aos="fade-up">
          <ImageCarousel images={imageSources.concert} />
        </div>

        <Heading className="kaleido_heading" id="glheading" title={"Informals"} />
        <div data-aos="zoom-in fade-up">
          <ImageCarousel images={imageSources.informals} />
        </div>

        <Heading className="kaleido_heading" id="glheading" title={"Jampad"} />
        <div data-aos="flip-left fade-up">
          <ImageCarousel images={imageSources.jampad} />
        </div>


       
      </section>
      <div
        className="alt-bg"
        style={{
          "--xPos": `${position.x}px`,
          "--yPos": `${position.y}px`,
        }}
      ></div>
       <Sponsors />
       <Footer />
    </>
  );
}
