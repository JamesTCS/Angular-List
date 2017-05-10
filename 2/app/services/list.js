(function () {
    'use strict';

    angular
      .module('app')
      .service('list', [List]);

    function List() {
        this.data = {   // mock data, would normally come from another source like a web service
            "List One": [
                "item one",
                "item two",
                "item three"
            ],
            "Grocery List": [
                "milk",
                "eggs",
                "butter"
            ],
            "To Do List": [
                "grocery shopping",
                "workout",
                "pay bills"
            ]
        };
        
        this.addList = function(listName) {
            if (listName in this.data)  // if the list already exists
                return false;
                
            this.data[listName] = [];
            return true;
        }
        
        this.removeList = function(listName) {
            return delete this.data[listName];
        }
        
        
    }

})();