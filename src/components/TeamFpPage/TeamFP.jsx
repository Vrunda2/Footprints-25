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
      <div className="team_header_img" id="parent_div">
        <div className="text-on-image-team">
          <Heading id="heading_sponsors_page" title="OUR TEAM" />
        </div>
      </div>
      {/* <section id="achivements" className="acheivements section-bg container"> */}
      <div className="container">
        <div className="coordinatesDiv">
          <div className="heading">Coordinators</div>
          <div className="memcardsss row">
            {coordinatorsData.map((element) => {
              return (
                // <div
                //   key={element.id}
                //   className="memBlock col-sm-6 col-md-5 col-lg-3 profile"
                //   data-aos="zoom-in-up"
                //   data-aos-delay="100"
                //   data-aos-duration="1200"
                // >
                //   <div className="img-box">
                //     <img
                //       src={element.imgSrc}
                //       alt={element.name}
                //       className="memImg"
                //     />
                //     <ul>
                //       <li>
                //         <a href={element.linked} target="_blank">
                //           <i className="fa-brands fa-linkedin"></i>
                //         </a>
                //       </li>
                //     </ul>
                //   </div>
                //   <p className="memName">{element.name}</p>
                // </div>
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
        <div className="headsDiv">
          <div className="heading">Heads</div>
          <div className="memcardsss row">
            {headsData.map((element) => {
              return (
                // <div
                //   key={element.id}
                //   className="memBlock col-sm-6 col-md-5 col-lg-3 profile"
                // >
                //   <div className="img-box">
                //     <img
                //       src={element.imgSrc}
                //       alt={element.name}
                //       className="memImg"
                //     />
                //     <ul>
                //       <li>
                //         <a href={element.linked} target="_blank">
                //           <i className="fa-brands fa-linkedin"></i>
                //         </a>
                //       </li>
                //     </ul>
                //   </div>
                //   <p className="memName">{element.name}</p>
                // </div>
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
          <div className="heading">Core Committee</div>
          <div className="memcardsss row">
            {ccData.map((element) => {
              return (
                // <div
                //   key={element.id}
                //   className="memBlock col-sm-6 col-md-5 col-lg-3 profile"
                // >
                //   <div className="img-box">
                //     <img
                //       src={element.imgSrc}
                //       alt={element.name}
                //       className="memImg"
                //     />
                //     <ul>
                //       <li>
                //         <a href={element.linked} target="_blank">
                //           <i className="fa-brands fa-linkedin"></i>
                //         </a>
                //       </li>
                //     </ul>
                //   </div>
                //   <p className="memName">{element.name}</p>
                // </div>
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
          <div className="heading">Organizing Team</div>
          <div className="memcardsss row">
            {orgcData.map((element) => {
              return (
                // <div
                //   key={element.id}
                //   className="memBlock col-sm-6 col-md-5 col-lg-3 profile"
                // >
                //   <div className="img-box">
                //     <img
                //       src={element.imgSrc}
                //       alt={element.name}
                //       className="memImg"
                //     />
                //   </div>
                //   <p className="memName">{element.name}</p>
                // </div>

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
