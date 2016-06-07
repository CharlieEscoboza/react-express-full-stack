const mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js');

mongoose.connect('mongodb://localhost/grocery', () => {
  console.log('connected');

  mongoose.connection.db.dropDatabase();

  const items = [
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
  ];

  items.forEach((item) => {
    new GroceryItem(item).save();
  });

});
