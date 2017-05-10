(function () {
    'use strict'
    
    angular.module('app')
        .controller('Home', ['$scope', 'list', Home]);
    
    function Home($scope, list) {
        console.log("home controller");
        
        var vm = this;
        
        vm.lists = list.data;
        
        vm.remove = function(listName, id) {
            console.log("home controller remove function");
            list.removeItem(listName, id);
        }
    }
    
    
})();    