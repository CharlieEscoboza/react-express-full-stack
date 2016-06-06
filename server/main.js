const express = require('express');
const parser = require('body-parser');

const app = new express();
const PORT = 7777;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("../app/index.ejs", {});
})

app.use(express.static(__dirname + '/../.tmp'));
app.use(express.static(__dirname + '/../bower_components'));

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));


require('./routes/items.js')(app);
