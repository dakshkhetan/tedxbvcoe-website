import Fade from 'react-reveal/Fade';

import MerchItem from './MerchItem.component';

import { merchDetails } from '../../data/merch.data';

import './Merch.styles.scss';

const Merch = () => {
  return (
    <>
      <section id='merch' className='section section-merch'>
        <Fade bottom delay={100}>
          <h1 className='section-heading'>Merch Store</h1>
        </Fade>

        <div className='section-content'>
          <div className='merch-container'>
            <Fade delay={50}>
              {merchDetails.map((merchItem) => (
                <MerchItem key={merchItem.id} item={merchItem} />
              ))}
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Merch;
