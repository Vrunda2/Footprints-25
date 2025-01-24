import React from "react";
// import sponsorData from '../../../Data/Sponsors'
import newSponsorData from "../../../Data/newSponorData";
import Heading from "../Headings/Heading";
import "./Sponsors.css";

function Sponsors() {
  $(document).ready(function () {
    $(".Sponsors_swiper_Rappers").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      arrows: false,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 3000,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 567,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 556,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 468,
          settings: {
            centerMode: false,
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  return (
    <section className="sponsors container" id="sponsors">
      <Heading id="heading_sponsors_slide" title="OUR SPONSORS" />

      <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events mySwiper Parent_Footer">
        <div
          className="swiper-wrapper container Sponsors_swiper_Rappers"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {newSponsorData.map((element) => {
            return (
              <div key={element.id + 500} className="swiper-slide sponsor-div">
                <a target="_blank" href={element.href}>
                  <img src={element.imgSrc} alt={element.alt} />
                  <div className="sponsor-title">{element.alt}</div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
