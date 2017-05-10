(function () {
    'use strict'
    
    angular.module('app')
        .controller('EditList', ['$scope', 'list', '$routeParams', EditList]);
    
    function EditList($scope, list, $routeParams) {

        var vm = this;
        
        vm.itemName = "";  // user input, the name for a new item
        
        vm.bold = false; // user can bold the list item
        
        vm.lists = list.data;
        
        vm.listName = $routeParams.listName;
        
        vm.addItem = function() {
            console.log("add item pressed");
            list.addItem(vm.listName,
            {
                name: vm.itemName,
                strike: false,
                bold: vm.bold
            });
            vm.itemName = "";
            $scope.editForm.$setPristine();
        };
        
        vm.remove = function(listName, id) {
            list.removeItem(listName, id);
        };
    }
    
    
})();    