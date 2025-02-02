import React, { useEffect } from "react";
import PrevTechziData from "../../Data/Techzi";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Techzi.css";
import Heading from "../Common/Headings/Heading";
import { useMousePosition } from "../../CustomHooks/useMousePosition";
import kaleidoVid from "../../assets/Anim/kaleido.png";
import VideoBox from "../EventPage/VideoBox";

function Techzi() {
  useEffect(() => {
    document.title = "Techzibition | FootPrints'25";
  }, []);

  const position = useMousePosition();

  return (
    <>
      <section id="Techzi">
        <div className="headingOffset">
          <VideoBox url={kaleidoVid} />
        </div>
        <div className="container">
          <Heading
            className="kaleido_heading"
            id="glheading"
            title="PREVIOUS TECHZIBITIONS"
          />


{PrevTechziData.map((element) => {
            if (element.id % 2 == 0) {
              return (
                <div key={element.id}>
                  <div className="techzi_lec content">
                    <div className="about_techzi about_techzi_para1">
                      <div className="techzi_heading">
                        <h3 className="techzi_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-techzi">
                        {" "}
                        {element.content}
                      </p>
                    </div>

                    <div
                      className="techzi_img techzi_img_style"
                      data-aos="zoom-in-right"
                      data-aos-duration="1000"
                      data-aos-delay="100"

                    >
                      <img
                        src={element.imgSrc}
                        className="Techzi-img"
                        alt={element.name}
                      />
                    </div>

                    <div className="about_techzi about_techzi_para2">
                      <div className="techzi_heading">
                        <h3 className="techzi_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-techzi">
                        {" "}
                        {element.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={element.id}>
                <div className="techzi_lec">
                  <div
                    className="techzi_img"
                    data-aos="zoom-in-right"
                    data-aos-duration="1000"
                    data-aos-delay="100"

                  >
                    <img
                      src={element.imgSrc}
                      className="Techzi-img"
                      alt={element.name}
                    />
                  </div>

                  <div className="about_techzi para1">
                    <div className="techzi_heading">
                      <h3 className="techzi_name">
                        {element.name} <br /> {element.details}
                      </h3>
                    </div>
                    <p className="text-without-icon-techzi">
                      {element.content}
                    </p>
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

export default Techzi;
