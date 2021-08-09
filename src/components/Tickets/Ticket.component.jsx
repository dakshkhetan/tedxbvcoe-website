import ReactGA from 'react-ga';
import Fade from 'react-reveal/Fade';

const Ticket = ({ ticket: { category, price, description, paymentLink } }) => {
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
              <h3>₹{price}</h3>
            </Fade>
          </div>
        </div>

        <div className='lower'>
          <div className='description'>
            <Fade delay={250}>
              <p>{description}</p>
            </Fade>
          </div>

          <div className='payment-link'>
            <Fade delay={300}>
              <button onClick={onClickHandler(category)}>Buy Now</button>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
