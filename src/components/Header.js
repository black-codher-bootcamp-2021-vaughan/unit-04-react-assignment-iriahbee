import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {

  return (
    <div id="header">
        <h1>Media Store</h1>
        <div id="breadcrumb">
          <Link to="/" id="homelink"> Home </Link> |
          <Link to="/about" id="aboutlink"> About </Link> |
          <Link to="/basket" id="basketlink"> Basket: {props.basketCount} item{props.basketCount===1?"":"s"}</Link>
        </div>
    </div>
  );
}

export default Header;