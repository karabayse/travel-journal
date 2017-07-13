/*---- Wishlist Service ----*/

myApp.service('WishlistService', function($http) {
  var sv = this;

  // POST call for wishlistEntry
  sv.wishlistEntry = function(wish) {
    return $http({
      method: 'POST',
      url: '/wishlist',
      data: wish
    }).then(function(response){
      console.log('back from postWish post:', response);
    });
  }; // end wishlistEntry

  // GET call for getLocation
  sv.getWishlistEntry = function() {
    return $http({
      method: 'GET',
      url: '/wishlist'
    }).then(function(response){
      console.log('back from getWish get call:', response);
      sv.data = response.data;
    });
  }; // end getWish


}); // end service
