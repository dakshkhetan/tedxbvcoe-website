import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import BVCOEImage from '../../assets/about-section/bvcoe.png';

import './AboutBVCOE.styles.scss';

const AboutBVCOE = () => (
  <section id='about' className='section section-about'>
    <Fade bottom delay={100}>
      <h1 className='section-heading'>About BVCOE</h1>
    </Fade>

    <div className='section-content'>
      <div className='image-container'>
        <Zoom delay={200}>
          <img src={BVCOEImage} alt='' />
        </Zoom>
      </div>

      <div className='info'>
        <Fade bottom delay={150}>
          <p>
            Bharati Vidyapeeth's College of Engineering, New Delhi since its
            establishment in 1999, has strived to provide the best engineering
            education, its students, through well-qualified and dedicated
            faculty. The college is affiliated with Guru Gobind Singh
            Indraprastha University (GGSIPU), New Delhi, and is considered one
            of the leading institutes for engineering in the city. Currently,
            BVCOE offers various courses like B Tech, BBA, BCA, MBA, MCA. The
            college consists of many technical and non-technical societies like
            BVPIEEE, ISTE, ACM, CSI, Enactus, Eduminerva, DAS, EDC, Zaahir, etc.
            Students working/volunteering under these societies are very active
            in social and cultural events and are readily involved in social or
            educational volunteering across the city.
          </p>
          <p>
            <u>VISION</u>: The vision of the college is to continuously exceed
            and thus coming together enlivens the research themes, creates
            awareness about upcoming technologies, and provides a platform to
            budding research workers for producing their significant place in
            the scientific community. Not only that, the premium institute
            focuses on the overall development of their students and faculties
            by having various technical and social gatherings all year round.
          </p>
        </Fade>
      </div>
    </div>
  </section>
);

export default AboutBVCOE;
