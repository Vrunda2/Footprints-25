import React, { useEffect } from "react";
import { AboutGuestData, CurrentGuestData } from "../../Data/Kaleido";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Kaleido.css";
import Heading from "../Common/Headings/Heading";

function Kaleido() {
  // console.log(screenSize);

  useEffect(() => {
    document.title = "Guest Lecture | FootPrints'24";
  }, []);

  return (
    <>
      <section id="Kaleido">
      <div className="video_main">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          width="100%"
        >
          <source src={'https://res.cloudinary.com/dwevqwmg7/video/upload/v1705597503/vdos/xjts8oh5ts0ux8mzpqcu.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

        <div className="container">
          {/* <p id="reveling-heading"> REVEALING SOON! </p> */}
          {/* <h1 className='kaleido_heading'>GUEST LECTURES</h1> */}
          <Heading className="kaleido_heading" id="glheading" title="GUEST LECTURES" />
          {CurrentGuestData.map((element) => {
            if (element.id % 2 == 0) {
              return (
                <div key={element.id}>
                  <div className="guest_lec content">
                    <div
                      className="about_guest about_guest_para1"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      // data-aos-delay="100"
                      data-aos-offset="400"
                      data-aos-easing="ease-in-sine"
                    >
                      <div className="guest_heading">
                        <h3 className="guest_name">
                          {element.name} <br /> {/* <i className="fa fa-light fa-user-tie"></i>{" "} */}
                          {element.details}
                        </h3>
                      </div>
                      {/* <div className="para1"> */}
                      <p className="text-without-icon"> {element.content}</p>
                      <p className="clock-icon">
                        <i className="fa fa-light fa-calendar"></i> &nbsp;
                        {element.date}
                      </p>
                      <p className="location-icon">
                        <i className="fa fa-light fa-map-marker"></i> &nbsp;
                        {element.venue}
                      </p>
                      {/* </div> */}
                    </div>

                    <div className="guest_img guest_img_style" data-aos="GuestAnimRight">
                      <img src={element.imgSrc} className="Kaleido-img" alt={element.name} />
                    </div>

                    <div className="about_guest about_guest_para2">
                      <div className="guest_heading">
                        <h3 className="guest_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>

                      <p className="text-without-icon"> {element.content}</p>
                      <p className="clock-icon">
                        <i className="fa fa-light fa-calendar"></i> &nbsp;
                        {element.date}
                      </p>
                      <p className="location-icon">
                        <i className="fa fa-light fa-map-marker"></i> &nbsp;
                        {element.venue}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={element.id}>
                <div className="guest_lec">
                  <div className="guest_img" data-aos="GuestAnimLeft">
                    <img src={element.imgSrc} className="Kaleido-img" alt={element.name} />
                  </div>

                  <div
                    className="about_guest para1"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    // data-aos-delay="100"
                    data-aos-offset="400"
                    data-aos-easing="ease-in-sine"
                  >
                    <div className="guest_heading">
                      <h3 className="guest_name">
                        {element.name} <br /> {/* <i className="fa fa-light fa-user-tie"></i>{" "} */}
                        {element.details}
                      </h3>
                    </div>
                    <p className="text-without-icon">{element.content}</p>
                    <p className="clock-icon">
                      <i className="fa fa-light fa-calendar"></i> &nbsp;
                      {element.date}
                    </p>
                    <p className="location-icon">
                      <i className="fa fa-light fa-map-marker"></i> &nbsp;
                      {element.venue}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          
          <Heading className="kaleido_heading" id="glheading" title="PREVIOUS GUEST LECTURES" />
          {AboutGuestData.map((element) => {
            if (element.id % 2 == 0) {
              return (
                <div key={element.id}>
                  <div className="guest_lec content">
                    <div
                      className="about_guest about_guest_para1"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      // data-aos-delay="100"
                      data-aos-offset="400"
                      data-aos-easing="ease-in-sine"
                    >
                      <div className="guest_heading">
                        <h3 className="guest_name">
                          {element.name} <br /> {/* <i className="fa fa-light fa-user-tie"></i>{" "} */}
                          {element.details}
                        </h3>
                      </div>
                      {/* <div className="para1"> */}
                      <p className="text-without-icon"> {element.content}</p>
                      {/* <p className="clock-icon">{element.date}</p> */}
                      {/* <p className="location-icon">{element.venue}</p> */}
                      {/* </div> */}
                    </div>
                    <div className="guest_img guest_img_style" data-aos="fade-right" data-aos-duration="1800" data-aos-delay="100">
                      <img src={element.imgSrc} className="Kaleido-img" alt={element.name} />
                    </div>

                    <div className="about_guest about_guest_para2">
                      <div className="guest_heading">
                        <h3 className="guest_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>

                      <p className="text-without-icon"> {element.content}</p>
                      {/* <p className="clock-icon">{element.date}</p> */}
                      {/* <p className="location-icon">{element.venue}</p> */}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={element.id}>
                <div className="guest_lec">
                  <div className="guest_img" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="100">
                    <img src={element.imgSrc} className="Kaleido-img" alt={element.name} />
                  </div>

                  <div
                    className="about_guest para1"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    // data-aos-delay="100"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                  >
                    <div className="guest_heading">
                      <h3 className="guest_name">
                        {element.name} <br /> {/* <i className="fa fa-light fa-user-tie"></i>{" "} */}
                        {element.details}
                      </h3>
                    </div>
                    <p className="text-without-icon">{element.content}</p>
                    {/* <p className="clock-icon">{element.date}</p> */}
                    {/* <p className="location-icon">{element.venue}</p> */}
                  </div>
                </div>
              </div>
            );
          })}

          {/* <h1 className='kaleido_heading'>PREVIOUS GUEST LECTURES</h1> */}

          {/* <Heading  className='kaleido_heading'id="pglheading"  title="PREVIOUS GUEST LECTURES" />


                    {PrevGuestData.map((element) => {
                        if (element.id % 2 == 0) {

                            return <div key={element.id} >

                                <div className="guest_lec">
                                    <div className='about_guest about_guest_para1'>
                                        <div className='guest_heading'>
                                            <h3 className='guest_name'>{element.name} <br /> <i className="fa fa-light fa-user-tie"></i> {element.details}</h3>
                                        </div>
                                        <p> {element.content}</p>
                                        <p>{element.date}</p>
                                        <p>{element.venue}</p>
                                    </div>

                                    <div className="guest_img guest_img_style">
                                        <img src={element.imgSrc} className="Kaleido-img" alt={element.name} />
                                    </div>

                                    <div className='about_guest about_guest_para2'>
                                        <div className='guest_heading'>
                                            <h3 className='guest_name'>{element.name} 
                                            <br /> 
                                            <i className="fa fa-light fa-user-tie"></i > 
                                            {element.details}</h3>
                                        </div>
                                        <p> {element.content}</p>
                                        <p>{element.date}</p>
                                        <p>{element.venue}</p>
                                    </div>
                                </div>

                            </div>

                        }

                        return <div key={element.id} >

                            <div className="guest_lec">
                                <div className="guest_img">
                                    <img src={element.imgSrc} className="Kaleido-img" alt={element.name} />
                                </div>

                                <div className='about_guest'>
                                    <div className='guest_heading'>
                                        <h3 className='guest_name prev_guest_name'>{element.name} <br />   <i className="fa fa-light fa-user-tie"></i>{element.details}</h3>
                                    </div>
                                    <p>{element.content}</p>
                                    <p>{element.date}</p>
                                    <p>{element.venue}</p>
                                </div>
                            </div>

                        </div>
                    })} */}
        </div>
        {/* </div> */}
      </section>
      <Sponsors />
      
      <Footer />
    </>
  );
}

export default Kaleido;
