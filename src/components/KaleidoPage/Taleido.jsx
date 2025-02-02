import React, { useEffect } from "react";
import TaleidoData from "../../Data/Taleido";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Taleido.css";
import Heading from "../Common/Headings/Heading";
import { useMousePosition } from "../../CustomHooks/useMousePosition";
import kaleidoVid from "../../assets/Anim/kaleido.png";
import VideoBox from "../EventPage/VideoBox";

function Taleido() {
  useEffect(() => {
    document.title = "Teleidoscope | FootPrints'25";
  }, []);

  const position = useMousePosition();

  return (
    <>
      <section id="Taleido">
        <div className="headingOffset">
          <VideoBox url={kaleidoVid} />
        </div>
        <div className="container">
          <Heading
            className="taleido_heading"
            id="glheading"
            title="TELEIDOSCOPE"
          />

          {TaleidoData.map((element) => (
            <div key={element.id} className="taleido_lec content">
              <div className="taleido_item">
                <div className="taleido_img" data-aos="fade-up">
                  <img src={element.imgSrc} className="Taleido-img" alt={element.name} />
                </div>
                <div
                  className="about_taleido"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="taleido_heading">
                    <h3 className="taleido_name">
                      {element.name} <br /> {element.details}
                    </h3>
                  </div>
                  <p className="text-without-icon-taleido">{element.content}</p>
                  <a href={element.ytlink} className="yt-link-part" target="_blank">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div
        className="alt-bg"
        style={{ '--xPos': `${position.x}px`, '--yPos': `${position.y}px` }}
      />
      <Sponsors />
      <Footer />
    </>
  );
}

export default Taleido;