import merchItemPlaceholder from '../../assets/merch/placeholder.jpg';

const MerchItem = ({ item: { item, price, image } }) => (
  <>
    <div className='merch-item'>
      <div className='name'>
        <h3>{item}</h3>
      </div>
      <div className='image'>
        {image ? (
          <img src={image} alt='merch item' />
        ) : (
          <img src={merchItemPlaceholder} alt='merch item' />
        )}
      </div>
      <div className='price'>
        <h3>₹{price}</h3>
        <h4>Out of Stock</h4>
      </div>
    </div>
  </>
);

export default MerchItem;
