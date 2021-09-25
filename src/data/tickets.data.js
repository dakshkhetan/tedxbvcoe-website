export const ticketsDetails = [
  {
    key: '1',
    open: false,
    category: 'Superfan',
    price: 'FREE',
    // paymentLink: 'https://forms.gle/y6X54FyjX8dN7wrr7',
    description: (
      <>
        <p>
          Are you a TEDx superfan, Are interested and excited about the event!
          Answer a few questions and let us know what excites you the most about
          the event and who is going to be the speaker whose TED Talk you can’t
          miss. The best entries will get a chance to get a free ticket.
        </p>
      </>
    )
  },
  {
    key: '2',
    open: false,
    category: 'Standard',
    price: '₹99',
    // buttonId: 'standard-access-btn',
    // razorpayPaymentId: 'pl_HxIEHE0ogNcy1Z',
    // paymentLink: 'https://razorpay.com',
    description: (
      <>
        <ul>
          <li>Get an exclusive Two-Day Event Pass for the event</li>
          <li>
            Get access to the best 10 curated ideas from our astounding speakers
          </li>
          <li>
            Earn a chance to get exciting insights on ideas across diverse
            disciplines from the world’s leading speakers and professionals
          </li>
          <li>
            Earn a chance to catch one of the most talented artists LIVE at the
            event
          </li>
        </ul>
      </>
    )
  },
  {
    key: '3',
    open: false,
    category: 'Premium',
    price: '₹299',
    // buttonId: 'premium-access-btn',
    // razorpayPaymentId: 'pl_HxIIBerzbgjVHW',
    // paymentLink: 'https://razorpay.com',
    description: (
      <>
        <ul>
          <li>All Standard Access Ticket Benefits</li>
          <li>
            Get a chance to talk and interact with your favourite speaker(s)
            from our versatile panel
          </li>
          <li>Get exclusive access to the Pre-TEDx events</li>
        </ul>
      </>
    )
  },
  {
    key: '4',
    open: false,
    category: 'Platinum',
    price: '₹599',
    // buttonId: 'platinum-access-btn',
    // razorpayPaymentId: 'pl_HxIMbNhxCkoKGe',
    // paymentLink: 'https://razorpay.com',
    description: (
      <>
        <ul>
          <li>All Premium Access Ticket Benefits</li>
          <li>T-Shirt worth Rs. 599</li>
          <li>Exclusive merchandise included worth Rs. 999+</li>
          <li>Mug worth Rs 299</li>
          <li>Bottle worth Rs 399</li>
          <li>Badge worth Rs 49</li>
          <li>+ other amazing goodies!</li>
          <li>
            <em>The overall total merchandise value rounds up to Rs 1700</em>
          </li>
        </ul>
      </>
    )
  },
  {
    key: '5',
    open: false,
    category: 'International',
    price: '$14.99',
    // buttonId: 'international-access-btn',
    // razorpayPaymentId: 'pl_Hy9gGJmj07VuYn',
    // paymentLink: 'https://razorpay.com',
    description: (
      <>
        <p style={{ marginBottom: '10px' }}>
          <em>
            <b>Note</b>: This is for international citizens (residing outside
            India)
          </em>
        </p>
        <ul>
          <li>Get an exclusive Two-Day Event Pass for the event</li>
          <li>
            Get access to the best 10 curated ideas from our astounding speakers
          </li>
          <li>
            Earn a chance to get exciting insights on ideas across diverse
            disciplines from the world’s leading speakers and professionals
          </li>
          <li>
            Earn a chance to catch one of the most talented artists LIVE at the
            event
          </li>
        </ul>
      </>
    )
  }
];
