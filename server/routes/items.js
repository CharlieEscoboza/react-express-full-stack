
module.exports = function (app) {
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

  app.route('/api/items')
     .get((req, res) => {
       res.send(items);
     });
}
