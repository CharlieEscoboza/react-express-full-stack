const mongoose = require('mongoose');

const GroceryItemSchema = {
  name: String,
  purchased: Boolean,
  id: String
};

const GroceryItem = mongoose.model('GroceryItem', GroceryItemSchema, 'groceryItems');

module.exports = GroceryItem;
