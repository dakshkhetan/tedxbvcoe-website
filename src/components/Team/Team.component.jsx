import { useEffect } from 'react';
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
      {/* <h1 className='section-heading'>Meet The Team</h1> */}

      <div className='section-content'>
        <Fade bottom>
          <h1 className='section-heading core'>Meet the Core Team</h1>
        </Fade>
        <div className='members'>
          <Fade bottom delay={150}>
            {TeamData.coreTeam.map((member) => (
              <Person key={member.key} member={member} isCore />
            ))}
          </Fade>
        </div>

        <Fade bottom delay={150}>
          <h1 className='section-heading organising'>
            Meet the Organising Team
          </h1>
        </Fade>
        <div className='members'>
          <Fade bottom delay={150}>
            {TeamData.organisingTeam.map((member) => (
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
    </section>
  );
};

export default Team;
