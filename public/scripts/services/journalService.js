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

sv.register = function(credentials){
  return $http({
    method: 'POST',
    url: '/register',
    data: credentials
  }).then(function(response){
    console.log('back from register attempt:', response);
  });
}; // end register


}); // end service
