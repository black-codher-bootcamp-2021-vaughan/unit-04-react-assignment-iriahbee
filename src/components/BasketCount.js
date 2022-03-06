import React from 'react';

const BasketCount = (props) => {

  return (
    <div id="basketcount">
      {props.basketCount} item{props.basketCount!==1?"s":""}
    </div>
  );
}

export default BasketCount;