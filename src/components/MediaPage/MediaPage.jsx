import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './MediaPage.css';
import VideoBox from '../EventPage/VideoBox';
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import { useMousePosition } from '../../CustomHooks/useMousePosition';
import m1 from "../../assets/images/media/m1.jpg";
import m2 from "../../assets/images/media/m2.jpg";
import m3 from "../../assets/images/media/m33.jpg";
import m4 from "../../assets/images/media/m4.jpg";
import media5 from "../../assets/images/media/media11.jpg";

import medVid from "../../assets/Anim/media.png";

function MediaPage() {
  useEffect(() => {
    document.title = "Media | FootPrints'25";
    AOS.init({ duration: 1000 });
  }, []);

  const position = useMousePosition();

  return (
    <>
      <div className="headingOffset">
        <VideoBox url={medVid} />
      </div>
      <div className="media-container">
        {[m1, m2, m3, m4, media5].map((src, index) => (
          <img
            key={index}
            data-aos="fade-up"
            className="media"
            src={src}
            alt={`media-${index}`}
          />
        ))}
      </div>
      <div
        className="alt-bg"
        style={{ '--xPos': `${position.x}px`, '--yPos': `${position.y}px` }}
      />
      <Sponsors />
      <Footer />
    </>
  );
}

export default MediaPage;
