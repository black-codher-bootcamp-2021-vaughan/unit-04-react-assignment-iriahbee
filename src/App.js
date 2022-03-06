import '../src/styles/App.css';
import About from '../src/pages/About.js';
import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import ProductList from './components/ProductList';
import Basket from './components/Basket';
import data from './models/data.json';
import ReactPaginate from 'react-paginate';

function App() {
  
  const [items, setItems] = useState(data);
  const [basket, setBasket] = useState([]);
  const [term, setTerm] = useState('');
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  const addToBasket = (id) => {
    setBasket(basket.concat(items.filter(item => item.trackId === id)));
    setItems([...items.map(item => {
      if (item.trackId === id) {
        item.inBasket = true;
        setTotal(total + item.trackPrice);
      }
      return item;
    }
    )]);
    setCount(count+1);
  }

  const removeFromBasket = (id) => {
    setBasket(basket.filter(item => item.trackId !== id));
    setItems([...items.map(item => {
      if (item.trackId === id) {
        item.inBasket = false;
        setTotal(total - item.trackPrice);
      }
      return item;
    }
    )]);
    setCount(count-1);
  }

  async function search(value) {
    const results = await fetch(`https://itunes.apple.com/search?term=${value}&limit=50&explicit=no`).then(res => res.json());
    if (!results.error) {
      setItems(results.results.filter(result => result.trackName && basket.findIndex(item => result.id === item.trackId)===-1));
    }
  }

  useEffect(() => {
    let basketCountLabel = `Basket: ${basket.length} item` + (basket.length===1?"":"s");
    document.title = basketCountLabel;
    document.getElementById("basketlink").innerText = basketCountLabel;
  });
  return (
    <Router>
      <div className="container">
        <Route exact path="/" render={() => (
          <Fragment>
            <Header basketCount={count} />
            <Search term={term} search={search} setTerm={setTerm} />
            <ProductList items={items} addToBasket={addToBasket} removeFromBasket={removeFromBasket} itemCount={items.length} />
          </Fragment>
        )} />
        <Route path="/basket" render={() => (
          <Fragment>
            <Header basketCount={count} />
            <Basket basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} basketCount={count} basketTotal={total} />
          </Fragment>
        )} />
        <Route path="/about" component={() => <About basketCount={count} />} />
      </div>
    </Router>
  
  );
}

export default App;

