angular.module('food.Journey.services', [])

.factory('Places', function($http) {
  var search = function(queryParams) {
    var url = '/food';

    return $http.get(url, {params: queryParams}).then(function(res) {
      return res.data;
    });
  };

  return {
    search : search
  };
});
