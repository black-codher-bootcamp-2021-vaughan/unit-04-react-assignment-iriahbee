import React from 'react';

const propTypes = {};
const defaultProps = {};

const Search = (props) => {

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.search(props.term);
        console.log ('search has worked')
    };

    return <div id="search">
        <form id="searchAPI" onSubmit={handleSubmit}>
        <label>
            <input type="text" placeholder="Enter a search term..." id="term" name="term" value={props.term} onChange={(e) => props.setTerm(e.target.value)}/>
        </label>
        <input type="submit" value="Search"/>
        </form>
        <h1>{props.term && 'Searching for terms:' + props.term}</h1>
    </div>
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;