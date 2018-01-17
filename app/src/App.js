import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './FilterableProductTable';


const PRODUCTS = [
    {category: 'Sporting Goods', price: '$59.99',  stocked: true,  name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99',  stocked:  true,  name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99',  stocked: false, name: 'Basketball'},
    {category: 'Electronics',    price: '$99.99',  stocked: false, name: 'iPod Touch'},
    {category: 'Electronics',    price: '$749.99', stocked: true,  name: 'iphone 6'},
    {category: 'Electronics',    price: '$193.99', stocked: true,  name: 'Nexus 7'},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FilterableProductTable product={PRODUCTS} />
      </div>
    );
  }
}

export default App;
