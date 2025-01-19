import React, {useEffect} from 'react'
import "./MediaPage.css"
import VideoBox from '../EventPage/VideoBox';
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import { useMousePosition } from '../../CustomHooks/useMousePosition';
import medVid from "../../assets/Anim/media.png"

function MediaPage() {

    useEffect(() => {
  
        document.title="Media | FootPrints'25"
    
      }, [])

    const position = useMousePosition();

    return (
      <>
        <div className='headingOffset'>
          <VideoBox url={medVid} />
        </div>
        <div className="media-container">
          {/* <Heading id="heading_media" title="MEADIA COVERAGE"/> */}

          {/* <img className="col-lg-12 col-md-12 col-sm-6 col-xs-12 border-solid" src="src/assets/images/Media/latest.jpeg" /> */}

          <img
            className="media"
            src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705170203/media/jdj1ijpmeh4g9j7ny4rz.png"
          />
          <img
            className="media"
            src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705170188/media/dbndhpwum0hort1u0etk.png"
          />

          {/* <img
            className="col-lg-4 col-md-4 col-sm-12 col-xs-12 border-solid"
            src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705956355/media/eqtqtydsziokxlhtgsuy.png"
          /> */}
      

          <img
            className="media col-lg-12 col-md-12 col-sm-6 col-xs-12 border-solid"
            src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705956355/media/nwsytzxkt7kdhf4ewnyh.png"
          />
          <img
            className="media col-lg-12 col-md-12 col-sm-6 col-xs-12 border-solid"
            src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705956355/media/eqtqtydsziokxlhtgsuy.png"
          />
          <img
            className="media col-lg-12 col-md-12 col-sm-6 col-xs-12 border-solid"
            src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705956355/media/rraxdxyb3bpy4tat3oxa.png"
          />
          <img
            className="media col-lg-12 col-md-12 col-sm-6 col-xs-12 border-solid"
            src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705956356/media/umzbu0l0euojofifz1v5.png"
          />
          <img
            className="media col-lg-12 col-md-12 col-sm-6 col-xs-12 border-solid"
            src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705956356/media/uzloemp5vvze37yqwh4w.png"
          />
          <img
            className="media col-lg-12 col-md-12 col-sm-6 col-xs-12 border-solid"
            src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705956357/media/ri5d6ox56rmtiww5qcjq.png"
          />
          {/* <img
            className="col-md-6 col-sm-6 col-xs-12 border-solid"
            src="https://res.cloudinary.com/du1tas6pe/image/upload/v1705956355/media/rraxdxyb3bpy4tat3oxa.png"
          /> */}
          {/* <img
            className="col-md-5 col-sm-6 col-xs-12 border-solid"
            src="https://www.msufp.in/2019/images/media/m_3(1).jpg"
          /> */}
          {/* <img
            className="col-md-5 col-sm-6 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_2.jpg"
          /> */}
          {/* <img
            className="col-md-7 col-sm-6 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_18.jpg"
          /> */}
          {/* <img
            className="col-md-4 col-sm-6 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_10.jpg"
          />
          <img
            className="col-md-8 col-sm-10 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_13.jpg"
          />
          <img
            className="col-md-12 col-sm-12 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_3.jpg"
          />
          <img
            className="col-md-5 col-sm-5 col-xs-12 border-solid"
            src="https://www.msufp.in/2019/images/media/m_4.jpg"
          />
          <img
            className="col-md-5 col-sm-5 col-xs-12 border-solid"
            src="https://www.msufp.in/2019/images/media/m_9.jpg"
          />

          <img src="https://www.msufp.in/2019/images/media/m_5.png" />

          <br />
          <img
            className="col-md-6 col-sm-6 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_12.jpg"
          />
          <img src="https://www.msufp.in/2019/images/media/m_8.jpg" />

          <br />

          <img
            className="col-md-6 col-sm-6 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_6.jpg"
          />
          <img
            className="col-md-5 col-sm-5 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_7.jpg"
          />
          <img
            className="col-md-12 col-sm-12 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_16.jpg"
          />

          <img
            className="col-md-6 col-sm-6 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_17.jpg"
          />

          <img src="https://www.msufp.in/2019/images/media/m_14.jpg" />
          <img src="https://www.msufp.in/2019/images/media/m_15.jpg" />

          <img
            className="col-md-12 col-sm-12 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_11.jpg"
    /> */}
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

export default MediaPage

