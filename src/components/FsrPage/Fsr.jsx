import React, { useEffect } from "react";
import AOS from "aos";
import FsrData from "../../Data/Fsr";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Fsr.css";
import VideoBox from "../EventPage/VideoBox";
import { useMousePosition } from "../../CustomHooks/useMousePosition";
import fsrVid from "../../assets/Anim/FSR.png";
import Heading from "../Common/Headings/Heading";

function Fsr() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",

      offset: 150,

      once: false,
    });
    document.title = "FSR | FootPrints'25";
  }, []);

  const position = useMousePosition();

  return (
    <>
      <section id="Fsr">
        <div className="headingOffset">
          <VideoBox url={fsrVid} />
          <Heading
            id="heading_main_Sponsor"
            title={"Our Drives"}
          />
        </div>
        {/* <div>
          <div className="video_main">
            <video
              autoPlay
              loop
              muted
              width="100%"
            >
              <source src={fsrVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div> */}
        <div className="container">
                    
          {FsrData.map((element) => {
            if (element.id % 2 === 0) {
              return (
                <div key={element.id}>
                  <div className="fsr_lec content">
                    <div
                      className="about_fsr about_fsr_para1"
                      data-aos="fade-right" 
                    >
                      <div className="fsr_heading">
                        <h3 className="fsr_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-fsr">{element.content}</p>
                    </div>

                    <div
                      className="fsr_img fsr_img_style"
                      data-aos="zoom-in"
                    >
                      <img
                        src={element.imgSrc}
                        className="Fsr-img"
                        alt={element.name}
                      />
                    </div>

                    <div
                      className="about_fsr about_fsr_para2"
                      data-aos="fade-left" 
                    >
                      <div className="fsr_heading">
                        <h3 className="fsr_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-fsr">{element.content}</p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={element.id}>
                <div className="fsr_lec">
                  <div
                    className="fsr_img fsr_img_style"
                    data-aos="zoom-in"
                  >
                    <img
                      src={element.imgSrc}
                      className="Fsr-img"
                      alt={element.name}
                    />
                  </div>

                  <div
                    className="about_fsr para1"  data-aos="fade-left" 
                  >
                    <div className="fsr_heading">
                      <h3 className="fsr_name">
                        {element.name} <br /> {element.details}
                      </h3>
                    </div>
                    <p className="text-without-icon-fsr">{element.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </section>
      <div 
        className="alt-bg" 
        style={{'--xPos':`${position.x}px`,'--yPos':`${position.y}px`}}
      />

      <Sponsors />
      <Footer />
    </>
  );
}

export default Fsr;
