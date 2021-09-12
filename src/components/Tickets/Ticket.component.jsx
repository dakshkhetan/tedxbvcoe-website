import ReactGA from 'react-ga';
import Fade from 'react-reveal/Fade';

const Ticket = ({
  ticket: { open, category, price, description, paymentLink }
}) => {
  const onClickHandler = (tier) => (e) => {
    e.preventDefault();

    ReactGA.event({
      category: 'Button Clicks',
      action: "'Buy Ticket' Button Click",
      label: `User clicked on  '${tier}' Ticket Purchase Link`
    });

    window.open(paymentLink, '_blank');
  };

  return (
    <>
      <div className='ticket'>
        <div className='upper'>
          <div className='category'>
            <Fade delay={200}>
              <h3>{category}</h3>
            </Fade>
          </div>

          <div className='price'>
            <Fade delay={250}>
              <h3>{price !== '0' ? `₹${price}` : 'FREE'}</h3>
            </Fade>
          </div>
        </div>

        <div className='lower'>
          <div className='description'>
            <Fade delay={250}>{description}</Fade>
          </div>

          <div className='payment-link'>
            <Fade delay={300}>
              {!open ? (
                <button onClick={() => null}>Coming Soon</button>
              ) : (
                <button onClick={onClickHandler(category)}>Buy Now</button>
              )}
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
