import ProgressiveImage from 'react-progressive-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import DisplayImagePlaceholder from '../../assets/team/placeholder.png';
import placeholderImage from '../../assets/team/blur-placeholder.jpg';

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
            <ProgressiveImage
              src={displayPicSrc}
              placeholder={placeholderImage}
            >
              {(src) => <img src={src} alt='profile pic' />}
            </ProgressiveImage>
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
            aria-label='LinkedIn'
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
            aria-label='Instagram'
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
            aria-label='Twitter'
          >
            <FontAwesomeIcon icon={faTwitter} className='icon twitter' />
          </a>
        )}
      </div>
    </div>
  );
};

export default Person;
