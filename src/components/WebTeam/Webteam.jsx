import React, { useEffect } from 'react';
import './WebTeam.css';
import ayeshaImage from '../../assets/Team/Core/Ayesha.jpg';
import vrundaImage from '../../assets/Team/Core/Vrunda.jpg';
import meghanaImage from '../../assets/Team/Core/Meghana.jpg';
import satchitImage from '../../assets/Team/Core/Satchit.jpg';
import shubhImage from '../../assets/Team/Web/Shubh.jpg';
import mannImage from '../../assets/Team/Web/Mann.jpg';
import meghImage from '../../assets/Team/Web/Megh.jpg';
import madhavImage from '../../assets/Team/OT/Madhav.jpg';
import zaahidImage from '../../assets/Team/OT/Zaahid.jpg';
import devImage from '../../assets/Team/OT/Dev.jpg';
import pearlImage from '../../assets/Team/OT/Pearl.jpg'
import { useMousePosition } from '../../CustomHooks/useMousePosition';
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import VideoBox from "../EventPage/VideoBox";
import webVid from "../../assets/Anim/webteam.png"

const WebTeam = () => {
  useEffect(() => {
    
      document.title="Web Team | FootPrints'25"
  
    }, [])

  const position = useMousePosition();

  const teamMembers = [
    {
      name: 'Ayesha Patel',
      image: ayeshaImage,
      social: {
        linkedin: 'http://www.linkedin.com/in/ayeshapatel07',
        github: 'https://github.com/ayesha1209'
      }
    },
    {
      name: 'Meghana Vasava',
      image: meghanaImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/meghana-vasava-17242a261/',
        github: 'https://github.com/meghanavasava'
      }
    },
    {
      name: 'Satchit Bhatt',
      image: satchitImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/satchit-bhatt-9933a1253',
        github: 'https://github.com/Satchit2'
      }
    },
    {
      name: 'Vrunda Radadiya',
      image: vrundaImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/vrunda-radadiya-8a1a43257/',
        github: 'https://github.com/Vrunda2'
      }
    },
    {
      name: 'Madhav Thakkar',
      image: madhavImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/madhav-thakkar-119084251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        github: 'https://github.com/MadhavAT16'
      }
    },
    {
      name: 'Mann Chopda',
      image: mannImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/man-chopda-63a012278/',
        github: 'https://github.com/mann15'
      }
    },
    {
      name: 'Megh Prajapati',
      image: meghImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/megh-prajapati-ab13a82b3',
        github: 'https://github.com/Meghhhhh'
      }
    },
    {
      name: 'Shubh Doshi',
      image: shubhImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/shubh-doshi-921337256/',
        github: 'https://github.com/shubhdoshi21'
      }
    },
    {
      name: 'Zaahid Vohra',
      image: zaahidImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/zaahid-vohra-17048a203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/zaahidvohra'
      }
    },
    {
      name: 'Dev Sanchla',
      image: devImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/devsanchla',
        github: ''
      }
    },
    {
      name: 'Pearl Sharma',
      image: pearlImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/pearl-sharma-163945220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: ''
      }
    },
  ];

  return (
    <>
      <div className='headingOffset'>
        <VideoBox url={webVid} />
        <div className="web-container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="card-inner">
                  <div className="card-front">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="member-image"
                    />
                    <div className="image-overlay"></div>
                    <div className="cyber-border-effect"></div>
                  </div>
                  
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <div className="social-links">
                      <a 
                        href={member.social.linkedin}
                        className="social-link linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a 
                        href={member.social.github}
                        className="social-link github"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Sponsors />
      <Footer />
      <div 
        className="alt-bg" 
        style={{'--xPos':`${position.x}px`,'--yPos':`${position.y}px`}}
      />
    </>
  );
};

export default WebTeam;