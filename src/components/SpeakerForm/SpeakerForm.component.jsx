import React, { useEffect } from 'react';
// import ReactGA from 'react-ga';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import './SpeakerForm.styles.scss';

const SpeakerForm = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const onClickHandler = () => {
    // ReactGA.event({
    //   category: 'Button Clicks',
    //   action: "'Checkout-Events' Button Click",
    //   label: "User clicked on 'Checkout All Events' button"
    // });
    // history.push('/events');
  };

  return (
    <section id='speaker-form' className='section section-speaker-form'>
      {/* <Fade bottom>
        <h1 className='section-heading'>Heading</h1>
      </Fade> */}

      <div className='section-content'>
        <h2>
          Want to become a <br />
          <span>speaker</span> ?
        </h2>

        <Fade bottom delay={350}>
          <div className='btn-container'>
            <span className='btn-link' onClick={onClickHandler}>
              Register here
            </span>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default SpeakerForm;
