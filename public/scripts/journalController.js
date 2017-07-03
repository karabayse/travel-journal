/*---- Controller ----*/

var myApp = angular.module('myApp', []);

myApp.controller('JournalController', function(JournalService){
  console.log('in the JournalController');
  var vm = this;

  vm.logIn = function(){
    console.log('clicked log in');
    var registerObject = {
      username: vm.nameInput,
      password: vm.passwordInput
    }; // end registerObject
    JournalService.logIn(registerObject).then(function(){
      console.log('from controller', JournalService.response);
      if (JournalService.response.data === 'Match!') {
        vm.hasAccess = true;
      } else {
        vm.hasAccess = false;
      }
    }); // end JournalService
    vm.toggleLogin();
  }; // end logIn function

  vm.register = function(){
    console.log('clicked register');
  }; // end register function


}); // end controller
