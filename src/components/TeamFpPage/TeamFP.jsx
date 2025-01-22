import React, {useEffect} from 'react'
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Heading from "../Common/Headings/Heading";
import "./TeamFP.css";
import {
  coordinatorsData,
  ccData,
  orgcData,
  headsData,
} from "../../Data/TeamFP";
import { useMousePosition } from '../../CustomHooks/useMousePosition';
import  teamVid from "../../assets/Anim/ourteam.png"
import VideoBox from '../EventPage/VideoBox';

function TeamFP() {
  
  useEffect(() => {
  
    document.title="Team FP | FootPrints'25"

  }, [])

  const position = useMousePosition();

  return (
    <>
      {/* <div className="cover">
      <Heading id="heading_ourteam" title="Our Team" />
      </div> */}
      <VideoBox url={teamVid} />
      {/* <section id="achivements" className="acheivements section-bg container"> */}
      <div className="container">
        <div className="coordinatesDiv">
          <div className="team_header_img" id="parent_div">
            <Heading id="heading_sponsors_page" title="COORDINATORS" />
          </div>
          <div className="memcardsss row">
            {coordinatorsData.map((element) => {
              return (
                <div
                  key={element.id}
                  className="col-sm-6 col-md-4 col-lg-3 outest"
                >
                <div className="cardss">
                  
                  <div className="img-cardss">
                    
                    <img
                      src={element.imgSrc}
                       alt={element.name}
                       className="img-round"
                 />
                 <div className="gradient-overlay"></div>
                 
                  
                  
                 <div className="Mname">
                       <p>{element.name}</p>
                  </div>

                    <div className="icons">
                      <a href={element.linked} target="_blank">
                             <i className=" fa fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                    

                  </div>
                </div>
                  
                </div>

              );
            })}
          </div>
        </div>
        <div className="headsDiv">
          <div className="team_header_img" id="parent_div">
            <Heading id="heading_sponsors_page" title="HEADS" />
          </div>
          <div className="memcardsss row">
            {headsData.map((element) => {
              return (
                <div
                  key={element.id}
                  className="col-sm-6 col-md-5 col-lg-3 outest"
                >
                <div className="cardss">
                  
                  <div className="img-cardss">
                    
                    <img
                      src={element.imgSrc}
                       alt={element.name}
                       className="img-round"
                 />
                 <div className="gradient-overlay"></div>
                 
                  
                  
                 <div className="Mname">
                       <p>{element.name}</p>
                  </div>

                    <div className="icons">
                      <a href={element.linked} target="_blank">
                             <i className=" fa fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                    

                  </div>
                </div>
                  
                </div>

              );
            })}
          </div>
        </div>
        <div className="ccDiv">
          <div className="team_header_img" id="parent_div">
            <Heading id="heading_sponsors_page" title="CORE COMMITTEE" />
          </div>
          <div className="memcardsss row">
            {ccData.map((element) => {
              return (
                <div
                  key={element.id}
                  className="col-sm-6 col-md-5 col-lg-3 outest"
                >
                <div className="cardss">
                  
                  <div className="img-cardss">
                    
                    <img
                      src={element.imgSrc}
                       alt={element.name}
                       className="img-round"
                 />
                 <div className="gradient-overlay"></div>
                 
                  
                  
                 <div className="Mname">
                       <p>{element.name}</p>
                  </div>

                    <div className="icons">
                      <a href={element.linked} target="_blank">
                             <i className=" fa fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                    

                  </div>
                </div>
                  
                </div>

              );
            })}
          </div>
        </div>

        <div className="orgcDiv">
          <div className="team_header_img" id="parent_div">
            <Heading id="heading_sponsors_page" title="ORGANIZING TEAM" />
          </div>
          <div className="memcardsss row">
            {orgcData.map((element) => {
              return (
                <div
                  key={element.id}
                  className="col-sm-6 col-md-5 col-lg-3 outest"
                >
                <div className="cardss">
                  
                  <div className="img-cardss">
                    
                    <img
                      src={element.imgSrc}
                       alt={element.name}
                       className="img-round"
                 />
                 <div className="gradient-overlay"></div>
                 
                  
                  
                 <div className="Mname">
                       <p>{element.name}</p>
                  </div>

                    {/* <div className="icons">
                      <a href={element.linked} target="_blank">
                             <i className=" fa fa-brands fa-linkedin"></i>
                      </a>
                    </div> */}
                    

                  </div>
                </div>
                </div>

              );
            })}
          </div>
        </div>
      </div>
      <div 
        className="alt-bg" 
        style={{'--xPos':`${position.x}px`,'--yPos':`${position.y}px`}}
      />
      {/* </section> */}
      <Sponsors />
      <Footer />
    </>
  );
}

export default TeamFP;
