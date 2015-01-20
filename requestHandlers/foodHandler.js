var secret = require('../secrets/yelpOAUTH.secret');
var yelp = require('yelp').createClient(secret);

var foodHandler = function(req, res) {
  yelp.search(req.query, function(error, data) {
    if(error) { console.log(error); } else {
      res.send(data);
    }
  });
};

module.exports = foodHandler;
