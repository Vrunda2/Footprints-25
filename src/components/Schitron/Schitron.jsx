import React, {useEffect} from 'react'
import "./Schitron.css";
import Heading from "../Common/Headings/Heading";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";

const Schitron = () => {

  
  useEffect(() => {
  
    document.title="Schitron | FootPrints'24"

  }, [])
  

  return (
    <>
      <div className="scitron">
        <div className="schitron_header_img" id="parent_div">
          <div className="text-on-image-schitron">
            <Heading id="heading_schitron" title="SCHITRON" />
          </div>
        </div>
        <div className="scitron-des-text">
        <p className="scitron-des">
        The future belongs to young people with an education and the imagination to create.
To encourage young brains and introduce school students to the fascinating world of robotics with the basics of mechatronics and EV, teach the fundamentals of programming and the usage of Arduino and IR sensors. FootPrints conducted the hands-on session of building the line following bots using the kits provided by Robowala and the support of Robotics and EV Club. Schitron became the bang on event, which made young enthusiasts stand out with a new creative personality and the knowledge of technical skills.
          </p>
          <br />
          <p className="scitron-des">
            Since its inception in 2001, FootPrints has been rendering a
            platform to technical minds all over the country. From paper
            presentations to mind tickling workshops, FootPrints has got it all
            for engineering students all over. Since last few years, as an
            addition to our knowledge-providing saga, we have been organising
            "School Events", aiming to enrich India's young talent with
            technical brilliance.
          </p>
          <br />
          <p className="scitron-des">
            FootPrintsX7 witnessed a workshop on Hands-on Learning and Robotics
            based on World-renowned LEGO Education System. There was also a
            webinar of Shravan Kumaran and Sanjay Kumaran, who are known as
            youngest Mobile Application Programmers in India.
          </p>
          <br />
          <p className="scitron-des">
            In 2018 also, "School Events" succeeded in widening the horizons of
            students in all technical respects. It not only challenged the
            technical aspects of young school minds but also enhanced them. The
            School Students had a bountiful of scope to think in their own way
            and make a difference. FootPrintsX8 witnessed a workshop of making
            Robocars by Innovative brain academy IBA-robocar in which the
            participants learnt the basics of making a Robocar. We had another
            workshop by Vansh hobby center- glass painting where the students
            learnt basics of glass painting.
          </p>
        </div>
        <div className="robo-outside">
          <Heading title="Monochrome Workshop" />
          <div className="robo">
            <p className="scitron-des">
            Under the ‘Schitron' banner , FootPrints’24 organised a workshop for the students of The Mother’s school which focused on the development of autonomous line follower bots for higher secondary students. The participants were exposed to a comprehensive introduction to mechatronics and electric vehicles (EV). The instructional content encompassed fundamental programming skills and adept utilization of Arduino and infrared (IR) sensors. A cohort of approximately 60 students actively engaged in the workshop, constructing their autonomous bots. All requisite materials were provided by us. The workshop achieved commendable success in instilling a zealous curiosity among novices, inspiring them to delve into the rudiments of mechatronics and fostering a heightened interest in the technical realm.
            </p>
          </div>
        </div>
        <div className="robo-outside">
          <Heading title="Home Automation Workshop" />
          <div className="robo">
            <p className="scitron-des">
              The future of any nation is determined by the wisdom of the young
              minds it possesses. Foot PrintsX10 was delighted to carry out a
              'Home Automation Workshop' for school students under the segment
              'SCHITRON' - providing valuable insight for their growth.
            </p>
          </div>
        </div>
        <div className="robo-outside">
          <Heading title="Lorem Ipsum" />
          <div className="robo">
            <p className="scitron-des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Id iure, similique obcaecati non ea facere delectus ratione culpa?
              Quis, praesentium in sunt ex mollitia tempore commodi perspiciatis nesciunt voluptatibus at?
            </p>
          </div>
        </div>
        <div className="glass-outside">
          <Heading
            title="Self
              Defence Camp"
          />
          <div className="glass">
            <p className="scitron-des">
              There's Only One Basic Principle Of Self-Defense. You Must Apply
              The Most Effective Weapon, As Soon As Possible, To The Most
              Vulnerable Target. At FootPrintsX10 we gave a chance to the school
              students to work on their defence skills by organising a 'Self
              Defence Camp' under the segment 'SCHITRON'
            </p>
          </div>
        </div>
        <div className="img-container">
          <div className="img-wrap" data-aos="fade-up" data-aos-duration="1500">
            <div className="item item-1"></div>
            <div className="item item-2"></div>
            <div className="item item-3"></div>
            <div className="item item-4"></div>
            {/* <div className="item item-5"></div> */}
          </div>
        </div>
      </div>
      <Sponsors />
      <Footer />
    </>
  );
};

export default Schitron;
