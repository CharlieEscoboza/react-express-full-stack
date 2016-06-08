const express = require('express');
const parser = require('body-parser');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const app = new express();
const PORT = 7777;

const GroceryItem = require('./models/GroceryItem.js');

require('babel-register');
require('./database.js');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  var application = React.createFactory(require('../app/components/GroceryItemList.jsx'));
  // res.render("../app/index.ejs", {});
  GroceryItem.find((error, doc) => {
    let generated = ReactDOMServer.renderToString(application({
      items: doc
    }));

    res.render('../app/index.ejs', {reactOutput: generated});
  });
})

app.use(express.static(__dirname + '/../.tmp'));
app.use(express.static(__dirname + '/../bower_components'));

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));


require('./routes/items.js')(app);
