/*--- Entry Controller ----*/

myApp.controller('EntryController', function(EntryService, filepickerService, $scope) {
  console.log('in EntryController');
  var vm = this;
  vm.lat = '';
  vm.lon = '';
  vm.picture = '';

  // geolocation
  var x = document.getElementById("demo");

  vm.getLocation = function() {
    console.log('in getLocation');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(vm.showPosition, vm.showError);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
    // EntryService.getLocation(vm.showPosition).then(function() {
    //   console.log('from getLocation:', EntryService.response);
    // });
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
      center: vm.latlon,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      navigationControlOptions: {
        style: google.maps.NavigationControlStyle.SMALL
      }
    };

    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({
      position: vm.latlon,
      map: map,
      title: "You are here!"
    });
  }; // end showPosition

  vm.showError = function(error) {
    console.log('in showError');
    switch (error.code) {
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
      state: vm.stateInput,
      country: vm.countryInput,
      place: vm.placeInput,
      entry: vm.entryInput,
      latitude: vm.lat,
      longitude: vm.lon,
      picture: vm.picture
    }; // end entryObject
    console.log('entryObject:', entryObject);
    EntryService.journalEntry(entryObject).then(function() {
      sweetAlert("Entry Saved!");
      vm.dateInput = '';
      vm.cityInput = '';
      vm.stateInput = '';
      vm.countryInput = '';
      vm.placeInput = '';
      vm.entryInput = '';
    }); // end EntryService.journalEntry
  }; // end journalEntry function

  // filestack function
  // vm.uploadImg = filestack.init('AhrWf6DTJTyalw1FBG6WQz');
  vm.showPicker = function() {
    console.log('in filestack function');
    filepickerService.pick({},
      function(Blob) {
        console.log(JSON.stringify(Blob));
        // vm.entryObject.picture = Blob;
        vm.picture = Blob;
        console.log(vm.picture);
        vm.picture = vm.picture.url;
        $scope.$apply();
      });
  }; // end filestack function

  vm.showEntries = function() {
    console.log('in showEntries');
    EntryService.getEntry().then(function() {
      vm.entries = EntryService.data;
      console.log('back in EntryController with:', vm.entries);
    });
  }; // end showEntries

  vm.delete = function(index) {
    console.log('in delete function');
    sweetAlert({
      title: "Are you sure?",
      text: "Are you sure you want to delete this entry?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it.",
      closeOnConfirm: false
    }).then(function() {
      console.log('delete entry confirmed');
      EntryService.delete(vm.entries[index]._id).then(function() {
        sweetAlert("Entry Deleted!");
        vm.showEntries();
      }); // end EntryService.delete
    }); // end .then
  }; // end vm.delete

}); // end controller
