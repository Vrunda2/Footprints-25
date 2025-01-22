import React, { useContext } from "react";
import ThemeContext from "../../../Context/Theme/ThemeContext";
// import { Link } from 'react-router-dom';
// import Heading from "../Headings/Heading";
import "./Footer.css";

function Footer() {
  const context = useContext(ThemeContext);
  const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOnEmail = async () => {
    let email = document.getElementById("email-textbox").value;
    let SecEmail = document.getElementById("email-textbox");

    if (email.match(email_regex)) {
      await fetch(`${context.BASE_URL}/api/newsletter/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      })
        .then((resp) => {
          return resp.json();
        })
        .then((resp) => {
          console.log(resp);
          alert(resp.message ? resp.message : resp.email);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("E-mail address is not valid.");
    }

    SecEmail.value = "";
  };

  return (
    <>
      <section className="container-fluid" id="footer">
        <footer className="row container-fluid Parent_Footer">
          {/* <!-- NewsLetter : column 1 --> */}

          <div
            className="footer_Item col-sm-6 col-lg-4"
            id="footer_div_newsLetter"
          >
            <header className="header">
              <h2 className="footer_header" id="head_NL">
                NEWS LETTER SIGN-UP
              </h2>
            </header>

            {/* <Heading
              id={"head_NL"}
              title={"NEWS LETTER SIGN-UP"}
              className={"footer_header"}
            /> */}

            <div className="Parent_Footer">
              <p id="newsletter_info">
                By subscribing to our mailing list you will always be updated
                with the latest news from us.
              </p>
            </div>

            <div>
              <div id="footer_form" className="Parent_Footer">
                <div id="div_mail">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    name="email"
                    id="email-textbox"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    id="send"
                    className="footer_btn"
                    onClick={handleOnEmail}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Msu Logo and Social Media Icon : column 2 --> */}

          <div className="footer_Item col-sm-6 col-lg-4" id="footer_div_image">
            <div className="footer_msu_logo">
              <a href="https://www.msubaroda.ac.in/" target="_blank">
                <img
                  id="img_msulogo"
                  src="https://res.cloudinary.com/dnsvjhy0a/image/upload/v1664035485/Sponsors%2722/ChangedNew/msu_logo_iimsu6.png"
                  alt="Faculty of Technology & Engineering"
                />
              </a>
            </div>

            <div className="footer_social_media">
              <ul className="media_icons">
                <li>
                  <a
                    href="https://www.instagram.com/footprints.msu/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram social"></i>
                  </a>
                </li>

                <li>
                  <a href="https://www.facebook.com/msufp/" target="_blank">
                    <i className="fa fa-facebook social"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/user/FootPrintsMSU/featured"
                    target="_blank"
                  >
                    <i className="fa fa-youtube-play social"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/company/msufp/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin social"></i>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/msu_footprints" target="_blank">
                    <i className="fa fa-twitter social"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.threads.net/@footprints.msu"
                    target="_blank"
                  >
                    <i className="fa fa-threads fa-brands social"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Contact , WebTeam : column 3 --> */}

          <div
            className="footer_Item col-sm-12 col-lg-4"
            id="footer_div_contact"
          >
            {/* <header>
                            <div className="div_footer_header">
                                <h3 className="footer_header" id="head_CI">CONTACT INFO</h3>
                            </div>
                        </header> */}

            <header className="header">
              <h2 className="footer_header" id="head_CI">
                CONTACT INFO
              </h2>
            </header>

            {/* <Heading
              id={"head_CI"}
              title={"CONTACT INFO"}
              className={"footer_header"}
            /> */}

            <div className="Parent_Footer_Col3">
              <div className="footer_InDetail location">
                <div>
                  <i className="fa  fa-location-dot contact_icon"></i>
                </div>

                <div>
                  <a
                    className="footer_P_hover"
                    target="_blank"
                    id="address"
                    href="https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsb44XmcOIu4BptFbb_E7xWahVsVGg:1663531057976&q=Training+and+Placement+Cell,+Faculty+of+Technology+and+Engineering,+Kalabhavan,+Vadodara.&rflfq=1&num=10&ved=2ahUKEwiR_aGOkJ_6AhXj8DgGHRJ4CfQQtgN6BAgVEAE#rlfi=hd:;si:2342506311024018623,l,CllUcmFpbmluZyBhbmQgUGxhY2VtZW50IENlbGwsIEZhY3VsdHkgb2YgVGVjaG5vbG9neSBhbmQgRW5naW5lZXJpbmcsIEthbGFiaGF2YW4sIFZhZG9kYXJhLhnjdbZd4u389Eik3P0GWn0QABABEAIQAxAEEAUQBhAHEAgYARgEGAUYBhgHGAgYCRgKIlV0cmFpbmluZyBhbmQgcGxhY2VtZW50IGNlbGwgZmFjdWx0eSBvZiB0ZWNobm9sb2d5IGFuZCBlbmdpbmVlcmluZyBrYWxhYmhhdmFuIHZhZG9kYXJhKgIIApIBCnVuaXZlcnNpdHmaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTTJlUzFsWlVGbkVBRaoBdQoJL20vMDE0amczEAEaHxABIhuy4RsskYRtxdrMw2hJi9sX7xfPudH9EdyGhhUqRSJBdHJhaW5pbmcgYW5kIHBsYWNlbWVudCBjZWxsIGZhY3VsdHkgb2YgdGVjaG5vbG9neSBhbmQgZW5naW5lZXJpbmcoAA;mv:[[22.3910834,73.2008159],[22.290794899999998,73.1418285]]"
                  >
                    Training and Placement Cell, Faculty of Technology and
                    Engineering, Kalabhavan, Vadodara.
                  </a>
                </div>
              </div>

              <div className="footer_InDetail email">
                <div>
                  <i className="fa fa-envelope contact_icon"></i>
                </div>

                <div>
                  <p>
                    {" "}
                    <a
                      id="mail-link-1"
                      className="footer_P_hover"
                      href="mailto:info@msufp.in"
                    >
                      info@msufp.in
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      id="mail-link-2"
                      className="footer_P_hover"
                      href="mailto:contact@msufp.in"
                    >
                      contact@msufp.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="footer_InDetail Phone_div phoneno">
                <div>
                  <i className="fa fa-phone contact_icon"></i>
                </div>

                <div>
                  {/* <span>Vedant Shah : </span>
                                        <span>Khushal Sharma : </span> */}

                  <p>
                    {" "}
                    <a className="footer_P_hover" href="tel:9023312580">
                      +91-8849410379
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
					
					<div id="div_teambtn" className="webteam_btn">
                {/*   <Link to="/webTeamPage">
                      <button className="footer_btn" id="webTeamBtn">
                        WebTeam
                      </button>
                    </Link> */}

                <a href="/webTeamPage">
                  <button className="footer_btn" id="webTeamBtn">
                    WebTeam
                  </button>
                </a>
              </div>	
        </footer>
      </section>
    </>
  );
}

export default Footer;
