"use strict";


function List(length) {
    this.max_length = length || 3;
    this.list = [];

    //FUNCTIONS
    this.size = function () {
        return this.list.length;
    }

    this.isEmpty = function () {
        if (this.size() > 0) {
            return false;
        }
        else {
            return true;
        }
    }
    this.isFull = function () {
        if (this.size() == this.max_length) {
            return true;
        }
        else {
            return false;
        }
    }

    this.add = function (elem) {

        this.list.push(elem);

        this.list.sort(function (a, b) {
            if (a.surname > b.surname) {
                return 1;
            }
            if (a.surname < b.surname) {
                return -1;
            }
            else {
                if (a.name > b.name) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
        })

        return this.size();

    }
    this.get = function (index) {
        return this.list[index];
    }
    this.toString = function () {

        var finalText = "";
        for (var i = 0; i < this.size(); i++) {
            finalText += this.list[i].surname + " " + this.list[i].name + ", ";
        }
        return finalText;
    }
    this.indexOf = function (elem) {
        var i = 0;
        var find = -1;
        for (i = 0; i < this.size(); i++) {
            if (this.list[i].name == elem || this.list[i].surname == elem) {
                find = i;
            }
        }
        return find;

    }
    this.lastIndexOf = function (elem) {
        var i = 0;
        var find = -1;
        for (i = this.size(); i > 0; i--) {
            if (list[i].name == elem || list[i].surname == elem) {
                find = i;
            }
        }
        return find;
    }
    this.capacity = function () {
        return this.max_length;
    }
    this.clear = function () {
        this.list = [];
    }
    this.firstElement = function () {
        return this.list[0];
    }
    this.lastElement = function () {
        return this.list[this.size()];
    }
    this.remove = function (index) {
        var elem = this.list[index];
        this.list.splice(index, 1);
        return elem;
    }
    this.removeElement = function (elem) {
        this.remove(this.indexOf(elem));
        return true;
    }
}


function Person(surname, name) {
    this.surname = surname || "Unknown";
    this.name = name || "Unknown";
}


console.log("CREATE LIST & ELEMENTS...")
var list = new List(5);


console.log(list.add(new Person("Valle", "Miguel")));
console.log(list.add(new Person("Fernandez", "Alberto")));
console.log(list.add(new Person("Rubio", "Jesus")));
console.log(list.add(new Person("Valle", "Daniel")));
console.log(list.add(new Person("Rodriguez", "Rodrigo")));


console.log("IS EMPTY...");
console.log(list.isEmpty());

console.log(list.toString());

console.log("IS FULL...");
console.log(list.isFull());

console.log("REMOVE ELEMENT...");
console.log(list.remove(4));


console.log("INDEX OF...");
console.log(list.indexOf("Jesus"));


console.log("GET...");
console.log(list.get(3));

