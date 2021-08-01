import Fade from 'react-reveal/Fade';

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
      </Fade>
    </section>
  );
};

export default Hero;
