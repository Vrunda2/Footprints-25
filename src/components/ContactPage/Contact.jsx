import React,{useEffect} from 'react'
import { ContactData, AboutData, ContactInfoData } from '../../Data/Contact'
import Heading from "../Common/Headings/Heading";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import './Contact.css'
import { useMousePosition } from '../../CustomHooks/useMousePosition';



function Contact() {

  useEffect(() => {
  
    document.title="Contact us | FootPrints'25"

  }, [])

  const position = useMousePosition();

  return (
    <>
      <div id="contact">
        {/* <div className='header_img'> */}
        {/* <img src={img1} alt="image" /> */}
        {/* Here add cloudinary link */}
        {/* </div> */}
        <div className="contact_header_img" id="parent_div">
          <div className="text-on-image-contact">
            <Heading id="heading_contact_us" title="CONTACT US" />
          </div>
        </div>
        <div className="container">
          <Heading id="heading_contact" title="Heads" />
          <i className="fa-regular fa-puzzle"></i>

          <div
            id="contact"
            className="heads_section row row-cols-1 row-cols-md-2"
          >
            {ContactData.map((element) => {
              return (
                <div className="col heads_info" key={element.id}>
                  <div className="headpics">
                    <div className="hoaho">
                      <img src={element.imgSrc} alt="image" className="img" />
                      <p className="name">{element.name}</p>
                      <p className="p-details" id="designation">
                        {element.details},
                      </p>
                      <p className="p-details" id="designation">
                        {" "}
                        {element.fp}
                      </p>
                      {/* <p className='p-details'>{element.fp}</p> */}

                      {/* <p className='p-details'>{element.contact}</p> */}
                      <div className="headsinfo">
                        {/* <p className="conatctHead">
                          {" "}
                          <i className="fa fa-phone"></i>{" "}
                          <a
                            className="p-details footer_P_hover"
                            href={`tel:${element.contact.slice(4)}`}
                          >
                            {element.contact}
                          </a>
                        </p> */}

                        {/* <p className='p-details'>{element.mail}</p> */}

                        <p className="conatctHead">
                          {" "}
                          <i className="fa fa-envelope"></i>{" "}
                          <a
                            className="p-details footer_P_hover"
                            href={`mailto:${element.mail}`}
                          >
                            {element.mail}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="about_section">
            <Heading id="heading_contact" title="About US" />
            {AboutData.map((element) => {
              return (
                <div className="grid-about" key={element.id}>
                  <div>
                    <p className="about-info">{element.para1} </p>
                    <p className="about-info">{element.para2} </p>
                  </div>
                </div>
              );
            })}

            {ContactInfoData.map((element) => {
              return (
                <div className="grid-about" key={element.id}>
                  <div className="grid-items about-info">
                    <div className="contact-details contact">
                      <div className="contact-info">
                        <div className="phone-info">
                          {/* <h6 className='extra-info-title phone-icon'>phone</h6> */}
                          {/* <p className='extra-info-text'>{element.phone}</p> */}

                          <p className="conatctHead extra-info-title">
                            {" "}
                            <i className="fa fa-phone"></i> <span>PHONE</span>{" "}
                          </p>
                          <a
                            className="p-details footer_P_hover"
                            href={`tel:${element.phone.slice(4)}`}
                          >
                            {element.phone}
                          </a>
                        </div>

                        <div className="mailinfo">
                          {/* <h6 className='extra-info-title email-icon'>email</h6>
                        <p className='extra-info-text'>{element.mail}</p> */}

                          <p className="conatctHead extra-info-title">
                            {" "}
                            <i className="fa fa-envelope"></i>{" "}
                            <span>EMAIL</span>{" "}
                          </p>
                          <a
                            className="p-details footer_P_hover"
                            href={`mailto:${element.mail}`}
                          >
                            {element.mail}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="contact-details tb-logo">
                      <img
                        className="tbLogo"
                        src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705692235/fp%20logo/ls3fe1c5q47ew1umyyem.gif"
                        alt="#Think Beyond"
                        height="250px"
                        width="300px"
                      />
                    </div>

                    <div className="contact-details grid-address">
                      <h6 className="extra-info-title">address</h6>
                      <p className="extra-info-text">{element.details}</p>
                      <p className="extra-info-text">{element.extra_details}</p>
                      <p className="extra-info-text">{element.address}</p>
                    </div>

                    <div className="contact-details tb-logo1">
                      <img
                        className="tbLogo"
                        src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705692235/fp%20logo/ls3fe1c5q47ew1umyyem.gif"
                        alt="# Think Beyond"
                        height="250px"
                        width="300px"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="address-details">
            <div className="contact-details address">
              <h6 className="extra-info-title address-icon">address</h6>
              <p className="extra-info-text">Training and Placement Cell,</p>
              <p className="extra-info-text">
                Faculty of Technology and Engineering,
              </p>
              <p className="extra-info-text">Kalabhavan, Vadodara.</p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.458023182152!2d73.19385551495466!3d22.298511185324458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f65bc2a7e5%3A0x2082411428b284bf!2sFaculty%20of%20technology%20and%20Engineering%2C%20Maharaja%20Sayajirao%20University%20of%20Baroda!5e0!3m2!1sen!2sin!4v1671908928432!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
              ></iframe>
            </div>
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

export default Contact
