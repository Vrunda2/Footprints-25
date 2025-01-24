import React from "react";
// import sponsorData from '../../../Data/Sponsors'
import newSponsorData from "../../../Data/newSponorData";
import Heading from "../Headings/Heading";
import "./Sponsors.css";

function Sponsors() {

  const newSponsorData = [


    /* Note :  Id's Are random igonre it */

    /* Main 3 Sponsor - Full width*/

    {
        id: 1.1,
        imgSrc: `../../src/assets/SponsorLogos/MatrixWeb.jpg`,
        alt: `TITLE SPONSOR`,
        href: `https://www.matrixcomsec.com/`,
        type: "TITLE SPONSOR"
    },

    {
        id: 1.2,
        imgSrc: `../../src/assets/SponsorLogos/VinroxWeb.jpg`,
        alt: `CO-SPONSOR`,
        href: `https://vinrox.com/`,
        type: "CO-SPONSOR"
    },


    {
        id: 1.3,
        imgSrc: `../../src/assets/SponsorLogos/KYBWeb.jpg`,
        alt: `ASSOCIATE SPONSOR`,
        href: `https://conmatindia.com/`,
        type: "ASSOCIATE SPONSOR"
    },

    /* Other Sponsor - Grid */

    {
        id: 3,
        imgSrc: `../../src/assets/SponsorLogos/DeepakWeb.jpg`,
        alt: `KALEIDOSCOPE SPONSOR`,
        href: `https://www.godeepak.com/`
    },

    {
        id: 4,
        imgSrc: `../../src/assets/SponsorLogos/AxtelWeb.jpg`,
        alt: `MACHEANEMA SPONSOR`,
        href: `https://www.axtelindia.com/`
    },
    {
        id: 4.5,
        imgSrc: `../../src/assets/SponsorLogos/SEEWeb.jpg`,
        alt: `HYDREX & BALLISTA SPONSOR`,
        href: ``
    },
    {
        id: 5,
        imgSrc: `../../src/assets/SponsorLogos/BoomWeb.jpg`,
        alt: `QUEST SPONSOR`,
        href: ``
    },
    {
        id: 6,
        imgSrc: `../../src/assets/SponsorLogos/JumpWeb.jpg`,
        alt: `QUEST SPONSOR`,
        href: ``
    },
    {
        id: 7,
        imgSrc: `../../src/assets/SponsorLogos/IMSWeb.jpg`,
        alt: `CAT PARTNER`,
        href: `https://imsindia.com/center/vadodara/`
    },
    {
        id: 8,
        imgSrc: `../../src/assets/SponsorLogos/AcumenWeb.jpg`,
        alt: `GATE PARTNER`,
        href: `https://acumenhr.in/`
    },
    {
        id: 9,
        imgSrc: `../../src/assets/SponsorLogos/AsgardWeb.jpg`,
        alt: `SOCIAL MEDIA PARTNER`,
        href: ``
    },
    {
        id: 10,
        imgSrc: `../../src/assets/SponsorLogos/YBWeb.jpg`,
        alt: `SOCIAL MEDIA PARTNER`,
        href: ``
    },

    {
        id: 11,
        imgSrc: `../../src/assets/SponsorLogos/VmWeb.jpg`,
        alt: `SOCIAL MEDIA PARTNER`,
        href: ``
    },


    {
        id: 12,
        imgSrc: `../../src/assets/SponsorLogos/YellowWeb.jpg`,
        alt: `YOUTH PARTNER`,
        href: ``
    },
    {
        id: 13,
        imgSrc: `../../src/assets/SponsorLogos/EliteWeb.jpg`,
        alt: `TICKETING PARTNER`,
        href: ``
    },
    {
        id: 14,
        imgSrc: `../../src/assets/SponsorLogos/JoyaWeb.jpg`,
        alt: `JEWELLERY PARTNER`,
        href: ``
    },
    {
        id: 15,
        imgSrc: `../../src/assets/SponsorLogos/JayWeb.jpg`,
        alt: `PRINTING PARTNER`,
        href: ``
    },
    {
        id: 16,
        imgSrc: `../../src/assets/SponsorLogos/OmkarWeb.jpg`,
        alt: `PAINT PARTNER`,
        href: ``
    },
];

// export default newSponsorData;


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
