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
        return this.size();
    }
    this.addAt = function (elem, index) {
        this.list.splice(index, 0, elem);
        return this.size();
    }
    this.get = function (index) {
        return this.list[index];
    }
    this.toString = function () {

        var finalText = "";
        for (var i = 0; i < this.size(); i++) {
            finalText += this.list[i].name + " " + this.list[i].surname + ", ";
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
    this.set = function (elem, index) {
        var deleted = this.list[index];
        this.list.splice(index, 1, elem);
        return deleted;
    }
}


function Person(name, surname) {
    this.name = name || "Unknown";
    this.surname = surname || "Unknown";
}


console.log("CREATE LIST & ELEMENTS...")
var list = new List(5);
console.log(list.add(new Person("Miguel", "Valle")));
console.log(list.add(new Person("Alberto", "Fernandez")));
console.log(list.add(new Person("Jesus", "Rubio")));
console.log(list.add(new Person()));
console.log(list.add(new Person("Rodrigo", "Rodriguez")));


console.log("IS EMPTY...");
console.log(list.isEmpty());

console.log(list.toString());

console.log("IS FULL...");
console.log(list.isFull());

console.log("REMOVE ELEMENT...");
console.log(list.remove(4));

console.log("ADDAT ELEMENT...");
console.log(list.addAt(new Person("Jhonnie", "Walker"), 3));
console.log(list.toString());

console.log("INDEX OF...");
console.log(list.indexOf("Walker"));

console.log("GET...");
console.log(list.get(3));

console.log("SET...");
var person7 = new Person("Pajaro", "Loco");
console.log(list.set(person7, 4));
console.log(list.toString());

/*
var max_length = 6;

function create() {   //Crea una lista de tamaño "max_length" y la rellena de NaN
    var list = [];
    return list;
}

function isEmpty(list) {
    var empty = false;
    if (isNaN(list[0])) {
        empty = true;
    }
    return empty;
}

function isFull(list) {
    var full = false;
    if (!isNaN(list[max_length - 1])) {
        full = true;
    }
    return full;
}

function size(list) {
    return list.length;
}


function add(list, elem) {
    if (isNaN(elem)) {
        throw "Element is not a number";
    }
    if (isFull(list)) {
        throw "List is full";
    }
    list.push(elem);
    return size(list);
}

function addAt(list, elem, index) {
    if (isNaN(elem)) {
        throw "Element is not a number";
    }
    if (isFull(list)) {
        throw "List is full";
    }
    if (index < 0 || index > size(list)) {
        throw "Out of the limit";
    }
    list.splice(index, 0, elem);
}


function get(list, index) {
    if (index < 0 || index > size(list)) {
        throw "Out of the limit";
    }
    return list[index];
}


function toString(list) {
    return list.toString();
}

function indexOf(list, elem) {
    if (isNaN(elem)) {
        throw "Element is not a number";
    }
    return list.indexOf(elem);
}

function lastIndexOf(list, elem) {
    if (isNaN(elem)) {
        throw "Element is not a number";
    }
    return list.lastIndexOf(elem);
}


function remove(list, index) {
    var deleted = list[index];
    if (index < 0 || index > size(list)) {
        throw "Out of the limit";
    }
    list.splice(index, 1);
    return deleted;
}

function removeElement(list, elem) {
    if (isNaN(elem)) {
        throw "Element is not a number";
        return false;
    }
    remove(list, indexOf(list, elem));
    return true;
}


function firstElement(list) {
    if (isEmpty(list)) {
        throw "List is empty";
    }
    else {
        return list[0];
    }

}

function lastElement(list) {
    if (isEmpty(list)) {
        throw "List is empty";
    }
    else {
        return list[size(list) - 1];
    }
}

function set(list, elem, index) {
    var deleleted = list[index];
    if (isNaN(elem)) {
        throw "Element is not a number";
    }
    if (index < 0 || index > size(list)) {
        throw "Out of the limit";
    }
    list.splice(index, 1, elem);
    return deleleted;
}

function test() {

    var list = create();

    console.log("IS EMPTY: ");
    try {
        console.log(isEmpty(list));
    }
    catch (error) {
        console.log(error);
    }


    console.log("ADD:");
    try {
        add(list, 1);
        add(list, 2);
        add(list, 3);
        add(list, 4);
        add(list, 5);
    }
    catch (error) {
        console.log(error);
    }


    console.log(list);


    console.log("ADD AT: ");
    try {
        addAt(list, 8, 2);
    }
    catch (error) {
        console.log(error);
    }

    console.log(list);

    console.log("GET:");
    try {
        console.log(get(list, 2));
    }
    catch (error) {
        console.log(error);
    }

    console.log("TO STRING: ")
    try {
        console.log(toString(list));
    }
    catch (error) {
        console.log(error);
    }

    console.log("INDEXOF: ");
    try {
        console.log(indexOf(list, 8));
    }
    catch (error) {
        console.log(error);
    }

    console.log("LASTINDEXOF: ");
    try {
        console.log(lastIndexOf(list, 8));
    }
    catch (error) {
        console.log(error);
    }

    console.log("REMOVE: ");
    try {
        console.log(remove(list, 2));
    }
    catch (error) {
        console.log(error);
    }

    console.log("REMOVE ELEMENT: ");
    try {
        console.log(removeElement(list, 2));
    }
    catch (error) {
        console.log(error);
    }

    console.log("SET: ");
    try {
        console.log(set(list, 8, 1));
    }
    catch (error) {
        console.log(error);
    }
    console.log(list);

}

var list;

function myFunctionCreate() {
    list = create();
}

function myFunctionAdd(){
    var elem = document.getElementById("introduce").value;
    add(list,elem);
    result.innerHTML = list;
}

function myFunctionRemove(){
    var elem = document.getElementById("introduce").value;
    removeElement(list,elem);
    result.innerHTML = list;
}

function myFunctionIndexOf(){
    var elem = document.getElementById("introduce").value;
    result.innerHTML = indexOf(list,elem);
}

function myFunctionLastIndexOf(){
    var elem = document.getElementById("introduce").value;
    result.innerHTML = lastIndexOf(list,elem);
}

*/