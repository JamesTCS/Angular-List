(function () {
    'use strict'
    
    angular.module('app')
        .controller('CreateList', ['$scope', CreateList]);
    
    function CreateList($scope) {
        console.log("another controller");
        
        var vm = this;
        
        vm.createList = function() {
            console.log("create Liest function");
        }
    }
    
    
})();    