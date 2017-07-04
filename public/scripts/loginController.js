/*---- Login Controller ----*/

myApp.controller('LoginController', function(LoginService){
  console.log('in the LoginController');
  var vm = this;
  vm.showRegisterDiv = true;
  vm.loggedIn = true;
  vm.hasAccess = false;

  vm.logIn = function(){
    console.log('clicked log in');
    var registerObject = {
      username: vm.nameInput,
      password: vm.passwordInput
    }; // end registerObject
    LoginService.logIn(registerObject).then(function() {
      console.log('from controller', LoginService.response);
      if (LoginService.response.data === 'Match!') {
        vm.hasAccess = true;
      } else {
        vm.hasAccess = false;
      }
    }); // end JournalService
   vm.toggleLogin();
  }; // end logIn function

  vm.register = function() {
    console.log('clicked register');
    var registerObject = {
      username: vm.registerNameInput,
      password: vm.registerPasswordInput
    }; // end registerObject
    LoginService.register(registerObject).then(function() {
      vm.registerNameInput = '';
      vm.registerPasswordInput = '';
      vm.toggleLogin();
    }); // end JournalService.register function
  }; // end register

vm.toggleLogin = function() {
  vm.showRegisterDiv = !vm.showRegisterDiv;
}; // end toggleLogin

vm.logOut = function() {
  vm.loggedIn = true;
  vm.nameInput = '';
  vm.passwordInput = '';
}; // end logOut

}); // end controller
