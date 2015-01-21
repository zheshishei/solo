angular.module('food.Journey.cook', [])

.controller('CookController', function($scope, $state, Places) {

  //volatile
  $scope.terms = '';
  $scope.address = '944 Market Street, San Francisco, CA';

  //non-volatile (previous search)
  $scope.searchedTerms = '';
  $scope.params = {};
  $scope.places = null;

  $scope.search = function() {
    $scope.searchedTerms = $scope.terms;

    $scope.params.category_filter = 'food';
    $scope.params.sort = 0;
    $scope.params.radius_filter = 10000;
    $scope.params.location = $scope.address;
    $scope.params.term = $scope.searchedTerms;

    Places.search($scope.params).then(function(data){
      $scope.places = data.businesses;
      $state.go('cook.list');
    });
  };
});
