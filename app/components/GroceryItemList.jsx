const React = require('react');
const ReactDOM = require('react-dom');

// local components
const GroceryItem = require('./GroceryItem.jsx');
const GroceryListAddItem = require('./GroceryListAddItem.jsx');

const GroceryItemList = React.createClass({

  propTypes: {
    items: React.PropTypes.array
  },

  getDefaultProps: function () {
    return { items: [] };
  },

  _getItems: function () {
    return this.props.items.map(function (item, index) {
      return (<GroceryItem key={index} item={item} />);
    });
  },

  render: function () {
    let items = this._getItems();

    return (
      <div>
        <h1>Grocery Listify</h1>
        <GroceryListAddItem />
        { items }
      </div>
    );
  }
});

module.exports = GroceryItemList;
