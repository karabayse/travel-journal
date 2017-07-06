/*--- Entry Controller ----*/

myApp.controller('EntryController', [  function(){
  console.log('in EntryController');
  var vm = this;

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

}]); // end controller
