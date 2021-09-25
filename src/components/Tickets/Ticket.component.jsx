import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Fade from 'react-reveal/Fade';

const Ticket = ({
  ticket: {
    open,
    category,
    price,
    description,
    buttonId,
    razorpayPaymentId,
    paymentLink
  }
}) => {
  useEffect(() => {
    if (buttonId) {
      const scriptEl = document.createElement('script');
      scriptEl.setAttribute(
        'src',
        'https://checkout.razorpay.com/v1/payment-button.js'
      );
      scriptEl.setAttribute('data-payment_button_id', razorpayPaymentId);
      // scriptEl.setAttribute('async', 'true');
      const formEl = document.getElementById(buttonId);
      formEl.appendChild(scriptEl);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickHandler = (tier) => (e) => {
    e.preventDefault();

    ReactGA.event({
      category: 'Button Clicks',
      action: "'Buy Ticket' Button Click",
      label: `User clicked on '${tier}' Ticket Purchase Link`
    });

    if (paymentLink) window.open(paymentLink, '_blank');
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
              <h3>{price}</h3>
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
                <>
                  <button onClick={() => null}>Sold Out</button>
                </>
              ) : category === 'Superfan' ? (
                <button onClick={onClickHandler(category)}>Get Now</button>
              ) : (
                <>
                  <button onClick={onClickHandler(category)}>
                    Buy Now
                    <form id={buttonId} />
                  </button>
                </>
              )}
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
