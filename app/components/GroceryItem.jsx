const React = require('react');
const ReactDOM = require('react-dom');

const GroceryItem = React.createClass({

  render: function () {
    let item = this.props.item;
    if (!item) {
      return null;
    }

    let name = item.name || '';
    let styleClass = item.purchased ? 'purchased' : '';
    return (
      <div>
        <span className={styleClass}>
          { name }
        </span>
      </div>
    );
  }
});

module.exports = GroceryItem;
