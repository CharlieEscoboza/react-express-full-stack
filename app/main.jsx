const React = require('react');
const ReactDOM = require('react-dom');

// local components
const GroceryItemList = require('./components/GroceryItemList.jsx');

const groceryItemStore = require('./stores/GroceryItemStore.js');

let initial = groceryItemStore.getItems();

function render () {
  ReactDOM.render(<GroceryItemList items={initial}/>, document.querySelector('#react-app'));
}

groceryItemStore.onChange((items) => {
  initial = items;
  render();
});

render();
