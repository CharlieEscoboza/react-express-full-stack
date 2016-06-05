const React = require('react');
const ReactDOM = require('react-dom');
const action = require('../actions/GroceryItemActionCreator.jsx');

const GroceryItem = React.createClass({

  _deleteItem: function (evt) {
    evt.preventDefault();
    console.log('deleting...');
    action.delete({name: this.props.item});
  },

  _togglePurchase: function (evt) {
    evt.preventDefault();
    console.log('purchasing...');
    if (this.props.item.purchased) {
      action.unbuy({name: this.props.item});
    } else {
      action.buy({name: this.props.item});
    }
  },

  render: function () {
    let item = this.props.item;
    if (!item) {
      return null;
    }

    let name = item.name || '';
    let styleClass = item.purchased ? 'purchased' : '';
    return (
      <div>
        <span className={"item " + styleClass}>
          { name }
        </span>
        <form onSubmit={this._togglePurchase}>
          <button className={item.purchased ? '' : 'button-primary'}>{this.props.item.purchased ? "Unbuy" : "Buy"}</button>
        </form>
        <form onSubmit={this._deleteItem}>
          <button>&times;</button>
        </form>
      </div>
    );
  }
});

module.exports = GroceryItem;
