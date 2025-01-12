import React, {useEffect} from 'react'
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Heading from "../Common/Headings/Heading";
import "./Webteam.css";
import WebteamData from "../../Data/Webteam";
import { useMousePosition } from '../../CustomHooks/useMousePosition';

function WebTeam() {

  useEffect(() => {
  
    document.title="Website Team | FootPrints'25"

  }, [])

  const position = useMousePosition();

  return (
    <>
      <div className="webteam_header_img" id="parent_div">
        <div className="text-on-image-webteam">
          <Heading id="heading_ourteam" title="WEB TEAM" />
        </div>
      </div>
      <div className="container">
        <div className="coordinatesDiv">
          <div className="memcardsss row my-5">
            {WebteamData.map((element) => {
              return (
                // Original
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

              // First try sahpe
                // <div className="cardsss cardsss--two ">
                //   <img
                //     src={element.imgSrc}
                //     alt={element.name}
                //     className="img-responsive"
                //   />
                //   <span className="cardsss--two__rect"></span>
                //   <span className="cardsss--two__tri"></span>
                //   <p>{element.name}</p>
                //   <ul className="cardsss__list">
                //     <li>
                //       <a href={element.linked} target="_blank">
                //       <i className="fab fa-linkedin-in"></i>
                //       </a>
                //     </li>
                //   </ul>
                // </div>
            
                // <div
                //    key={element.id}
                //    className=" col-sm-6 col-md-5 col-lg-3 my-2"
                //  >
                //    <div className="cardss">
                //    <p className="memName">{element.name}</p>

                //      <img
                //        src={element.imgSrc}
                //        alt={element.name}
                //        className="memImg"
                //      />
                //    <ul>
                //        <li>
                //          <a href={element.linked} target="_blank">
                //            <i className="fa-brands fa-linkedin"></i>
                //          </a>
                //        </li>
                //      </ul>
                //    </div>
                //  </div>


                // <div
                //   key={element.id}
                //   className="col-sm-6 col-md-5 col-lg-3 outest"
                // >
                //   <div className="outer">
                //     <div className="pic">
                //     <img
                //       src={element.imgSrc}
                //       alt={element.name}
                //       className="img-round"
                //     />
                //     </div>
                //     <div className="line m-4"></div>
                //     <div className="Mname">
                //       <p>{element.name}</p>
                //     </div>
                //     <div className="icons">
                //     <a href={element.linked} target="_blank">
                //             <i className="fa-brands fa-linkedin"></i>
                //           </a>
                //     </div>
                    
                    
                    
                //   </div>
                // </div>


                //suggestion try
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
      </div>
      <div 
        className="alt-bg" 
        style={{'--xPos':`${position.x}px`,'--yPos':`${position.y}px`}}
      />
      <Sponsors />
      <Footer />
    </>
  );
}

export default WebTeam;









// import React, {useEffect} from 'react'
// import Sponsors from "../Common/SponsorSlide/Sponsors";
// import Footer from "../Common/Footer/Footer";
// import Heading from "../Common/Headings/Heading";
// import "./Webteam.css";
// import WebteamData from "../../Data/Webteam";

// function WebTeam() {

//   useEffect(() => {
  
//     document.title="Website Team | FootPrints'23"

//   }, [])

//   return (
//     <>
//       {/* <div className="cover">
//         <Heading id="heading_ourteam" title="Web Team" />
//       </div> */}
//       <div className="webteam_header_img" id="parent_div">
//         <div className="text-on-image-webteam">
//           <Heading id="heading_ourteam" title="WEB TEAM" />
//         </div>
//       </div>
//       {/* <section id="achivements" className="acheivements section-bg container"> */}
//       <div className="container">
//         <div className="coordinatesDiv">
//           <div className="memcardsss row my-5">
//             {WebteamData.map((element) => {
//               return (
//                 <div
//                   key={element.id}
//                   className="memBlock col-sm-6 col-md-5 col-lg-3 profile"
//                   data-aos="flip-left"
//                   data-aos-delay="100"
//                   data-aos-duration="1200"
//                 >
//                   <div className="img-box">
//                     <img
//                       src={element.imgSrc}
//                       alt={element.name}
//                       className="memImg"
//                     />
//                     <ul>
//                       <li>
//                         <a href={element.linked} target="_blank">
//                           <i className="fa-brands fa-linkedin"></i>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                   <p className="memName">{element.name}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       {/* </section> */}
//       <Sponsors />
//       <Footer />
//     </>
//   );
// }

// export default WebTeam;


