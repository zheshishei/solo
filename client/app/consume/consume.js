angular.module('food.Journey.consume', [])

.controller('ConsumeController', function($scope, Places) {

  $scope.savedPlaces = [];

  Places.retrieveAll()
    .then(function(data) {
      console.log(data);
      for(var i = 0; i < data.length; i++) {
        $scope.savedPlaces.push(data[i].place);
      }
    });
});
