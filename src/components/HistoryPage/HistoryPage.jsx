import React, { useEffect, useRef } from "react";
import HistoryData from "../../Data/HistoryData";
import Heading from "../Common/Headings/Heading";
import "./HistoryPage.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Image from "../../assets/image.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function HistoryPage() {
  const timelineRef = useRef(null);

  useEffect(() => {
    document.title = "History | FootPrints'25";
    AOS.init({
      duration: 1000, // Animation duration
      once: false,     // Animation runs only once
    });
  }, []);

  return (
    <>
      <section id="history">
        <div className="history_header_img" id="parent_div">
          <div className="text-on-image-history">
            <Heading id="history_heading" title="HISTORY" />
          </div>
        </div>

        <div className="ag-timeline-block">
          <section className="ag-section">
            <div className="ag-format-container" ref={timelineRef}>
              <div className="js-timeline ag-timeline">
                <div className="timeline-list">
                  {HistoryData.map((element, index) => (
                    <div
                      className="timeline-item"
                      key={index}
                      data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                    >
                      <div
                        className="main-content content-block"
                        data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                        data-aos-delay="200"
                      >
                        <div className="timeline-header">
                          <h3 className="timeline-heading">{element.heading}</h3>
                          <div className="timeline-year">FootPrints'{element.year}</div>
                        </div>
                        <div className="timeline-content">{element.description}</div>
                      </div>
                      <div
                        className="image-block"
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        data-aos-delay="400"
                      >
                        <img src={element.image} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <Sponsors />
        <Footer />
      </section>
    </>
  );
}

export default HistoryPage;
