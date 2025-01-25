import React from "react";
// import Img from "../../../assets/images/Insta-icon3.png";
import Heading from "../../Common/Headings/Heading";
import "./Glimpse.css";
import FSRR from "../../../assets/images/gallary/fsrglimpse.jpg";
import RSS from "../../../assets/images/temp/aditya.jpg";
import Info from "../../../assets/images/temp/informal.jpg";

const Glimpse = () => {
  return (
    <div className="glimpse-main">
      <Heading id="heading_glimpse" title="CATCH THE GLIMPSE" />
      <div className="yt-videos">
        <div
          className="glimpse col-xl-4 col-sm-12 col-md-6"
          data-aos={screen.width >= 1150 ? "fade-up" : "slide-right"}
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <iframe
            width="373"
            height="210"
            src="https://www.youtube.com/embed/XMmN90MfEy4?si=evkqvUiQNqln9b2o"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="glimpse col-xl-4 col-sm-12 col-md-6"
          data-aos={screen.width >= 1150 ? "fade-down" : "slide-left"}
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <iframe
            width="373"
            height="210"
            src="https://www.youtube.com/embed/-8waHD5yGQE?si=9gLWORHWT_C5i2F_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Padding for last element so that it is displayed in the center on tablets */}
        <div className="col-md-3 d-none d-md-inline-block d-xl-none"></div>
        <div
          className="glimpse col-xl-4 col-sm-12 col-md-6"
          data-aos={screen.width >= 536 ? "fade-up" : "slide-right"}
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <iframe
            width="373"
            height="210"
            src="https://www.youtube.com/embed/laV4us-nGPQ?si=p6cBtzwT04Cs46pc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Heading id="heading_flashback" title="FLASHBACK FRIDAY" />
      <div className="flash-video">
        <div
          className="link col-sm-12 col-md-6 col-xl-4"
          data-aos="slide-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <a target="_blank" href="https://www.instagram.com/reel/CvmwsvAgR2U/?igshid=NTc4MTIwNjQ2YQ==">
            <img
              src= {FSRR}
              className="imagef"
              alt=""
              width="300px"
              height="200px"
            />
            <div className="ig-overlay">
              <img src="https://www.instagram.com/reel/DBwGQACteqF/?igsh=MThpdW5za3NreXQ0Zg==" alt="" />
            </div>
          </a>
        </div>
        <div
          className="link col-sm-12 col-md-6 col-xl-4"
          data-aos={screen.width > 1024 ? "slide-up" : "slide-left"}
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <a target="_blank" href="https://www.instagram.com/reel/C8v-l-btSm1/?igsh=dXFqbGk4MDFteXpo">
            <img
              src={RSS}
              className="imagef"
              alt=""
              width="300px"
              height="200px"

            />
            <div className="ig-overlay">
              <img src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705427552/reel/ncbl5lrsub6rybpi1zpa.png" alt="" />
            </div>
          </a>
        </div>
        {/* Padding for last element so that it is displayed in the center on tablets */}
        <div className="col-md-3 d-none d-md-inline-block d-xl-none"></div>
        <div
          className="link col-sm-12 col-md-6 col-xl-4"
          data-aos={screen.width > 1024 ? "slide-left" : screen.width > 767 ? "slide-up" : "slide-right"}
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <a target="_blank" href="https://www.instagram.com/reel/C-ccggmSc-L/?igsh=bDI0dWtrMmI4eWR0">
            <img
              src={Info}
              className="imagef"
              alt=""
              width="300px"
              height="200px"
            />
            <div className="ig-overlay">
              <img src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705427552/reel/ncbl5lrsub6rybpi1zpa.png" alt="" />
            </div>
          </a>
        </div>
      </div>
      <img src="" alt="" />
    </div>
  );
};

export default Glimpse;
