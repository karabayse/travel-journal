/*---- Controller ----*/

var myApp = angular.module('myApp', []);

myApp.controller('JournalController', function(JournalService){
  console.log('in the JournalController');
  var vm = this;
  vm.showRegisterDiv = true;
  vm.deleteBtnShow = true;
  vm.loggedIn = true;
  vm.hasAccess = false;

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
    var registerObject = {
      username: vm.registerNameInput,
      password: vm.registerPasswordInput
    }; // end registerObject
    JournalService.register(registerObject).then(function() {
      vm.registerNameInput = '';
      vm.registerPasswordInput = '';
      vm.toggleLogin();
    }); // end JournalService.register function
  }; // end register

vm.toggleLogin = function() {
  vm.showRegisterDiv = !vm.showRegisterDiv;
  vm.deleteBtnShow = !vm.deleteBtnShow;
}; // end toggleLogin

vm.logOut = function() {
  vm.loggedIn = true;
  vm.nameInput = '';
  vm.passwordInput = '';
}; // end logOut

}); // end controller
