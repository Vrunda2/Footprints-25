import React, {useEffect} from 'react'
// import sponsorData from '../../Data/Sponsors'
import newSponsorData from '../../Data/newSponorData'
import Footer from '../Common/Footer/Footer';
import Heading from '../Common/Headings/Heading';
import VideoBox from '../EventPage/VideoBox';
import './SponsorPage.css';
import { useMousePosition } from '../../CustomHooks/useMousePosition';
import sponsaVid from "../../assets/Anim/sponsor.png"

function Sponsor() {

    
  useEffect(() => {
  
    document.title="Sponsors | FootPrints'25"

  }, []);
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



  const position = useMousePosition();

    return (
      <>
        <section id="id_sponsorsPage" className="section_page">
         <VideoBox url={sponsaVid} />
          <div className="py-2">
            <div className="container">
              {/* Main Sponsor */}

              <div id="titleSponsorGrid" className="row">
                <div className="col-12 col-sm-12 col-md-12">
                  {newSponsorData.slice(0, 3).map((element) => {
                    return (
                      <div key={element.id}>
                        <Heading
                          id="heading_main_Sponsor"
                          title={element.type}
                        />

                        <div className="card">
                          <div
                            id="id_div_titleSponsor"
                            className="card-body div_img_sponsors"
                          >
                            <div style={{ padding: "1rem" }}>
                              <a target="_blank" href={element.href}>
                                <img src={element.imgSrc} alt={element.alt} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/*  Sponsor Grid */}
              
              <Heading id="heading_partner_grid" title="OUR SPONSORS" />

              <div
                id="sponsorsGrid"
                className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3"
              >
                {newSponsorData.slice(3, 20).map((element) => {
                  return (
                    <div className="col" key={element.id}>
                      <div className="card">
                        <div className="card-body div_img_sponsors">
                          <div>
                            <a target="_blank" href={element.href}>
                              <img src={element.imgSrc} alt={element.alt} />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='sponsorName'>
                          <a target='_blank' href={element.href}><h5><center>{element.alt}</center></h5></a>
                        </div>
                    </div>
                  );
                })}
              </div>

              {/*  Partner Grid */}

              {/* <Heading id="heading_partner_grid" title="OUR PARTNERES" />

              <div
                id="PartnersGrid"
                className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3"
              >
                {newSponsorData.slice(20).map((element) => {
                  return (
                    <div className="col" key={element.id}>
                      <div className="card">
                        <div className="card-body div_img_sponsors">
                          <div>
                            <a target="_blank" href={element.href}>
                              <img src={element.imgSrc} alt={element.alt} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
        </section>
        <div 
        className="alt-bg" 
        style={{'--xPos':`${position.x}px`,'--yPos':`${position.y}px`}}
        />

        <Footer />
      </>
    );
}

export default Sponsor;