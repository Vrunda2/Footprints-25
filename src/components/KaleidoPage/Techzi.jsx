import React, { useEffect } from "react";
import PrevTechziData from "../../Data/Techzi";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Techzi.css";
import Heading from "../Common/Headings/Heading";

function Techzi() {
  useEffect(() => {
    document.title = "Techzibition | FootPrints'24";
  }, []);

  return (
    <>
      <section id="Techzi">
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
                "https://res.cloudinary.com/dwevqwmg7/video/upload/v1705597501/vdos/cfmja2rurhpbh4xkgyls.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="container">
          <Heading
            className="kaleido_heading"
            id="glheading"
            title="PREVIOUS TECHZIBITIONS"
          />


          {PrevTechziData.map((element) => {
            if (element.id % 2 === 0) {
              return (
                <div key={element.id} className="techzi_lec content">
                  <div
                    className="about_techzi about_techzi_para1"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="400"
                    data-aos-easing="ease-in-sine"
                  >
                    <div className="techzi_heading">
                      <h3 className="techzi_name">
                        {element.name} <br /> {element.details}
                      </h3>
                    </div>
                    <p className="text-without-icon-techzi">
                      {element.content}
                    </p>
                  </div>

                  <div
                    className="techzi_img techzi_img_style"
                    data-aos="GuestAnimRight"
                  >
                    <img
                      src={element.imgSrc}
                      className="Techzi-img"
                      alt={element.name}
                      onError={(e) => {
                        e.target.src = "/assets/fallback-image.jpg";
                      }}
                    />
                  </div>
                </div>
              );
            }

            return (
              <div key={element.id} className="techzi_lec">
                <div className="techzi_img" data-aos="GuestAnimLeft">
                  <img
                    src={element.imgSrc}
                    className="Techzi-img"
                    alt={element.name}
                    onError={(e) => {
                      e.target.src = "/assets/fallback-image.jpg";
                    }}
                  />
                </div>

                <div
                  className="about_techzi para1"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="400"
                  data-aos-easing="ease-in-sine"
                >
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
            );
          })}
        </div>
      </section>
      <Sponsors />
      <Footer />
    </>
  );
}

export default Techzi;
