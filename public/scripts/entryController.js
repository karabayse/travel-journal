/*--- Entry Controller ----*/

myApp.controller('EntryController', function(EntryService){
  console.log('in EntryController');
  var vm = this;

  // geolocation
  var x = document.getElementById("demo");

  vm.getLocation = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }; // end getLocation

  vm.showPosition = function(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }; // end showPosition

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
