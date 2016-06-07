const dispatcher = require('../dispatcher.js');
const helper = require('../helpers/RestHelper.js');

const GroceryItemStore = function () {

  let items = [];

  console.log(helper.get('/api/items'));
  helper.get('/api/items')
        .then((data) => {
          items = data;
          triggerListeners();
        });

  const listeners = [];

  function getItems() {
    return items;
  }

  function addGroceryItem (item) {
    items.push(item);
    triggerListeners();
  }

  function deleteGroceryItem (item) {
    let  index = items.indexOf(item);
    items.splice(index, 1);
    console.log('deleted');
    triggerListeners();
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function setGroceryItemBought(item, isBought) {
    let index = items.indexOf(item.name);
    items[index].purchased = isBought || false;
    triggerListeners();
  }

  function triggerListeners() {
    listeners.forEach((listener) => {
      listener(items);
    });
  }

  dispatcher.register((evt) => {
    const split = evt.type.split(':');
    if (split[0] === 'grocery-item') {
      switch (split[1]) {
        case 'add':
          addGroceryItem(evt.payload);
          break;
        case 'delete':
          deleteGroceryItem(evt.payload);
          break;

        case 'buy':
          setGroceryItemBought(evt.payload, true);
          break;

        case 'unbuy':
          setGroceryItemBought(evt.payload, false);
          break;
      }
    }
  });

  return {
    getItems: getItems,
    onChange: onChange
  };
}

module.exports = new GroceryItemStore();
