/*---- Journal Controller ----*/

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/login.html',
    controller: 'LoginController as lc'
  }).when('/entry', {
    templateUrl: 'views/entry.html',
    controller: 'EntryController as ec'
  }).when('/collection', {
    temmplateUrl: 'views/collection.html',
    controller: 'CollectionController as cc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
}); // end config
