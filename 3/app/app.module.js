(function () {
    'use strict';



    angular.module('app', [
        //angular
       'ngRoute',
       'ui.bootstrap'

    ])
    .config(['$routeProvider', function ($routeProvider) {

       $routeProvider

           .when('/', {
               templateUrl: 'app/pages/home/home.view.html',
               controller: 'Home as vm'
           })
           .when('/create_list', {
               templateUrl: 'app/pages/create_list/create_list.view.html',
               controller: 'CreateList as vm'
           })
           .otherwise({
               redirectTo: '/'
           });
       

    }])    
    .run(['$route', function($route)  {
        $route.reload();
    }]);


})();