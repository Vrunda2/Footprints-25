import React, { useEffect } from "react";
import { AboutGuestData, CurrentGuestData } from "../../Data/Kaleido";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Kaleido.css";
import Heading from "../Common/Headings/Heading";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library
import imageSrc from "../../assets/example.jpg";
import { useMousePosition } from "../../CustomHooks/useMousePosition";
import VideoBox from "../EventPage/VideoBox";
import kaleidoVid from "../../assets/Anim/kaleido.png";


// Reusable GuestLecture Component
const GuestLecture = ({ element, isImageFirst, animationDirection }) => (
  <div className="guest_lec content">
    {isImageFirst && (
      <div
        className="guest_img image-frame"
        data-aos={animationDirection}
        data-aos-duration="2000" // Slower animation for image
      >
        <img
          src={element.imageSrc} // Use the imported image
          className="Kaleido-img"
          alt={element.name}
        />
      </div>
    )}

    <div
      className="about_guest"
      data-aos="fade-up"
      data-aos-duration="800" // Faster animation for content
      data-aos-offset="400"
      data-aos-easing="ease-in-sine"
    >
      <div className="guest_heading">
        <h3 className="guest_name">
          {element.name} <br />
          {element.details}
        </h3>
      </div>
      <p className="text-without-icon">{element.content}</p>
      {element.date && (
        <p className="clock-icon">
          <i className="fa fa-light fa-calendar"></i> &nbsp;{element.date}
        </p>
      )}
      {element.venue && (
        <p className="location-icon">
          <i className="fa fa-light fa-map-marker"></i> &nbsp;{element.venue}
        </p>
      )}
    </div>

    {!isImageFirst && (
      <div
        className="guest_img image-frame"
        data-aos={animationDirection}
        data-aos-duration="2000" // Slower animation for image
      >  
        <img
          src={element.imageSrc} // Use the imported image
          className="Kaleido-img"
          alt={element.name}
        />
      </div>
    )}
  </div>
);

function Kaleido() {
  useEffect(() => {
    document.title = "Guest Lecture | FootPrints'25";
    AOS.init(); // Initialize AOS for animations
  }, []);

  const position = useMousePosition();

  return (
    <>
      <section id="Kaleido">
       <VideoBox url={kaleidoVid}/>
        {/* Current Guest Lectures */}
        <div className="container">
          <Heading
            className="kaleido_heading"
            id="glheading"
            title="GUEST LECTURES"
          />
          {CurrentGuestData.map((element) => (
            <GuestLecture
              key={element.id}
              element={element}
              isImageFirst={element.id % 2 !== 0}
              animationDirection={element.id % 2 === 0 ? "GuestAnimRight" : "GuestAnimLeft"}
            />
          ))}

          {/* Previous Guest Lectures */}
          <Heading
            className="kaleido_heading"
            id="glheading"
            title="PREVIOUS GUEST LECTURES"
          />
          {AboutGuestData.map((element) => (
            <GuestLecture
              key={element.id}
              element={element}
              isImageFirst={element.id % 2 !== 0}
              animationDirection={element.id % 2 === 0 ? "GuestAnimRight" : "GuestAnimLeft"}
            />
          ))}
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

export default Kaleido;
