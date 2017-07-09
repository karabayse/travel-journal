/*---- Entry Service ----*/

myApp.service('EntryService', function($http) {
  var sv = this;

  // POST call for getLocation
  sv.postLocation = function(location) {
    return $http({
      method: 'POST',
      url: '/location',
      data: location
    }).then(function(response){
      console.log('back from postLocation:', response);
    });
  }; // end postLocation

  // GET call for getLocation
  sv.getLocation = function() {
    return $http({
      method: 'GET',
      url: '/location'
    }).then(function(response){
      console.log('back from getLocation get:', response);
      sv.data = response.data;
    });
  }; // end getLocation

  // POST call for showPosition
  sv.postPosition = function(position) {
    return $http({
      method: 'POST',
      url: '/position',
      data: position
    }).then(function(response){
      console.log('back from postPosition post:', response);
    });
  }; // end postPosition

  // GET call for showPosition
  sv.getPosition = function() {
    return $http({
      method: 'GET',
      url: '/position'
    }).then(function(response){
      console.log('back from getPosition get:', response);
      sv.data = response.data;
    });
  }; // end getPosition

  // POST for journalEntry
  sv.journalEntry = function(journalEntry) {
    return $http({
      method: 'POST',
      url: '/journalEntry',
      data: journalEntry
    }).then(function(response){
      console.log('back from journalEntry post:', response);
    });
  }; // end journalEntry

  // GET for journalEntry
  sv.getEntry = function() {
    return $http({
      method: 'GET',
      url: '/journalEntry'
    }).then(function(response) {
      console.log('back from getEntry:', response);
      sv.data = response.data;
    });
  }; // end getEntry


}); // end service
