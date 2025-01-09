import React from "react";
import "./Achivements.css";
import Heading from "../../Common/Headings/Heading";
import achivementsData from "../../../Data/Achievements";

function Achivements() {
  return (
    <>
      <section id="achivements" className="acheivements section-bg container">
        <div className="container">
          <Heading id="heading_achivments" title="ACHIEVEMENTS" />

          {/* Cards */}

          <div className="deck row g-5">
            {achivementsData.map((element) => {
              if (element.id % 2 == 0) {
                return (
                  <div
                    key={element.id}
                    className="cardBlock col-xl-6"
                    data-aos="fade-left">
                    <div className="achievements-item row h-100">
                      <div className="img-bg col-4">
                        <img
                          src={element.imgSrc}
                          className="achievements-img"
                          alt={element.alt}
                        />
                      </div>

                      <div className="descrip col-8">
                        {/* <h1 className="descriptopic">{element.topic}</h1> */}

                        <Heading
                          id="achieve-head"
                          className="descriptopic"
                          title={element.topic}
                        />

                        <p id={`mycl${element.id}`} className="content-design">
                          {element.description}
                        </p>

                        {/* button functionality working */}
                        <div className="btnDiv">
                          <button
                            id={`mybtn${element.id}`}
                            onClick={() => {
                              var x, y;
                              x = document.querySelector(`#mycl${element.id}`);
                              y = document.querySelector(`#mybtn${element.id}`);
                              if (x.style.overflow == "visible") {
                                x.style.overflow = "hidden";
                                x.style.height = "6em";
                                y.innerHTML = `<span className="readafter">Read More&nbsp;<i class="fa-regular fa-circle-down"></i></span>`;
                              } else {
                                x.style.overflow = "visible";
                                x.style.height = "auto";
                                y.innerHTML = `Show Less&nbsp;<i class="fa-regular fa-circle-up"></i>`;
                              }
                            }}
                            className="readmorebtn">
                            Read More&nbsp;
                            <i className="fa-regular fa-circle-down"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={element.id}
                    className="cardBlock col-xl-6"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1200"
                  >
                    <div className="achievements-item row h-100">
                      <div className="img-bg col-4">
                        <img
                          src={element.imgSrc}
                          className="achievements-img"
                          alt={element.alt}
                        />
                      </div>

                      <div className="descrip col-8">
                        {/* <h1 className="descriptopic">{element.topic}</h1> */}

                        <Heading
                          id="achieve-head"
                          className="descriptopic"
                          title={element.topic}
                        />

                        <p id={`mycl${element.id}`} className="content-design">
                          {element.description}
                        </p>

                        {/* button functionality working */}
                        <div className="btnDiv">
                          <button
                            id={`mybtn${element.id}`}
                            onClick={() => {
                              var x, y;
                              x = document.querySelector(`#mycl${element.id}`);
                              y = document.querySelector(`#mybtn${element.id}`);
                              if (x.style.overflow == "visible") {
                                x.style.overflow = "hidden";
                                x.style.height = "6em";
                                y.innerHTML = `<span className="readafter">Read More&nbsp;<i class="fa-regular fa-circle-down"></i></span>`;
                              } else {
                                x.style.overflow = "visible";
                                x.style.height = "auto";
                                y.innerHTML = `Show Less&nbsp;<i class="fa-regular fa-circle-up"></i>`;
                              }
                            }}
                            className="readmorebtn">
                            Read More&nbsp;
                            <i className="fa-regular fa-circle-down"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Achivements;