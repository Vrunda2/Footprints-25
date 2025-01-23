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

  //Coordinators
const coordinatorsData = [
  {
    id: 1,
    imgSrc: `../src/assets/Team/Core/Akshit.jpg`,
    name: "Akshit Patel",
    linked: `https://www.linkedin.com/in/akshit-patel-a54643177`,
  },
  {
    id: 2,
    imgSrc: `../src/assets/Team/Core/Pulin.jpg`,
    name: "Pulin Makwana",
    linked: `https://www.linkedin.com/in/pulin-makwana?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
  },
  {
    id: 3,
    imgSrc: `../src/assets/Team/Core/Raj.jpg`,
    name: "Raj Lad",
    linked: `https://www.linkedin.com/in/raj-lad-33066b237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
  },
  
  {
    id: 4,
    imgSrc: `../src/assets/Team/Core/Shubham.jpg`,
    name: "Shubham Prajapati",
    linked: ``,
  },
  
];

//Heads
const headsData = [
  {
    id: 1,
    imgSrc: `../src/assets/Team/Core/Dhaval.jpg`,
    name: "Dhaval Saxena",
    linked: `https://www.linkedin.com/in/dhaval-saxena-207187259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
  },
  {
    id: 2,
    imgSrc: `../src/assets/Team/Core/Joy.jpg`,
    name: "Joy Patel",
    linked: `https://www.linkedin.com/in/joy-patel-b2320b1a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
  },
  
];

//Core commitee
const ccData = [
  {
    id: 1,
    imgSrc: `../src/assets/Team/Core/Ayesha.jpg`,
    name: "Ayesha Patel",
    linked: `http://www.linkedin.com/in/ayeshapatel07`,
  },
  {
    id: 2,
    imgSrc: `../src/assets/Team/Core/Digvijay.jpg`,
    name: "Digvijay Shekhawat",
    linked: ``,
  },
  {
    id: 3,
    imgSrc: `../src/assets/Team/Core/Heer.jpg`,
    name: "Heer Mistry",
    linked: `https://www.linkedin.com/in/heer-mistry-816b89292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app`,
  },
  {
    id: 4,
    imgSrc: `../src/assets/Team/Core/Krunal.jpg`,
    name: "Krunal Vankar",
    linked: `https://www.linkedin.com/in/krunal-vankar-764198253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
  },
  {
    id: 5,
    imgSrc: `../src/assets/Team/Core/Meghana.jpg`,
    name: "Meghana Vasava",
    linked: `https://www.linkedin.com/in/meghana-vasava-17242a261/`,
  },
  {
    id: 6,
    imgSrc: `../src/assets/Team/Core/Meher.jpg`,
    name: "Meher Thadani",
    linked: ``,
  },
  {
    id: 7,
    imgSrc: `../src/assets/Team/Core/Nachiket.jpg`,
    name: "Nachiket Karambelkar",
    linked: `https://www.linkedin.com/in/nachiket-karambelkar-976566259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
  },
  {
    id: 8,
    imgSrc: `../src/assets/Team/Missing.jpg`,
    name: "Pavan Khemani",
    linked: ``,
  },
  {
    id: 9,
    imgSrc: `../src/assets/Team/Missing.jpg`,
    name: "Sanket Agrawal",
    linked: ``,
  },
  {
    id: 10,
    imgSrc: `../src/assets/Team/Core/Satchit.jpg`,
    name: "Satchit Bhatt",
    linked: `https://www.linkedin.com/in/satchit-bhatt-9933a1253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
  },
  {
    id: 11,
    imgSrc: `../src/assets/Team/Core/Sumit.jpg`,
    name: "Sumit Vankar",
    linked: ``,
  },
  {
    id: 12,
    imgSrc: `../src/assets/Team/Core/Vishwa.jpg`,
    name: "Vishwa Prajapati",
    linked: ``,
  },
  {
    id: 13,
    imgSrc: `../src/assets/Team/Core/Vrunda.jpg`,
    name: "Vrunda Radadiya",
    linked: `https://www.linkedin.com/in/vrunda-radadiya-8a1a43257/`,
  },
  {
    id: 14,
    imgSrc: `../src/assets/Team/Core/Yana.jpg`,
    name: "Yana Velani",
    linked: ``,
  },
];

