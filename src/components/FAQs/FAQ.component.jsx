import React from 'react';
import Fade from 'react-reveal/Fade';

const FAQ = ({ faq: { open, question, answer }, index, toggleFAQ }) => {
  return (
    <Fade bottom delay={150}>
      <div
        className={`faq ${open ? 'open' : ''}`}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        <div className='faq-question'>{question}</div>
        <div className='faq-answer'><p>{answer}</p></div>
      </div>
    </Fade>
  );
};

export default FAQ;
