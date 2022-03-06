import React from 'react';
import PropTypes from 'prop-types';

const Product = ({item, ...props}) => {
 
    const {trackId, artworkUrl100, trackName, artistName, kind, longDescription, trackPrice} = item;

    return (
      <div className={"product "+item.kind} id={props.key}>
          <img src={artworkUrl100} alt={trackName && trackName.length>0?trackName:`Item id=${trackId}`}/>
          <div className="details">
            <h2 title={trackName}>{trackName && trackName.length>50 ? trackName.substring(0,50)+"...":trackName}</h2>
            <p className="artist">{artistName && artistName.length>40 ? artistName.substring(0,40)+"...":artistName}</p>
            <p className= "kind">{kind && kind.length>30 ? kind.substring(0,30)+"...":kind}</p>
            <p className="price">{trackPrice?"£"+trackPrice:"-"}</p>
            <p className="description">{longDescription?longDescription.substring(0,300)+"...":""}</p>
          </div>
          <div className="buttons">
            {item.inBasket ?
              <button className="remove-button" onClick={() => props.removeFromBasket(trackId)}>Remove</button>:
              <button className="add-button" onClick={() => props.addToBasket(trackId)}>Add to Basket</button>
            }
           </div>
      </div>
    );
}

export default Product;

//Prop Types
Product.propTypes = {
  item: PropTypes.object.isRequired
}