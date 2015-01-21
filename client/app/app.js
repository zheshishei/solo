angular.module('food.Journey', [
  // 'food.Journey.settings',    //settings
  'food.Journey.consume',     //use a lunch spot
  'food.Journey.cook',        //save available lunch spots
  'food.Journey.cook.detail', //show & save results
  'food.Journey.services',
  'ui.router'
]).config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  $urlRouterProvider.otherwise('consume');

  $stateProvider
  .state('consume', {
    url:'/consume',
    templateUrl: '/app/consume/consume.html',
    controller: 'ConsumeController'
  })
  .state('cook', {
    url: '/cook',
    templateUrl: '/app/cook/cook.html',
    controller: 'CookController'
  })
  .state('cook.list', {
    url: '/result',
    templateUrl: '/app/cook/cook.detail.html',
    controller: 'CookDetailController'
  });
  // .state('settings', {
  //   url: '/settings',
  //   templateUrl: '/app/settings/settings.html',
  //   // controller: 'SettingsController'
  // })
  // .state('signin', {
  //   url: '/signin',
  //   templateUrl: 'app/auth/signin.html',
  //   controller: 'AuthController'
  // })
  // .state('signup', {
  //   url: '/signup',
  //   templateUrl: 'app/auth/signup.html',
  //   controller: 'AuthController'
  // })

  // $httpProvider.interceptors.push('AttachTokens');
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
  });
});
