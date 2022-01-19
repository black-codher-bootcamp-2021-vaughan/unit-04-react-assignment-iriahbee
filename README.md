# React Assessment

For your unit 4 assessment you will be building a Media Store App that allows users to search the iTunes store for music, videos, TV shows and other media types.

This repository contains a basic React app. To install the basic packages needed to run the app, run the following command in your terminal:

```shell
> npm install
```

## High-Level Criteria

The finished app should include the following functionality:

- A user should have the ability to add and remove items from a basket. 
- The basket should display the number of items added.
- A user should be able to search the iTunes Search API using a text search field and review a list of results.
- A user should be able to transfer items in the search results to and from their basket.
- The app should have an About page explaining how to use the app and who designed it.

By the due date of this assessment you must have what is stated in the [criteria, detailed below,](#assessment-criteria) pushed to GitHub ready to be marked.

The tasks and homework throughout unit 4 explain how to build a __Bookcase React App__ to store books. The __Bookcase React App__ is an example of a __SPA (Single-Page App)__. The same functionality and concepts can be used to build your Media Store app for this assessment.

The main functionality of the __Bookcase React App__ was the ability to `add` and `remove` from a `<BookList/>` component and search a third party API. The __Bookcase React App__ also used the `BrowserRouter` module to create new pages.

## Assessment Criteria

Ensure your app has the following file structure and functionality:

### File Structure:

```
- public/
    |-- index.html
- src/
    |-- components/
        |-- Basket.js
        |-- BasketCount.js
        |-- BasketTotal.js
        |-- Header.js
        |-- Product.js
        |-- ProductList.js
        |-- Search.js
    |-- models/
        |-- data.json
    |-- pages/
        |-- About.js
    |-- styles/
        |-- App.css
    |-- App.js
    |-- index.js
```

### Component Functionality

Ensure your application is broken down into components. Each component should be a logical representation of objects displayed in your application.

### `App.js`
This is the main component of your application. The following functions will be defined in this file: 
- `addToBasket()`:
    Allows a **product** to be added to the `<Basket/>`

- `removeFromBasket()`:
    Allows a **product** to be removed from the `<Basket/>`

- `search()`:
    Searches the iTunes API for the `terms` entered by the user

When started, the app should load an initial set of items from a local JSON file. Rename the example file [**`\src\models\example-data.json`**](.\src\models\example-data.json) to `data.json` and pass items from here into your `<ProductList/>` component. 

Each object in the JSON file should be rendered by your `<Product/>` component.

Each **product** should have a button to `Add to Basket`. When clicked the item should be removed from `<ProductList/>` and added to your `<Basket/>` component.

### `Search.js`
`Search.js` will return a form with the following identifier `id="searchAPI"` e.g., `<form id="searchAPI">`. The form should have at least one text field for keyword input e.g. `<input id="term"/>` and a button to submit the form. 


The search should be available on the home page of your app. Your search `<form/>` will need to have an `onSubmit()` handler that will call your `search()` function. The `search()` function will return results of the [iTunes Search API](#itunes-search-api)

Your app should display the results of the search in an component called `<ProductList/>` with the identifier `id="results"` e.g. `<div id="results"/>`.

### `Basket.js`
Users should be able to navigate to their `<Basket/>` and view all saved items. When their `<Basket/>` is empty a message should be displayed:

```
"Sorry, no items in basket" 
```
Users should be able to add items returned in the results from the iTunes Search API and items in the `data.json` to their `<Basket/>` component.

Users should be able to see a running total/tally of the costs of the items in their basket as well as the number of items. The total should be displayed in a `<BasketTotal />` component.

```XML
<BasketTotal basketTotal={total} />
```

Each item in your `<Basket/>` should have a button to `Remove from basket`. When clicked, the item should be removed from the `<Basket/>` and restored to the `<ProductList />` component.

Your app should keep a count of the number of items in your `<Basket/>` and display the count in a `<BasketCount />` component, e.g. 
    
```XML
<BasketCount basketCount={count} />
```

Expected **functions** and **props** for the `<Product/>` component are listed below:

### Props

Example expected props. Please note this is not an exhaustive list, but the minimum props required for assessment.

```XML
<Basket
    basket={basket}
    removeFromBasket={removeFromBasket}
    basketCount={count}
    basketTotal={total} />
```

### `About.js`

Allow a user to view an About page called `About.js` explaining the application functionality. This page should contain a `<h1></h1>` element containing the title "About". The `About.js` should be created in the **pages** folder. Each view/page of the app should have relevant links to enable navigation between the the About page, the Basket and the Home page.

Your finished app should contain three `<Route/>` components with the following paths:

```XML
<Route path="/"/>
<Route path="about"/>
<Route path="basket"/>
```

### `Header.js`

To navigate to the routes above, your `<Header/>` file should contain the following `<Link/>` components:

```XML
<Link to="/" id="homelink"> Home </Link> |
<Link to="/about" id="aboutlink"> About </Link> |
<Link to="/basket" id="basketlink"> Basket ({props.itemCount})</Link>
```

## `Product.js`

Expected **props** for the `<Product/>` component are listed below:

### Props

Example expected props. Please note this is not an exhaustive list, but the minimum props required for assessment.

```XML
<Product
    kind={kind}
    id={trackId}
    name={trackName}
    thumbnail={artworkUrl100}
    price={trackPrice}
    addToBasket={addToBasket}
    removeFromBasket={removeFromBasket} />
```

## `ProductList.js`

When the `<ProductList/>` is empty a message should be displayed:

```
"No items found..." 
```

Expected **props** for the `<ProductList/>` component are listed below:

### Props

Example expected props. Please note this is not an exhaustive list, but the minimum props required for assessment.

```XML
<ProductList
    items={items}
    addToBasket={addToBasket} />
```

## Additional Functionality (Optional)

### Advanced Navigation

Add pagination (next and previous buttons). *This will require storing the book data and page number in state, then only showing so many results per page*

Add numbered pages and display the results of the search.

### Animation/Interactivity

Add some animation or transitions to the application, i.e.
- Consider animating the selection and deselection of books.
- An animated results count when the search returns more than one page of results. 

### Product Differentiation

Modify the display of each **product** depending on the **kind** of item returned (e.g. `movie`, `music`, `shortfilm` etc). Read the [iTunes Search API Documentation](#itunes-search-api) for a list of returned kinds.

## How to submit

Commit all created/generated files and folders to the repo and push to your remote repo for assessment.

## iTunes Search API

The [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/) can be searched for iTunes and Apple music, videos, TV show and other media.

An example of the output from a search can be found in the **models** folder [example-data.json](./models/example-data.json).

The following example show a call to the API to search the _[iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)_ for the word `orange` using the `term` query with a `limit` of 15, e.g.
    
```sh
> curl https://itunes.apple.com/search?term=orange&limit=30&explicit=no
```


Use the following link to find out more details about how to use the _[iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)_.

## ⚠️API Warnings:
- To improve response times, minimize the number of search results the Search API returns by specifying an appropriate value for the limit parameter key.
- The Search API is limited to approximately **20 calls per minute** (subject to change).

**[See the iTunes API help guide for more information on limits](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api)**

## Example Project

- [Example Media Store App](https://imusicstore.netlify.app/)