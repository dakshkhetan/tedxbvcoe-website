import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import './SpeakerForm.styles.scss';

const SpeakerForm = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const onClickHandler = () => {
    ReactGA.event({
      category: 'Button Clicks',
      action: "'Speaker-Interest-Form' Button Click",
      label: "User clicked on 'Speaker Interest Form' button"
    });
    window.open('https://bit.ly/tedx-speaker-form', '_blank');
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

        <p className='text'>
          Join us here at TEDxBVCOE to get an opportunity for betterment.
        </p>

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
