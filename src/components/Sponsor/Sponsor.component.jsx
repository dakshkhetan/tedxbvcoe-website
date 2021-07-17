import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { sponsors } from '../../data/sponsors.data';

import './Sponsor.styles.scss';

const Sponsor = ({ match }) => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const index = sponsors.findIndex(
    (partner) => partner.route === match.params.partnerName
  );

  let partner = null;

  if (index === -1) {
    return <Redirect to='/' />;
  } else {
    partner = sponsors[index];
  }

  const scrollWithOffset = (el, offset) => {
    scroll.scrollTo(el.offsetTop - offset);
  };

  return (
    <section id='sponsor' className='section section-sponsor'>
      <div className='back-btn'>
        <span>
          <HashLink
            smooth
            to='/#sponsors'
            scroll={(el) => scrollWithOffset(el, 50)}
          >
            <FontAwesomeIcon icon={faArrowLeft} className='icon' /> Back
          </HashLink>
        </span>
      </div>
      <div className='section-content'>
        <div className='logo'>
          <Fade bottom delay={100}>
            <img src={partner.image} alt='partner' />
          </Fade>
        </div>
        <div className='info'>
          <Fade bottom delay={200}>
            <div className='intro'>
              <p>{partner.description}</p>
            </div>
          </Fade>
          <Fade bottom delay={350}>
            <div className='btn-container'>
              <a
                href={partner.website}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='btn-link'>
                  Checkout Website{' '}
                  <FontAwesomeIcon icon={faArrowRight} className='icon' />
                </span>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
