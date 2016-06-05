const React = require('react');
const action = require('../actions/GroceryItemActionCreator.jsx');

const GroceryListAddItem = React.createClass({

  getInitialState: function () {
    return {
      item: ''
    };
  },

  _addItem: function (e) {
    e.preventDefault();
    action.add({ name: this.state.item });

    this.setState({
      item: ''
    });

  },

  _handleChange: function (e) {
    this.setState({
      item: e.target.value
    });
  },

  render: function () {
    return (
      <div className="grocery-add-item">
        <form onSubmit={this._addItem}>
          <input type="text" onChange={this._handleChange} value={this.state.item} />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
});

module.exports = GroceryListAddItem;
