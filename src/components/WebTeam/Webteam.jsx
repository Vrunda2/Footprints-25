import React from 'react';
import './WebTeam.css';
// Import all images
import ayeshaImage from '../../assets/images2/ayesha.jpg';
import vrundaImage from '../../assets/images2/vrunda.jpg';
import meghanaImage from '../../assets/images2/meghana.jpg';
import satchitImage from '../../assets/images2/satchitt.png';
import shubhImage from '../../assets/images2/shubh2.png';
import mannImage from '../../assets/images2/mann.jpg';
import meghImage from '../../assets/images2/megh2.png';

const WebTeam = () => {
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
      name: 'Vrunda Radadiya',
      image: vrundaImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/vrunda-radadiya-8a1a43257/',
        github: 'https://github.com/Vrunda2'
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
      name: 'Shubh Doshi',
      image: shubhImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/shubh-doshi-921337256/',
        github: 'https://github.com/shubhdoshi21'
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
    }
  ];

  return (
    <div className="webteam-container">
     
      
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
  );
};

export default WebTeam;