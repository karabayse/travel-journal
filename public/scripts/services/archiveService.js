/*---- Archive Service ----*/

myApp.service('ArchiveService', function($http) {
  var sv = this;

  sv.delete = function( entry ){
    return $http({
      method: 'DELETE',
      url: '/archive/' + id,
    }).then(function() {
      console.log('Archive Service delete entry:', response);
      sv.showEntries();
    });
  };

}); // end service
