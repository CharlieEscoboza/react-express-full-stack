
module.exports = function (app) {

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

  app.route('/api/items/:id')
     .delete((req, res) => {
       GroceryItem.findOne({
         _id: req.params.id
       }).remove(() => {
       });
     })

     .patch((req, res) => {
       GroceryItem.findOne({
         _id: req.body._id
       }, (error, doc) => {
         for (var key in req.body.name) {
           doc[key] = req.body[key];
         }

         doc.save();
         res.status(200).send();
       });
     });
}
