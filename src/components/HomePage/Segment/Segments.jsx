import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../Common/Headings/Heading";
import "./Segment.css";
import segementData from "../../../Data/SegementsData";

const Segments = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    setAnimationClass("exit-left");
    setTimeout(() => {
      setCurrentProduct((prev) =>
        prev < segementData.length - 1 ? prev + 1 : 0 
      );
      setAnimationClass("fade-up");
    }, 50);
  };

  const handlePrev = () => {
    setAnimationClass("exit-right");
    setTimeout(() => {
      setCurrentProduct((prev) =>
        prev > 0 ? prev - 1 : segementData.length - 1 
      );
      setAnimationClass("fade-up");
    }, 50);
  };

  const handleEventClick = (link) => {
    navigate(link);
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="main-segment">
      <div className="head">
        <Heading className="kaleido_heading" id="glheading" title="SEGMENTS" />
      </div>

      <div className="slider-wrapper">
        <div className="bg-shape">
          {segementData.map((product, index) => (
            <img
              key={index}
              src={product.imageSource}
              alt={product.title}
              className={`product-img ${
                index === currentProduct ? `active ${animationClass}` : ""
              }`}
            />
          ))}
        </div>

        <div className="product-slider">
          <button className="prev" onClick={handlePrev}>
            <span>←</span>
          </button>

          <button className="next" onClick={handleNext}>
            <span>→</span>
          </button>

          <div className={`product-card ${animationClass}`}>
            <div className="product-content"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="4000"
                  >
              <h1>{segementData[currentProduct].title}</h1>
              <div className="product-events"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="4000"
                    >
                {segementData[currentProduct].subItems.map((event, index) => (
                  <button
                    key={index}
                    className="event-button"
                    onClick={() => handleEventClick(event.link)}
                  >
                    {event.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Segments;
