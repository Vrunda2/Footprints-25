import React, { useEffect } from "react";
import AOS from "aos";
import FsrData from "../../Data/Fsr";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Fsr.css";
import Heading from "../Common/Headings/Heading";

function Fsr() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 150,
      once: false,
    });
    document.title = "FSR | FootPrints'24";
  }, []);

  return (
    <>
      <section id="Fsr">
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
                "https://res.cloudinary.com/du1tas6pe/video/upload/v1705679349/vdo/vpwrc3ofzmnvxl4spo4s.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="container">
          <Heading className="fsr_heading" id="glheading" title="FSR DRIVES" />
          
          {FsrData.map((element) => {
            if (element.id % 2 === 0) {
              return (
                <div key={element.id}>
                  <div className="fsr_lec content">
                    <div
                      className="about_fsr about_fsr_para1"
                      /* data-aos="fade-up-right" */
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
                      data-aos="flip-right"
                      data-aos-easing="ease-out-cubic"
                    >
                      <img
                        src={element.imgSrc}
                        className="Fsr-img"
                        alt={element.name}
                      />
                    </div>

                    <div
                      className="about_fsr about_fsr_para2"
                      /* data-aos="fade-up-left" */
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
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                  >
                    <img
                      src={element.imgSrc}
                      className="Fsr-img"
                      alt={element.name}
                    />
                  </div>

                  <div
                    className="about_fsr para1" /* data-aos="fade-up-left" */
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
      <Sponsors />
      
      <Footer />
    </>
  );
}

export default Fsr;
