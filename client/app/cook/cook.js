angular.module('food.Journey.cook', [])

.controller('CookController', function($scope, $state, Places) {

  $scope.terms = '';
  $scope.searchedTerms = '';
  $scope.address = '944 Market Street, San Francisco, CA';
  $scope.page = 0;

  $scope.search = function() {
    $scope.searchedTerms = $scope.terms;

    params = {};
    params.category_filter = 'food';
    params.sort = 1;
    params.radius_filter = 10000;
    params.location = $scope.address;
    params.term = $scope.searchedTerms;

    Places.search(params).then(function(data){
      $scope.data = data;
      $state.go('cook.list');
    });
  };
});
