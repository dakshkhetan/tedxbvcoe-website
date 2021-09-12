import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

import themeVideoClip from '../../assets/hero/theme-video-clip.mp4';
import videoPosterDesktop from '../../assets/hero/hero-section-video-poster.jpg';

import './Hero.styles.scss';

const Hero = () => {
  return (
    <section id='home' className='section section-hero'>
      <Fade>
        <div className='logo-container'>
          <video
            className='logo-desktop'
            src={themeVideoClip}
            poster={videoPosterDesktop}
            autoPlay
            loop
            muted
            playsInline
          />

          <video
            className='logo-mobile'
            src={themeVideoClip}
            poster={videoPosterDesktop}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className='content'>
          <div className='child date-container'>
            <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
            <h2 className='date'>
              23<sup>rd</sup> <span className='ampersand'>&</span> 24
              <sup>th</sup>
            </h2>
            <h2 className='month'>September, 2021</h2>
          </div>

          <div className='child time-container'>
            <FontAwesomeIcon icon={faClock} className='icon' />
            <h2 className='time'>11:00am</h2>
            <h2 className='time'>onwards</h2>
          </div>

          <div className='child venue-container'>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
            {/* <h2 className='venue'>Venue</h2> */}
            <h2 className='venue'>Online</h2>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
