import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../Common/Headings/Heading";
import "./Segment.css";
import segementData from "../../../Data/SegementsData";

const Segments = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentProduct < segementData.length - 1) {
      setAnimationClass("exit-left");
      setTimeout(() => {
        setCurrentProduct((prev) => prev + 1);
        setAnimationClass("");
      }, 500);
    }
  };

  const handlePrev = () => {
    if (currentProduct > 0) {
      setAnimationClass("exit-right");
      setTimeout(() => {
        setCurrentProduct((prev) => prev - 1);
        setAnimationClass("");
      }, 500);
    }
  };

  const handleEventClick = (link) => {
    navigate(link); // Redirect to the URL
  };

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
                index === currentProduct ? "active" : animationClass
              }`}
            />
          ))}
        </div>

        <div className="product-slider">
          <button
            className={`prev ${currentProduct === 0 ? "disabled" : ""}`}
            onClick={handlePrev}
            disabled={currentProduct === 0}
          >
            <span>←</span>
          </button>

          <button
            className={`next ${
              currentProduct === segementData.length - 1 ? "disabled" : ""
            }`}
            onClick={handleNext}
            disabled={currentProduct === segementData.length - 1}
          >
            <span>→</span>
          </button>

          <div className="product-card">
            <div className="product-content">
              <h1>{segementData[currentProduct].title}</h1>
              <div className="product-events">
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
