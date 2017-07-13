/*--- Wishlist Controller ---*/

myApp.controller('WishlistController', function(WishlistService, filepickerService, $scope) {
  console.log('in WishlistController');
  var vm = this;
  vm.picture = '';

  vm.wishlistEntry = function() {
    var wishlistObject = {
      city: vm.cityInput,
      state: vm.stateInput,
      country: vm.countryInput,
      place: vm.placeInput,
      wish: vm.wishInput,
      picture: vm.picture
    }; // end wishlistObject
    console.log(wishlistObject);
    WishlistService.wishlistEntry(wishlistObject).then(function() {
      vm.cityInput = '';
      vm.stateInput = '';
      vm.countryInput = '';
      vm.placeInput = '';
      vm.wishInput = '';
    }); // end WishlistService.wishlistEntry
  }; // end wishlistEntry function


}); // end controller
