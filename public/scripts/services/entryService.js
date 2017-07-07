/*---- Entry Service ----*/

myApp.service('EntryService', function($http) {
  var sv = this;

  // GET call for getLocation
  sv.getLocation = function() {
    return $http({
      method: 'GET',
      url: '/journalEntry'
    }).then(function(response){
      console.log('back from getLocation get:', response);
    });
  }; // end getLocation

  // POST for journalEntry
  sv.journalEntry = function( journalEntry ) {
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
