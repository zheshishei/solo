var yelp = require('../services/yelpAPI');

var foodHandler = function(req, res) {
  res.send(yelp.search());
};


module.exports = foodHandler;