//Organizing Commitee
const orgcData = [
  {
    id: 1,
    imgSrc: `../src/assets/Team/OT/Aayushi.jpg`,
    name: "Aayushi Pandey",
  },
  {
    id: 2,
    imgSrc: `../src/assets/Team/OT/Advaita.jpg`,
    name: "Advaita Tandel",
  },
  {
    id: 3,
    imgSrc: `../src/assets/Team/OT/Amrutesh.jpg`,
    name: "Amrutesh Sharma",
  },
  {
    id: 4,
    imgSrc: `../src/assets/Team/OT/Ansh.jpg`,
    name: "Ansh Dhake",
  },
  {
    id: 5,
    imgSrc: `../src/assets/Team/OT/Aryan.jpg`,
    name: "Aryan Dangariya",
  },
  {
    id: 6,
    imgSrc: `../src/assets/Team/OT/Atik.jpg`,
    name: "Atik Chavda",
  },
  {
    id: 7,
    imgSrc: `../src/assets/Team/OT/Ayush.jpg`,
    name: "Ayush Alsika",
  },
  // {
  //   id: 8,
  //   imgSrc: `../src/assets/Team/Missing.jpg`,
  //   name: "Darshit Shah",
  // },
  {
    id: 9,
    imgSrc: `../src/assets/Team/OT/Dev.jpg`,
    name: "Dev Sanchla",
  },
  {
    id: 10,
    imgSrc: `../src/assets/Team/OT/Devesh.jpg`,
    name: "Devesh Agrawal",
  },
  {
    id: 11,
    imgSrc: `../src/assets/Team/OT/DhruvG.jpg`,
    name: "Dhruv Ghosiya",
  },
  {
    id: 11.5,
    imgSrc: `../src/assets/Team/OT/DhruvS.jpg`,
    name: "Dhruv Sharma",
  },
  {
    id: 12,
    imgSrc: `../src/assets/Team/OT/DhruvT.jpg`,
    name: "Dhruv Tapre",
  },
  // {
  //   id: 13,
  //   imgSrc: `../src/assets/Team/Missing.jpg`,
  //   name: "Dhruv Vankar",
  // },
  {
    id: 14,
    imgSrc: `../src/assets/Team/OT/DhruvVy.jpg`,
    name: "Dhruv Vyas",
  },
  {
    id: 15,
    imgSrc: `../src/assets/Team/OT/Dhun.jpg`,
    name: "Dhun Sharma",
  },
  // {
  //   id: 16,
  //   imgSrc: `../src/assets/Team/OT/Dipen.jpg`,
  //   name: "Dipen Bhaliya",
  // },
  {
    id: 17,
    imgSrc: `../src/assets/Team/OT/Dirgh.jpg`,
    name: "Dirgh Jani",
  },
  {
    id: 18,
    imgSrc: `../src/assets/Team/OT/Diya.jpg`,
    name: "Diya Katara",
  },
  {
    id: 19,
    imgSrc: `../src/assets/Team/OT/Forum.jpg`,
    name: "Forum Vaghela",
  },
  {
    id: 20,
    imgSrc: `../src/assets/Team/OT/HetS.jpg`,
    name: "Het Shah",
  },
  {
    id: 21,
    imgSrc: `../src/assets/Team/OT/Hetvi.jpg`,
    name: "Hetvi Jajal",
  },
  {
    id: 22,
    imgSrc: `../src/assets/Team/OT/Isha.jpg`,
    name: "Isha Singh",
  },
  {
    id: 23,
    imgSrc: `../src/assets/Team/OT/Kavya.jpg`,
    name: "Kavya Shirke",
  },
  {
    id: 24,
    imgSrc: `../src/assets/Team/OT/Krisha.jpg`,
    name: "Krisha Gandhi",
  },
  // {
  //   id: 25,
  //   imgSrc: `../src/assets/Team/Missing.jpg`,
  //   name: "Krishna Agrawal",
  // },
  {
    id: 26,
    imgSrc: `../src/assets/Team/OT/Lavya.jpg`,
    name: "Lavya Padhiyar",
  },
  {
    id: 27,
    imgSrc: `../src/assets/Team/OT/Madhav.jpg`,
    name: "Madhav Thakkar",
  },
  {
    id: 28,
    imgSrc: `../src/assets/Team/OT/Manthan.jpg`,
    name: "Manthan Sathwara",
  },
  {
    id: 29,
    imgSrc: `../src/assets/Team/OT/Meerat.jpg`,
    name: "Meerat Dave",
  },
  // {
  //   id: 30,
  //   imgSrc: `../src/assets/Team/OT/Mehang.jpg`,
  //   name: "Mehang Solanki",
  // },
  {
    id: 31,
    imgSrc: `../src/assets/Team/OT/Mittal.jpg`,
    name: "Mittal Pawar",
  },
  {
    id: 32,
    imgSrc: `../src/assets/Team/OT/MSahal.jpg`,
    name: "Mohammad Sahal Jethra",
  },
  {
    id: 33,
    imgSrc: `../src/assets/Team/Missing.jpg`,
    name: "Mokshesh Shah",
  },
  {
    id: 34,
    imgSrc: `../src/assets/Team/OT/Niramay.jpg`,
    name: "Niramay Patel",
  },
  {
    id: 35,
    imgSrc: `../src/assets/Team/OT/Nishi.jpg`,
    name: "Nishi Modi",
  },
  {
    id: 36,
    imgSrc: `../src/assets/Team/OT/Pearl.jpg`,
    name: "Pearl Sharma",
  },
  {
    id: 37,
    imgSrc: `../src/assets/Team/OT/Prachi.jpg`,
    name: "Prachi Patel",
  },
  {
    id: 38,
    imgSrc: `../src/assets/Team/OT/Pratik.jpg`,
    name: "Pratik Ramani",
  },
  {
    id: 39,
    imgSrc: `../src/assets/Team/OT/Priyanshu.jpg`,
    name: "Priyanshu Chauhan",
  },
  {
    id: 40,
    imgSrc: `../src/assets/Team/Missing.jpg`,
    name: "Rajal Mandalia",
  },
  {
    id: 41,
    imgSrc: `../src/assets/Team/OT/Rishi.jpg`,
    name: "Rishi Shah",
  },
  {
    id: 42,
    imgSrc: `../src/assets/Team/OT/Sakshi.jpg`,
    name: "Sakshi Patel",
  },
  {
    id: 43,
    imgSrc: `../src/assets/Team/OT/Shiv.jpg`,
    name: "Shiv Patel",
  },
  {
    id: 44,
    imgSrc: `../src/assets/Team/OT/Shubham.jpg`,
    name: "Shubham Mahyavanshi",
  },
  {
    id: 45,
    imgSrc: `../src/assets/Team/OT/Siddhi.jpg`,
    name: "Siddhi Jani",
  },
  {
    id: 46,
    imgSrc: `../src/assets/Team/OT/Suhani.jpg`,
    name: "Suhani Sharma",
  },
  {
    id: 47,
    imgSrc: `../src/assets/Team/Missing.jpg`,
    name: "Sujal Kumar",
  },
  {
    id: 48,
    imgSrc: `../src/assets/Team/OT/Vanshika.jpg`,
    name: "Vanshika Mathur",
  },
  {
    id: 49,
    imgSrc: `../src/assets/Team/OT/Vedangi.jpg`,
    name: "Vedangi Prajapati",
  },
  {
    id: 50,
    imgSrc: `../src/assets/Team/OT/Vinay.jpg`,
    name: "Vinay Thakur",
  },
  {
    id: 51,
    imgSrc: `../src/assets/Team/OT/Viraj.jpg`,
    name: "Viraj Kapadia",
  },
  {
    id: 52,
    imgSrc: `../src/assets/Team/Missing.jpg`,
    name: "Vraj Shah",
  },
  {
    id: 53,
    imgSrc: `../src/assets/Team/OT/Yash.jpg`,
    name: "Yash Parekh",
  },
  {
    id: 54,
    imgSrc: `../src/assets/Team/OT/Yashvi.jpg`,
    name: "Yashvi Shah",
  },
  {
    id: 55,
    imgSrc: `../src/assets/Team/OT/Zaahid.jpg`,
    name: "Zaahid Vohra",
  },
  // {
  //   id: 56,
  //   imgSrc: `https://res.cloudinary.com/djgzic4pc/image/upload/v1673877958/Vishwa_Prajapati_kpjshe.jpg`,
  //   name: "Vishwa Prajapati",
  // },
  // {
  //   id: 57,
  //   imgSrc: `https://res.cloudinary.com/djgzic4pc/image/upload/v1673877959/Vrunda_Radadiya_audhqm.jpg`,
  //   name: "Vrunda Radadiya",
  // },
];


// export { coordinatorsData, headsData, ccData, orgcData };


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
