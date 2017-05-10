(function () {
    'use strict'
    
    angular.module('app')
        .controller('ViewList', ['$scope', 'list', '$routeParams', '$location', ViewList]);
    
    function ViewList($scope, list, $routeParams, $location) {
        console.log("view list controller");
        
        var vm = this;
        
        vm.lists = list.data;
        
        vm.listName = $routeParams.listName;
        
        vm.backBtn = function() {
            $location.path('/');
        };
    }
    
    
})(); 