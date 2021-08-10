import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import { TEDxEventInfo, TEDEventInfo, BVCOEInfo } from '../../data/about.data';

import TEDxLogoImage from '../../assets/about-section/tedx-logo.jpg';
import TEDLogoImage from '../../assets/about-section/ted-logo.jpg';
import BVCOEImage from '../../assets/about-section/bvcoe.png';

import './About.styles.scss';

const SelectedTabImage = ({ tab }) => {
  switch (tab) {
    case 'TEDx':
      return <img src={TEDxLogoImage} alt='TEDx logo' />;

    case 'TED':
      return <img src={TEDLogoImage} alt='TED logo' />;

    case 'BVCOE':
      return <img src={BVCOEImage} alt='BVCOE' />;

    default:
      return null;
  }
};

const SelectedTabContent = ({ tab }) => {
  switch (tab) {
    case 'TEDx':
      return <TEDxEventInfo />;

    case 'TED':
      return <TEDEventInfo />;

    case 'BVCOE':
      return <BVCOEInfo />;

    default:
      return null;
  }
};

const About = () => {
  const [currentTab, setCurrentTab] = useState('TEDx');

  return (
    <section id='about' className='section section-about'>
      <Fade bottom delay={100}>
        <h1 className='section-heading'>About</h1>
      </Fade>

      <div className='section-content'>
        <div className='tabs-container'>
          <button
            className={currentTab === 'TEDx' ? 'selected' : ''}
            onClick={() => setCurrentTab('TEDx')}
          >
            <h4>TEDx</h4>
          </button>
          <button
            className={currentTab === 'TED' ? 'selected' : ''}
            onClick={() => setCurrentTab('TED')}
          >
            <h4>TED</h4>
          </button>
          <button
            className={currentTab === 'BVCOE' ? 'selected' : ''}
            onClick={() => setCurrentTab('BVCOE')}
          >
            <h4>BVCOE</h4>
          </button>
        </div>

        <div className='image-container'>
          <Zoom delay={200}>
            <SelectedTabImage tab={currentTab} />
          </Zoom>
        </div>

        <div className='info'>
          <Fade bottom delay={150}>
            <SelectedTabContent tab={currentTab} />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
