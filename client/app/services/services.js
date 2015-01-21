angular.module('food.Journey.services', [])

.factory('Places', function($http) {
  var search = function(queryParams) {
    var url = '/food';

    return $http.get(url, {params: queryParams}).then(function(res) {
      return res.data;
    });
  };

  var store = function(place) {
    var url = '/places';
    return $http.post(url, {'place': place});
  };

  var retrieveAll = function() {
    var url = '/places';
    return $http.get(url).then(function(res) {
      return res.data;
    });
  };

  return {
    search : search,
    store : store,
    retrieveAll : retrieveAll
  };
});
