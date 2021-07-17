import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import Person from '../Person/Person.component';

import { TeamData } from '../../data/team.data';

import { ReactComponent as Illustration } from '../../assets/illustrations/team.svg';

import './Team.styles.scss';

const Team = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  
  return (
    <section id='team' className='section section-team'>
      <Fade bottom>
        <h1 className='section-heading'>Meet The Team</h1>
        <div className='section-content'>
          <div className='members'>
            <Fade bottom delay={150}>
              {TeamData.members.map((member) => (
                <Person key={member.key} member={member} />
              ))}
            </Fade>
          </div>
          <div className='image-container'>
            <div className='illustration'>
              <Illustration />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Team;
