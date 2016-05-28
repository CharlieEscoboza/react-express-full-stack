const React = require('react');
const ReactDOM = require('react-dom');

// local components
const GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [
  {
    name: "Ice Cream"
  },
  {
    name: "Waffles"
  },
  {
    name: "Candy",
    purchased: true
  },
  {
    name: "Snarks"
  }
]

ReactDOM.render(<GroceryItemList items={initial}/>, document.querySelector('#react-app'));
