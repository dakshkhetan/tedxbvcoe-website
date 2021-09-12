import React from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import './SideDrawer.styles.scss';

class SideDrawer extends React.Component {
  render() {
    const { show, scrollToTop } = this.props;

    const onClickHandler = (route) => {
      const { history, closeSideDrawer } = this.props;
      closeSideDrawer();
      history.push(`/${route}`);
    };

    const handleIconClick = () => {
      ReactGA.event({
        category: "'External Link' Clicks",
        action: "Daksh's website opened",
        label: "Website opened from sidedrawer's icon at bottom"
      });
      window.open('https://dakshkhetan.now.sh', '_blank');
    };

    return (
      <nav className={`${show ? `sidedrawer open` : `sidedrawer`}`}>
        <div className='options-container'>
          <span className='option' onClick={() => scrollToTop()}>
            Home
          </span>
          <span className='option' onClick={() => onClickHandler('speakers')}>
            Speakers
          </span>
          <span className='option' onClick={() => onClickHandler('tickets')}>
            Tickets
          </span>
          <span className='option' onClick={() => onClickHandler('merch')}>
            Merch
          </span>
          <span className='option' onClick={() => onClickHandler('sponsors')}>
            Sponsors
          </span>
          <span className='option' onClick={() => onClickHandler('faq')}>
            FAQ
          </span>
          <span className='option' onClick={() => onClickHandler('team')}>
            Team
          </span>
          <span className='option' onClick={() => onClickHandler('contact')}>
            Contact
          </span>
        </div>

        <FontAwesomeIcon
          icon={faExternalLinkAlt}
          className='icon'
          onClick={handleIconClick}
        />
      </nav>
    );
  }
}

export default withRouter(SideDrawer);
