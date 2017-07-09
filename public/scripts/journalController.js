/*---- Journal Controller ----*/

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'LoginController as lc'
  }).when('/entry', {
    templateUrl: 'views/entry.html',
    controller: 'EntryController',
    controllerAs: 'EntryController as ec'
  }).when('/archive', {
    temmplateUrl: 'views/archive.html',
    controller: 'ArchiveController',
    controllerAs: 'ArchiveController as ac'
  }).when('/geolocations', {
    templateUrl: 'views/geolocations.html',
    controller: 'GeolocationsController',
    controllerAs: 'GeolocationsController as gc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
}); // end config
