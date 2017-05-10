(function() {
    'use strict'
    angular.module('app')
        .directive('listItem', [ListItem]);
    
    function ListItem() {
        return {
            templateUrl: "app/directives/list_item/list_item.html",
            restrict: 'E',
            transclude: true,
            scope: {
                edit: '@',
                bold: '<',
                strike: '=',
                remove: '&?'
            },
            
            link: function (scope, element, attributes) {
                if(attributes["edit"] == "yes")
                    scope.editable = true;
                else
                    scope.editable = false;
            },
            
            controller: ['$scope', function ($scope) {
                
                $scope.strikeOut = function() {
                    $scope.strike = !$scope.strike;
                };
                
                $scope.removeBtn = function() {
                    $scope.remove();
                }
            }]
        }
    }
})();