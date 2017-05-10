(function () {
    'use strict'
    
    angular.module('app')
        .controller('CreateList', ['$scope', 'list', CreateList]);
    
    function CreateList($scope, list) {

        var vm = this;
        
        vm.listName = "";  // user input, a name for a new list
        
        vm.lists = list.data;
        
        vm.createList = function() {
            console.log("create list pressed");
            if( !list.addList(vm.listName) ) // if list could not be created
                alert("List name already exists");
            else {
                $scope.listForm.$setPristine();
                vm.listName = null; // clear the list name field
                //vm.listForm.$setPristine();
                
            }
        }
        
        vm.removeList = function(listName) {
            list.removeList(listName);
            // May seem weird to have this little function as an intermediary from the view to the list service
            // But I think it looks nicer and gives us another handle for many different possible events or situations
            // Here we can manipulate the view after deletion, notify the user, handle erorrs, play a tone or animation etc...
        }
    }
    
    
})();    