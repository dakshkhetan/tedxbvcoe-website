import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import { speakers } from '../../data/speakers.data';

import Speaker from './Speaker.component';

// import { ReactComponent as Illustration } from '../../assets/illustrations/event.svg';

import './Speakers.styles.scss';

const Speakers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id='speakers-page' className='section section-speakers-page'>
        <Fade bottom>
          <h1 className='section-heading'>Speakers</h1>
        </Fade>

        <div className='section-content'>
          {speakers.map((speaker) => (
            <Speaker key={speaker.id} speaker={speaker} />
          ))}
        </div>

        {/* <div className='illustration-container'>
          <div className='illustration'>
            <Illustration />
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Speakers;
