import React, { useRef, useEffect } from "react";
import "./Segment.css"; // Replace with your CSS file
// import phoo from "../../../assets/images/Logo/center.png"
// import phoo from "../../../assets/images/Logo/segment.png"
import Heading from "../../Common/Headings/Heading";
import segementData from "../../../Data/SegementsData";
import { Link } from "react-router-dom";

const Segments = () => {
  const slideRef = useRef(null);
  const nextSlide = () => {
    const lists = slideRef.current.querySelectorAll(".item-seg");
    slideRef.current.appendChild(lists[0].cloneNode(true));
    slideRef.current.removeChild(lists[0]);
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000);
  };

  const prevSlide = () => {
    const lists = slideRef.current.querySelectorAll(".item-seg");
    slideRef.current.prepend(lists[lists.length - 1].cloneNode(true));
    slideRef.current.removeChild(lists[lists.length - 1]);
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000);
  };

  let intervalId;

  useEffect(() => {
    intervalId = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="main-segment">
      <div className="head">
        <Heading className="kaleido_heading" id="glheading" title="SEGMENTS" />
      </div>
      
      <div className="container-seg">
        <div id="slide" ref={slideRef}>
          {segementData.map((event, index) => {
            return (
              <div
                className="item-seg"
                style={{
                  backgroundImage: `url(${event.imageSource})`,
                }}
                key={index}
              >
                <div className="content">
                  <div className="name">{event.title}</div>
                  {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
                  {event.subItems.map((subevent, index) => {
                    return <Link key={index+1000} to={`${subevent.link}`}>{subevent.title}</Link>;
                  })}
                </div>
              </div>
            );
          })}
          {/* ... Add other item-segs as needed */}
        </div>
        <div className="buttons-seg">
          <button id="prev" onClick={prevSlide}>
            <i className="fa-solid fa-angle-left button1"></i>
          </button>
          <button id="next" onClick={nextSlide}>
            <i className="fa-solid fa-angle-right button2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Segments;
