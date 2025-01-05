import React, { useEffect } from "react";
import "./RollingSquare.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import ImageCarousel from "./ImageCaraousal";
import Heading from "../Common/Headings/Heading";
import imageSources from "../../Data/RollingSquaresImages";

export default function RollingSquare() {
  useEffect(() => {
    document.title = "Rolling Squares | FootPrints'25";
  }, []);

  return (
    <section>
      <div className="video_main">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          width="100%"
        >
          <source
            src={
              "https://res.cloudinary.com/dwevqwmg7/video/upload/v1705597475/vdos/pgr6s6xhnbxbamh8gpld.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <Heading
        className="kaleido_heading"
        id="glheading"
        title={"Live In Concert"}
      />
      <div className="concert-24">
        <img src="https://res.cloudinary.com/du1tas6pe/image/upload/v1708442864/astronout/wc4ecblr7qpfzufr1emv.jpg" alt="Aditya Gadhvi" />
        <div className="info">
          <h1 data-aos="fade-up" className="name">Aditya Gadhvi</h1>
          <div className="meta-info">
            <div className="time">Date :3rd March, 2024</div>
            <div className="venue">
              Venue :  
              {/* <div> */}
                Faculty Of Technology And Engineering, MSU, Kalabhavan,
                Vadodara.
              {/* </div> */}
            </div>
          </div>

          {/* <div>3rd March</div>
          <div>Venue : Faculty Of Technology And Engineering, MSU, Kalabhavan, Vadodara.</div> */}
        </div>
      </div>

      <Heading
        className="kaleido_heading"
        id="glheading"
        title={"Rolling Squares"}
      />
      <ImageCarousel images={imageSources.concert} />
      
      <Heading className="kaleido_heading" id="glheading" title={"Informal"} />
      <ImageCarousel images={imageSources.informals} />

      <Heading className="kaleido_heading" id="glheading" title={"Jampad"} />
      <ImageCarousel images={imageSources.jampad} />

      <Sponsors />
      
      <Footer />
    </section>
  );
}
