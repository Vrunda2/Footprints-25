import React, { useEffect } from "react";
import "./RollingSquare.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import ImageCarousel from "./ImageCaraousal";
import Heading from "../Common/Headings/Heading";
import imageSources from "../../Data/RollingSquaresImages";
import { useMousePosition } from "../../CustomHooks/useMousePosition";
import VideoBox from "../EventPage/VideoBox";
import rsVid from "../../assets/Anim/RS.png"

export default function RollingSquare() {
  useEffect(() => {
    document.title = "Rolling Squares | FootPrints'25";
  }, []);

  const position = useMousePosition();

  return (
    <>
      <section>
        <VideoBox url={rsVid} />
        {/* <Heading
          className="kaleido_heading"
          id="glheading"
          title={"Live In Concert"}
        /> */}
        
        {/* <div className="concert-24">
          <img src="https://res.cloudinary.com/du1tas6pe/image/upload/v1708442864/astronout/wc4ecblr7qpfzufr1emv.jpg" alt="Soon" />
          <div className="info">
            <h1 data-aos="fade-up" className="name">Lorem ipsum</h1>
            <div className="meta-info">
              <div className="time">Date :9th March, 2025</div>
              <div className="venue">
                Venue :  

                  Faculty Of Technology And Engineering, MSU, Kalabhavan,
                  Vadodara.

              </div>
            </div>

          </div>
        </div> */}
        
        

        <Heading
          className="kaleido_heading"
          id="glheading"
          title={"Rolling Squares"}
        />
        <ImageCarousel data-aos="fade-up" images={imageSources.concert} />
        
        <Heading className="kaleido_heading" id="glheading" title={"Informal"} />
        <ImageCarousel  data-aos="fade-up" images={imageSources.informals} />

        <Heading className="kaleido_heading" id="glheading" title={"Jampad"} />
        <ImageCarousel  data-aos="fade-up" images={imageSources.jampad} />

        <Sponsors />
        
        <Footer />
      </section>
      <div className="alt-bg" style={{'--xPos':`${position.x}px`,'--yPos':`${position.y}px`}}></div>
    </>
  );
}
