import { useState } from 'react';
import ProgressiveImage from 'react-progressive-image';
import Fade from 'react-reveal/Fade';

import { TEDxEventInfo, TEDEventInfo, BVCOEInfo } from '../../data/about.data';

import placeholderImage from '../../assets/about-section/blur-placeholder.jpg';
import TEDxLogoImage from '../../assets/about-section/tedx-logo.jpg';
import TEDLogoImage from '../../assets/about-section/ted-logo.jpg';
import BVCOEImage from '../../assets/about-section/bvcoe.png';

import './About.styles.scss';

const SelectedTabImage = ({ tab }) => {
  switch (tab) {
    case 'TEDx':
      return (
        <ProgressiveImage src={TEDxLogoImage} placeholder={placeholderImage}>
          {(src, loading) => (
            <img
              className={`${loading ? 'loading' : ''}`}
              src={src}
              alt='TEDx logo'
            />
          )}
        </ProgressiveImage>
      );

    case 'TED':
      return (
        <ProgressiveImage src={TEDLogoImage} placeholder={placeholderImage}>
          {(src, loading) => (
            <img
              className={`${loading ? 'loading' : ''}`}
              src={src}
              alt='TED logo'
            />
          )}
        </ProgressiveImage>
      );

    case 'BVCOE':
      return (
        <ProgressiveImage src={BVCOEImage} placeholder={placeholderImage}>
          {(src, loading) => (
            <img
              className={`${loading ? 'loading' : ''}`}
              src={src}
              alt='BVCOE'
            />
          )}
        </ProgressiveImage>
      );

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
        <Fade delay={150}>
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
        </Fade>

        <div className='image-container'>
          <Fade delay={200}>
            <SelectedTabImage tab={currentTab} />
          </Fade>
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
