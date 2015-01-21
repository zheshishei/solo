var credentials = require('../secrets/mongo.secret');
var db = require('mongoskin')
        .db('mongodb://' + credentials.admin + ':' + credentials.password + '@localhost:27017/foodJourney');

var placesHandler = {
  'GET': function(req, res) {
    db.collection('places').find().toArray(function(err, result) {
      if(err) {
        res.send(500, 'Could not save.');
        throw err;
      } else {
        res.send(result);
      }
    });
  },
  'POST': function(req, res) {

    db.collection('places').findOne(req.body, function(err, result) {
      if(err) {
          res.send(500, 'Could not save.');
          throw err;
      } else if(result === null) {
        db.collection('places').insert(req.body, function(err, result) {
          if (err) {
            res.send(500, 'Could not save.');
            throw err;
          } else {
            res.send(201, 'Place saved.');
          }
          return;
        });
      }else {
        res.send(201, 'Place saved.');
      }
    });

  }
};

module.exports = placesHandler;
