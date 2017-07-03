/*---- Service ----*/

myApp.service('JournalService', function($http){
  var sv = this;

  sv.logIn = function(credentials){
    return $http({
      method: 'POST',
      url: '/',
      data: credentials
    }).then(function(response){
      console.log('back from login attempt:', response);
      sv.response = response;
    });
  }; // end logIn function




}); // end service
