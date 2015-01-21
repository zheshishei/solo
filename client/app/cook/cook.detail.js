angular.module('food.Journey.cook.detail', [])

.controller('CookDetailController', function($scope, $state, Places) {
  $scope.currentIndex = 0;
  $scope.currentPage = 1;
  $scope.currentPlace = $scope.places[$scope.currentIndex];
  $scope.nextPlaces = fillNextPlaces();
  $scope.data = undefined;
  $scope.nextPlace = function() {
    $scope.currentIndex++;

    if($scope.currentIndex === 20) {
      $scope.currentIndex = 0;
      $scope.currentPage++;

      //replace current list of places with ones in the buffer
      //and retrieve next buffer.
      $scope.places = $scope.nextPlaces;
      fillNextPlaces();
    }
    $scope.currentPlace = $scope.places[$scope.currentIndex];
  };

  $scope.savePlace = function() {
    Places.store($scope.currentPlace)
      .success($scope.nextPlace);
  };

  function fillNextPlaces() {
    $scope.params.offset = $scope.currentPage * 20;
    Places.search($scope.params)
      .then(function(data) {
        $scope.data = data.businesses[0];
        $scope.nextPlaces = data.businesses;
      });
  }
});
