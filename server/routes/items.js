
module.exports = function (app) {
  // const items = [
  //   {
  //     name: "Ice Cream"
  //   },
  //   {
  //     name: "Waffles"
  //   },
  //   {
  //     name: "Candy",
  //     purchased: true
  //   },
  //   {
  //     name: "Snarks"
  //   }
  // ];

  const GroceryItem = require('../models/GroceryItem.js');

  app.route('/api/items')
     .get((req, res) => {
       GroceryItem.find((error, doc) => {
         items = doc;
         res.send(items);
       });
     })

     .post((req, res) => {
       let item = req.body;
       let groceryItem = new GroceryItem(item);
       groceryItem.save((error, data) => {
         res.status(200).send();
       });
     });
}
