import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import placeholder from '../../assets/about-section/placeholder.png';

import './AboutBVCOE.styles.scss';

const AboutBVCOE = () => (
  <section id='about' className='section section-about'>
    <Fade bottom delay={100}>
      <h1 className='section-heading'>About BVCOE</h1>
    </Fade>
    <div className='section-content'>
      <div className='info'>
        <Fade bottom delay={150}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Fade>
      </div>
      <div className='image-container'>
        <Zoom delay={200}>
          <img src={placeholder} alt='' />
        </Zoom>
      </div>
    </div>
  </section>
);

export default AboutBVCOE;
