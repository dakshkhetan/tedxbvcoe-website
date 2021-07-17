import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

// import { speakers } from '../../data/speakers.data';
import { events } from '../../data/events.data';
import { eventsList } from '../../data/events.data';

import Speaker from './Speaker.component';

import { ReactComponent as Illustration } from '../../assets/illustrations/event.svg';

import './Speakers.styles.scss';

const Speakers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isListOpen, toggleList] = useState(false);

  const mapFreeEvents = (events) =>
    events.map((event) => (
      <>
        {event.registrationFee === 'FREE' && (
          <Speaker key={event.code} event={event} />
        )}
      </>
    ));

  const mapPaidEvents = (events) =>
    events.map((event) => (
      <>
        {event.registrationFee !== 'FREE' && (
          <Speaker key={event.code} event={event} />
        )}
      </>
    ));

  const displayAllFreeEvents = (events) => {
    return (
      <>
        {mapFreeEvents(events.anon)}
        {mapFreeEvents(events.enactus)}
        {mapFreeEvents(events.acm)}
        {mapFreeEvents(events.das)}
        {mapFreeEvents(events.edc)}
        {mapFreeEvents(events.aura)}
        {mapFreeEvents(events.isa)}
        {mapFreeEvents(events.aagaaz)}
        {mapFreeEvents(events.bvpcsi)}
      </>
    );
  };

  const displayAllPaidEvents = (events) => {
    return (
      <>
        {mapPaidEvents(events.anon)}
        {mapPaidEvents(events.enactus)}
        {mapPaidEvents(events.das)}
        {mapPaidEvents(events.acm)}
        {mapPaidEvents(events.edc)}
        {mapPaidEvents(events.aura)}
        {mapPaidEvents(events.isa)}
        {mapPaidEvents(events.aagaaz)}
        {mapPaidEvents(events.bvpcsi)}
      </>
    );
  };

  return (
    <>
      <section id='speakers-page' className='section section-speakers-page'>
        <Fade bottom>
          <h1 className='section-heading'>Speakers</h1>
        </Fade>

        <div className='section-content'>
          <Fade bottom delay={150}>
            <div
              className={`events-list ${isListOpen ? 'open' : ''}`}
              onClick={() => toggleList(!isListOpen)}
            >
              <div className='title'>List of Events</div>
              <div className='list'>
                <ul>
                  {eventsList.map((event, i) => (
                    <li key={i}>
                      <AnchorLink offset='620' href={`#${event.code}`}>
                        {event.name}
                      </AnchorLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={100}>
            <h2 className='section-sub-heading'>
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                className='icon arrow-down'
              />
              Free Events
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                className='icon arrow-down'
              />
            </h2>
          </Fade>

          {displayAllFreeEvents(events)}

          <Fade bottom delay={100}>
            <h2 className='section-sub-heading'>
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                className='icon arrow-down'
              />
              Paid Events
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                className='icon arrow-down'
              />
            </h2>
          </Fade>

          {displayAllPaidEvents(events)}
        </div>

        <div className='illustration-container'>
          <div className='illustration'>
            <Illustration />
          </div>
        </div>
      </section>
    </>
  );
};

export default Speakers;
