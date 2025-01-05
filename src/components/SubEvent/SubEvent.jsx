import React, { useEffect, useState } from "react";
// import Img1 from "../../assets/images/card-2.png";
// import HeadImg from "../../assets/images/Untitled-2.png";
import EventIncharge from "../../Data/EventIncharge";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./SubEvent.css";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useContext } from "react";
import ThemeContext from "../../Context/Theme/ThemeContext";
import Faq from "./Faq";
import Loader from "../Common/Loader/Loader";
import EventButton from "../../Data/EventButton";

import TechHeaderImg from "../../Data/TechHeaderImg";
function SubEvent() {
  const param = useParams();
  const context = useContext(ThemeContext);
  let { BASE_URL } = context;

  const { subevent } = param;
  // console.log("Subevent name :", subevent);

  useEffect(() => {
    document.title = `${
      subevent.slice(0, 1).toUpperCase() + subevent.slice(1)
    } | FootPrints'25`;
  }, []);

  const getSubEvent = async () => {
    const res = await fetch(`${BASE_URL}/api/subevent/${subevent}/`);
    return res.json();
  };

  const { isFetched, isError, isLoading, data } = useQuery(
    "sub-event",
    getSubEvent
  );

  // console.log(param);
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  if (isLoading) {
    return <Loader size={"lg"} />;
  }

  if (isError) {
    return <h1 className="text-center text-warning mt-5">Error!!</h1>;
  }

  if (isFetched) {
    // console.log(param.name);
    return (
      <section id="sub_Event">
        <div className="acc-container">
          <div className="header_img">
            {TechHeaderImg.filter(
              (element) => element.event == param.name.toLocaleLowerCase()
            ).map((eveimage, index) => {
              return (
                <img
                  key={index}
                  src={
                    window.innerWidth > 800
                      ? eveimage.image[1].largesrc
                      : eveimage.image[0].smallsrc
                  }
                  alt="image"
                  id="header_noPadding"
                />
              );
            })}
            <hr />
          </div>
          <div className="center-portion">
            <div
              className="problem"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h3>Problem Statement</h3>
              <p>{data[0].short_desc}</p>
              {EventIncharge.filter(
                (element) => element.subEvent == subevent
              ).map((incharge, index) => {
                if (incharge.videoLink != null) {
                  return (
                    <>
                      <div className="model-btn-part" key={index}>
                        <a
                          href={incharge.videoLink}
                          className="model-btn"
                          target={"_blank"}
                        >
                          Model Video
                        </a>
                      </div>
                    </>
                  );
                }
              })}
            </div>
            <div className="acc-faq">
              <div
                className="event-card"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
              >
                <img src={data[0].event_img} alt="" />
              </div>
              <div className="faq-card">
                <Faq
                  toggleAccordion={toggleAccordion}
                  accordion={accordion}
                  index={0}
                  title={"Event Rules"}
                  data={data[0].rules}
                />
                <Faq
                  toggleAccordion={toggleAccordion}
                  accordion={accordion}
                  index={1}
                  title={"Event Rounds"}
                  data={data[0].rounds_desc}
                />
                <Faq
                  toggleAccordion={toggleAccordion}
                  accordion={accordion}
                  index={2}
                  title={"Participations Fees"}
                  data={data[0].fees}
                />
                <Faq
                  toggleAccordion={toggleAccordion}
                  accordion={accordion}
                  index={3}
                  title={"Team Size"}
                  data={data[0].max_member}
                />
              </div>
            </div>
            <div className="register" id="register-section">
              {EventButton.map((element, index) => {
                if (
                  element.name.toLowerCase() == subevent.toLocaleLowerCase()
                ) {
                  return (
                    <>
                      <button
                        key={index}
                        onClick={() => {
                          element.name != "hackprints"
                            ? (window.location = `https://register.msufp.in/team/${element.uid}/`)
                            : (window.location = `https://msufp.in/hackprints2.0/`);
                        }}
                        className="registerBtn"
                        id="Btn123"
                      >
                        Register
                      </button>
                    </>
                  );
                }
              })}
            </div>

            {/* <--- Event-Incharge-Start ----> */}

            <div className="event-incharge">
              {EventIncharge.filter(
                (element) => element.subEvent == subevent
              ).map((incharge, index) => {
                return (
                  <div key={index}>
                    <h3>Event Incharge</h3>

                    <p>
                      <i className="fa fa-user"></i>&nbsp;
                      {incharge.name}
                    </p>

                    <pre className="infoIncharge">
                      <i className="fa fa-phone"></i>&nbsp;
                      <a
                        className="p-details footer_P_hover"
                        href={`tel:${incharge.phone.slice(4)}`}
                      >
                        {" "}
                        {incharge.phone}{" "}
                      </a>
                    </pre>

                    <pre className="event-mail infoIncharge">
                      <i className="fa fa-envelope"></i> &nbsp;
                      <a
                        className="p-details footer_P_hover"
                        href={`mailto:${incharge.mail}`}
                      >
                        {incharge.mail}
                      </a>
                    </pre>
                  </div>
                );
              })}
            </div>

            {/* <--- Event-Incharge-End ----> */}
          </div>
        </div>

        <Sponsors />
        <Footer />
      </section>
    );
  }
}

export default SubEvent;
