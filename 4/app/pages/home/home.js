(function () {
    'use strict'
    
    angular.module('app')
        .controller('Home', ['$scope', 'list', Home]);
    
    function Home($scope, list) {
        console.log("home controller");
        
        var vm = this;
        
        vm.lists = list.data;
        
    }
    
    
})();    