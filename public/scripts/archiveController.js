/*---- Archive Controller ----*/

myApp.controller('ArchiveController', function(EntryService){
  console.log('in ArchiveController');
  var vm = this;

  vm.showEntries = function() {
    console.log('in showEntries');
    EntryService.getEntry().then(function() {
      vm.entries = EntryService.data;
      console.log('back in ArchiveController with:', vm.entries);
    });
  }; // end showEntries

}); // end controller
