/*---- Entry Service ----*/

myApp.service('EntryService', function($http) {
  var sv = this;

  sv.journalEntry = function( journalEntry ) {
    return $http({
      method: 'POST',
      url: '/entry',
      data: journalEntry
    }).then(function(response){
      console.log('back from journalEntry post:', response);
    });
  }; // end journalEntry



}); // end
