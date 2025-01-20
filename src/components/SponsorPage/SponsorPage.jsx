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