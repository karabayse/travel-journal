/*--- Entry Controller ----*/

myApp.controller('EntryController', function(EntryService){
  console.log('in EntryController');
  var vm = this;

  // geolocation
  var x = document.getElementById("demo");

  vm.getLocation = function() {
    console.log('in getLocation');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(vm.showPosition, vm.showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    EntryService.getLocation(vm.showPosition).then(function() {
      console.log('from getLocation:', EntryService.response);
  });
}; // end getLocation

  vm.showPosition = function(position) {
    console.log('in showPosition');
    vm.lat = position.coords.latitude;
    vm.lon = position.coords.longitude;
    vm.latlon = new google.maps.LatLng(vm.lat, vm.lon);
    vm.mapholder = document.getElementById('mapholder');
    mapholder.style.height = '250px';
    mapholder.style.width = '500px';

    var myOptions = {
    center:vm.latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  };

    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
}; // end showPosition

  vm.showError = function(error) {
    console.log('in showError');
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred.";
            break;
    }
  }; // end showError

  // journal entry function
  vm.journalEntry = function() {
    var entryObject = {
      date: vm.dateInput,
      city: vm.cityInput,
      place: vm.placeInput,
      entry: vm.entryInput,
      latitude: vm.latitude,
      longitude: vm.longitude,
      photo: vm.photoInput
    }; // end entryObject
    EntryService.journalEntry(entryObject).then(function() {
      console.log('from entry controller', EntryService.response);
      vm.dateInput = '';
      vm.cityInput = '';
      vm.placeInput = '';
      vm.entryInput = '';
    }); // end EntryService.journalEntry
  }; // end journalEntry function

}); // end controller
