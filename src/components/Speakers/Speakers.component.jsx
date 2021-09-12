import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReactGA from 'react-ga';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

// import { speakersCollage } from '../../data/speakers.data';

import speakersCollage from '../../assets/speakers/collage.png';

import './Speakers.styles.scss';

const Speakers = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const history = useHistory();

  const onClickHandler = () => {
    ReactGA.event({
      category: 'Button Clicks',
      action: "'Checkout-Speakers' Button Click",
      label: "User clicked on 'Checkout All Speakers' button"
    });
    history.push('/speakers');
  };

  return (
    <section id='speakers' className='section section-speakers'>
      <Fade bottom>
        <h1 className='section-heading'>Speakers</h1>
      </Fade>

      <div className='section-content'>
        {/* <Fade delay={200}>
          <div className='container'>
            {speakersCollage.map((speaker) => (
              <img
                key={speaker.position}
                className={`img-${speaker.id}`}
                src={speaker.image}
                alt='speaker pic'
              />
            ))}
          </div>
        </Fade> */}

        <Fade delay={200}>
          <div className='collage-container'>
            <img src={speakersCollage} alt='speakers collage' />
          </div>
        </Fade>

        <Fade bottom delay={350}>
          <div className='btn-container'>
            <span className='btn-link' onClick={onClickHandler}>
              Checkout all speakers
            </span>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Speakers;
