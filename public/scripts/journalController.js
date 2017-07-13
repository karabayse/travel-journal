/*---- Journal Controller ----*/

var myApp = angular.module('myApp', ['ngRoute', 'angular-filepicker']);

myApp.config(function($routeProvider, $locationProvider, filepickerProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'LoginController as lc'
  }).when('/entry', {
    templateUrl: 'views/entry.html',
    controller: 'EntryController',
    controllerAs: 'EntryController as ec'
  }).when('/archive', {
    templateUrl: 'views/archive.html',
    controller: 'EntryController',
    controllerAs: 'EntryController as ec'
  }).when('/geolocations', {
    templateUrl: 'views/geolocations.html',
    controller: 'GeolocationsController',
    controllerAs: 'GeolocationsController as gc'
  }).when('/wishlist', {
    templateUrl: 'views/wishlist.html',
    controller: 'WishlistController',
    controllerAs: 'WishlistController as wc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
  filepickerProvider.setKey('AhrWf6DTJTyalw1FBG6WQz');
}); // end config
