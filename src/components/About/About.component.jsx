import { useState } from 'react';
import ProgressiveImage from 'react-progressive-image';
import Fade from 'react-reveal/Fade';

import {
  TEDxEventInfo,
  TEDEventInfo,
  TEDxBVCOEInfo
} from '../../data/about.data';

import placeholderImage from '../../assets/about-section/blur-placeholder.jpg';
import TEDxLogoImage from '../../assets/about-section/tedx-logo.jpg';
import TEDLogoImage from '../../assets/about-section/ted-logo.jpg';
import TEDxBVCOELogoImage from '../../assets/about-section/tedxbvcoe-logo.jpg';

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
              width='300'
              height='170'
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
              width='300'
              height='170'
            />
          )}
        </ProgressiveImage>
      );

    case 'TEDxBVCOE':
      return (
        <ProgressiveImage
          src={TEDxBVCOELogoImage}
          placeholder={placeholderImage}
        >
          {(src, loading) => (
            <img
              className={`${loading ? 'loading' : ''}`}
              src={src}
              alt='BVCOE'
              width='300'
              height='170'
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

    case 'TEDxBVCOE':
      return <TEDxBVCOEInfo />;

    default:
      return null;
  }
};

const About = () => {
  const [currentTab, setCurrentTab] = useState('TEDxBVCOE');

  return (
    <section id='about' className='section section-about'>
      <Fade bottom delay={100}>
        <h1 className='section-heading'>About</h1>
      </Fade>

      <div className='section-content'>
        <Fade delay={150}>
          <div className='tabs-container'>
            <button
              className={currentTab === 'TED' ? 'selected' : ''}
              onClick={() => setCurrentTab('TED')}
            >
              <h2>TED</h2>
            </button>
            <button
              className={currentTab === 'TEDx' ? 'selected' : ''}
              onClick={() => setCurrentTab('TEDx')}
            >
              <h2>TEDx</h2>
            </button>
            <button
              className={currentTab === 'TEDxBVCOE' ? 'selected' : ''}
              onClick={() => setCurrentTab('TEDxBVCOE')}
            >
              <h2>TEDxBVCOE</h2>
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
