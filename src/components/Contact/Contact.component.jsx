import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import { ReactComponent as Image } from '../../assets/illustrations/contact.svg';

import './Contact.styles.scss';

const Contact = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <React.Fragment>
      <section id='contact' className='section section-contact'>
        <Fade bottom>
          <h1 className='section-heading'>Contact</h1>
        </Fade>

        <div className='section-content'>
          <div className='info-container'>
            <div className='info'>
              <Fade bottom delay={300}>
                <p className='text'>For any query, contact: </p>
              </Fade>
              <Fade bottom delay={400}>
                <p className='text text-2'>
                  <span className='underline'>Akshat Jain</span>
                  <br />
                  <span className='underline'>
                    <a href='tel:+918470034433'>+91-8470034433</a>
                  </span>
                </p>
              </Fade>

              <Fade bottom delay={500}>
                <div className='mail-btn'>
                  <a href='mailto:encorebvp@gmail.com'>Write To Us</a>
                </div>
              </Fade>
            </div>
          </div>

          <Fade delay={100}>
            <div className='image-container'>
              <div className='illustration'>
                <Image />
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
