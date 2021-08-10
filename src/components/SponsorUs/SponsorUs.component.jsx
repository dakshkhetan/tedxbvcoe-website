import { useEffect } from 'react';
// import ReactGA from 'react-ga';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import Reason from './Reason.component';

import { sponsorship } from '../../data/sponsorship.data';

import './SponsorUs.styles.scss';

const SponsorUs = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const onClickHandler = () => {
    // ReactGA.event({
    //   category: 'Button Clicks',
    //   action: "'Apply for Sponsorship' Button Click",
    //   label: "User clicked on 'Apply for Sponsorship' button"
    // });
    // window.open('https://bit.ly/tedx-speaker-form', '_blank');
  };

  return (
    <section id='sponsor-us' className='section section-sponsor-us'>
      <Fade bottom>
        <h1 className='section-heading'>Reasons to partner with Us</h1>
      </Fade>

      <div className='section-content'>
        <div className='sponsorship-reason-container'>
          <Fade bottom delay={150}>
            {sponsorship.map((reason) => (
              <Reason key={reason.key} reason={reason} />
            ))}
          </Fade>
        </div>

        <Fade bottom delay={350}>
          <div className='btn-container'>
            <span className='btn-link' onClick={onClickHandler}>
              Apply now
            </span>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default SponsorUs;
