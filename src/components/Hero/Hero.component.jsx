import ProgressiveImage from 'react-progressive-image';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

import logoMobileCompressed from '../../assets/logo/logo-short-compressed.png';
import logoDesktopCompressed from '../../assets/logo/logo-long-compressed.png';
import logoMobile from '../../assets/logo/tedxbvcoe-logo_short.jpg';
import logoDesktop from '../../assets/logo/tedxbvcoe-logo_long.jpg';

import themeVideoClip from '../../assets/hero/theme-video-clip.mp4';

import './Hero.styles.scss';

const Hero = () => {
  return (
    <section id='home' className='section section-hero'>
      <Fade>
        <div className='logo-container'>
          <ProgressiveImage
            src={logoDesktop}
            placeholder={logoDesktopCompressed}
          >
            {(src) => (
              <>
                {/* <img
                  className='logo-desktop'
                  src={src}
                  alt='TEDxBVCOE logo'
                  width='928'
                  height='240'
                /> */}
                <video
                  className='logo-desktop'
                  src={themeVideoClip}
                  poster={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </>
            )}
          </ProgressiveImage>

          <ProgressiveImage src={logoMobile} placeholder={logoMobileCompressed}>
            {(src) => (
              <>
                {/* <img
                  className='logo-mobile'
                  src={src}
                  alt='TEDxBVCOE logo'
                  width='340'
                  height='285'
                /> */}
                <video
                  className='logo-mobile'
                  src={themeVideoClip}
                  poster={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </>
            )}
          </ProgressiveImage>
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
            <h2 className='time'>10:30am</h2>
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
