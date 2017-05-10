(function () {
    'use strict';

    angular
      .module('app')
      .service('list', [List]);

    function List() {
        this.data = {   // mock data, would normally come from another source like a web service
            "List One": [
                {
                    name: "item one",
                    strike: true,
                    bold: false
                },
                {
                    name: "item two",
                    strike: false,
                    bold: true
                },
                {
                    name: "item three",
                    strike: false,
                    bold: false
                }
            ],
            "Grocery List": [
                {
                    name: "milk",
                    strike: false,
                    bold: true
                },
                {
                    name: "eggs",
                    strike: false,
                    bold: false
                },
                {
                    name: "butter",
                    strike: false,
                    bold: false
                }
            ],
            "To Do List": [
                {
                    name: "grocery shopping",
                    strike: true,
                    bold: false
                },
                {
                    name: "workout",
                    strike: true,
                    bold: false
                },
                {
                    name: "pay bills",
                    strike: false,
                    bold: false
                }
            ]
        };
        
        this.addList = function(listName) {
            if (listName in this.data)  // if the list already exists
                return false;
                
            this.data[listName] = [];
            return true;
        };
        
        this.removeList = function(listName) {
            return delete this.data[listName];
        };
        
        this.addItem = function(listName, item) {
            this.data[listName].push(item);
        };
        
        this.removeItem = function(listName, id) {
            console.log("list service remove function");
            //return delete this.data[listName][id];  // won't work
            this.data[listName].splice(id, 1);
        }
        
        
    }

})();