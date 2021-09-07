import { useState, useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade';

import SpeakerModal from '../../components/SpeakerModal/SpeakerModal.component';

import { speakers } from '../../data/speakers.data';

import Speaker from './Speaker.component';

// import { ReactComponent as Illustration } from '../../assets/illustrations/event.svg';

import './Speakers.styles.scss';

const Speakers = () => {
  const [isModalOpen, setModal] = useState(false);
  const selectedSpeaker = useRef(null);

  const handleModalOpen = (speaker) => {
    selectedSpeaker.current = speaker;
    setModal(true);
  };

  const closeModal = () => setModal(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id='speakers-page' className='section section-speakers-page'>
        <Fade bottom>
          <h1 className='section-heading'>Speakers</h1>
        </Fade>

        <SpeakerModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          speaker={selectedSpeaker.current}
        />

        <div className='section-content'>
          {speakers.map((speaker) => (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              triggerModal={handleModalOpen}
            />
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
