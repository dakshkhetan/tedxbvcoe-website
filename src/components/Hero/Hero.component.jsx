import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

import logoMobile from '../../assets/logo/tedxbvcoe-logo_short.png';
import logoDesktop from '../../assets/logo/tedxbvcoe-logo_long.jpeg';

import './Hero.styles.scss';

const Hero = () => {
  return (
    <section id='home' className='section section-hero'>
      <Fade>
        <div className='logo-container'>
          <img className='logo-desktop' src={logoDesktop} alt='logo' />
          <img className='logo-mobile' src={logoMobile} alt='logo' />
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
            <h2 className='time'>From 10:00 AM</h2>
            <h2 className='time'>to 4:00 PM</h2>
          </div>

          <div className='child venue-container'>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
            <h2 className='venue'>Online</h2>
            <h2 className='venue'>Google Meet</h2>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
