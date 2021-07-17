import React from 'react';
import Fade from 'react-reveal/Fade';

const Reason = ({ reason }) => {
  return (
    <div className='sponsorship-reason'>
      <Fade delay={150}>
        <div className='image-container'>
          <img src={reason.image} alt='' />
        </div>
      </Fade>
      <Fade delay={250}>
        <h2 className='title'>{reason.title}</h2>
      </Fade>
      <Fade delay={300}>
        <p className='body'>{reason.body}</p>
      </Fade>
    </div>
  );
};

export default Reason;
