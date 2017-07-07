/*---- Login Controller ----*/

myApp.controller('LoginController', function(LoginService, $location){
  console.log('in the LoginController');
  var vm = this;
  vm.showRegisterDiv = true;
  vm.loggedIn = true;
  vm.hasAccess = false;

  vm.logIn = function(){
    console.log('clicked log in');
    var loginObject = {
      username: vm.nameInput,
      password: vm.passwordInput
    }; // end registerObject
    LoginService.logIn(loginObject).then(function() {
      console.log('from login controller', LoginService.response);
      if (LoginService.response.data === 'Match!') {
        vm.hasAccess = true;
        $location.url('/entry');
        console.log('has access');
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
  console.log('clicked Log Out');
  vm.loggedIn = true;
  vm.nameInput = '';
  vm.passwordInput = '';
}; // end logOut

}); // end controller
