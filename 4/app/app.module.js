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
           .when('/view list/:listName', {
               templateUrl: 'app/pages/view_list/view_list.view.html',
               controller: 'ViewList as vm'
           })
           .when('/edit list/:listName', {
               templateUrl: 'app/pages/edit_list/edit_list.view.html',
               controller: 'EditList as vm'
           })
           .otherwise({
               redirectTo: '/'
           });
       

    }])    
    .run(['$route', function($route)  {
        $route.reload();
    }]);


})();