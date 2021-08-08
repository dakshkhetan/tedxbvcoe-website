import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import DisplayImagePlaceholder from '../../assets/team/placeholder.png';

import './Person.styles.scss';

const Person = ({ member, isCore }) => {
  const {
    name,
    position,
    displayPicSrc,
    linkedInURL,
    instagramURL,
    twitterURL
  } = member;

  return (
    <div className={`member ${isCore ? 'core' : 'organising'}`}>
      <div className='img-container'>
        <div className='display-pic'>
          {displayPicSrc ? (
            <img src={displayPicSrc} alt='profile pic' />
          ) : (
            <img src={DisplayImagePlaceholder} alt='profile pic' />
          )}
        </div>
      </div>
      <span className='name'>{name}</span>
      {position && <span className='position'>{position}</span>}
      <div className='social-icons'>
        {linkedInURL && (
          <a
            href={linkedInURL}
            className='social-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedinIn} className='icon linkedin' />
          </a>
        )}
        {instagramURL && (
          <a
            href={instagramURL}
            className='social-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} className='icon instagram' />
          </a>
        )}
        {twitterURL && (
          <a
            href={twitterURL}
            className='social-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faTwitter} className='icon twitter' />
          </a>
        )}
      </div>
    </div>
  );
};

export default Person;
