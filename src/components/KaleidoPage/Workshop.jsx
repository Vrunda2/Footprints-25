import React, { useEffect } from "react";
import { PrevWorkshopData, CurrentWorkshopData } from "../../Data/Workshop";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Workshop.css";
import Heading from "../Common/Headings/Heading";
import { useMousePosition } from "../../CustomHooks/useMousePosition";

function Workshop() {
  useEffect(() => {
    document.title = "Workshops | FootPrints'25";
  }, []);

  const position = useMousePosition();

  return (
    <section id="Workshop">
      <div className="video_main">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source
            src="https://res.cloudinary.com/dwevqwmg7/video/upload/v1705597470/vdos/mwwq0k4owswdxmab3a3e.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container">
        <Heading title="WORKSHOPS" className="workshop_heading" />

        {CurrentWorkshopData.map((element) => (
          <div
            key={element.id}
            className={`workshop_lec ${element.id % 2 === 0 ? "content" : ""}`}
          >
            {element.id % 2 !== 0 && (
              <div className="workshop_img" data-aos="fade-right">
                <img src={element.imgSrc} alt={element.name} />
              </div>
            )}
            <div
              className="about_workshop"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="400"
                      data-aos-easing="ease-in-sine"
            >
              <h3 className="workshop_name">{element.name}</h3>
              <p>{element.content}</p>
              <p className="clock-icon">
                <i className="fa fa-calendar"></i> {element.date}
              </p>
            </div>
            {element.id % 2 === 0 && (
              <div className="workshop_img" data-aos="fade-left">
                <img src={element.imgSrc} alt={element.name} />
              </div>
            )}
          </div>
        ))}

        <Heading title="PREVIOUS WORKSHOPS" className="workshop_heading" />

        {PrevWorkshopData.map((element) => (
          <div
            key={element.id}
            className={`workshop_lec ${element.id % 2 === 0 ? "content" : ""}`}
          >
            {element.id % 2 !== 0 && (
              <div className="workshop_img" data-aos="fade-right">
                <img src={element.imgSrc} alt={element.name} />
              </div>
            )}
            <div
              className="about_workshop"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="workshop_name">{element.name}</h3>
              <p>{element.content}</p>
              <p className="clock-icon">
                <i className="fa fa-calendar"></i> {element.date}
              </p>
            </div>
            {element.id % 2 === 0 && (
              <div className="workshop_img" data-aos="fade-left">
                <img src={element.imgSrc} alt={element.name} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div 
        className="alt-bg" 
        style={{'--xPos':`${position.x}px`,'--yPos':`${position.y}px`}}
      />

      <Sponsors />
      <Footer />
    </section>
  );
}

export default Workshop;
