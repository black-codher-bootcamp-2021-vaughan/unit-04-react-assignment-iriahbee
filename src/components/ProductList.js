import React  from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

const ProductList = ({items,basketCount,...props}) => {

  return (
    <div className="results">
      <h2>Your Recommended Media</h2>
        {        
        (props.itemCount===0) ? 
          (<div className="empty">No items found...</div>) :
            (items
              .filter(item => (!item.inBasket) )
              .map(item => (<Product key={item.trackId} item={item} {...props}/>)
          )
        )
        }
    </div>
  );
}

ProductList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ProductList;