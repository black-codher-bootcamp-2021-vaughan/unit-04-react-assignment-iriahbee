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
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState(data);
  const [itemOffset, setItemOffset] = useState(0);

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

  let limit = 150
  async function search(value) {
    const results = await fetch(`https://itunes.apple.com/search?term=${value}&limit=${limit}&explicit=no`).then(res => res.json());
    if (!results.error) {
    setItems(results.results.filter(result => result.trackName && basket.findIndex(item => result.id === item.trackId)===-1));
    }
  }
   
  useEffect(() => {
    let basketCountLabel = `Basket: ${basket.length} item` + (basket.length===1?"":"s");
    document.title = basketCountLabel;
    document.getElementById("basketlink").innerText = basketCountLabel;
  });

  let itemsPerPage = 10
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, items, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  

  return (
    <><Router>
      <div className="container">
        <Route exact path="/" render={() => (
          <Fragment>
            <Header basketCount={count} />
            <Search term={term} search={search} setTerm={setTerm} />
            <ProductList items={currentItems} addToBasket={addToBasket} removeFromBasket={removeFromBasket} itemCount={currentItems.length} />
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
        <div id ='pagi'>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null} />
      </div></> 
  );
        
}

export default App;

