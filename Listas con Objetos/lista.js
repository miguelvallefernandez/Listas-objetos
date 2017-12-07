"use strict";

function MyError(message) {
    this.name = 'Error';
    this.message = message || 'There is an error';
    this.stack = (new Error()).stack;
}


MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;


function Person(name, surname) {
    this.name = name || "Unknown";
    this.surname = surname || "Unknown";
}

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

    this.add = function (elem) { //Esto lo he hecho para no tener que poner try-catch cada vez que lo ejecute
        try {
            if (this.isFull() == true) {
                throw new Error("List if full");
            }
            else {
                if (elem instanceof Person) {
                    this.list.push(elem);
                    return this.size();
                }
                else {
                    throw new Error("This object is not a person");
                }
            }
        }
        catch (e) {
            console.log(e.name + ": " + e.message);
        }
    }

    this.addAt = function (elem, index) { //Esto lo he hecho para no tener que poner try-catch cada vez que lo ejecute
        try {
            if (this.isFull() == true) {
                throw new Error("List if full");
            }
            else {
                if (elem instanceof Person) {
                    this.list.splice(index, 0, elem);
                    return this.size();
                }
                else {
                    throw new Error("This object is not a person");
                }
            }
        }
        catch (e) {
            console.log(e.name + ": " + e.message);
        }
    }


    this.get = function (index) {
        if (index > this.size() || index < 0) {
            throw new Error("Index out of limit");
        }
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
        if (elem instanceof Person) {
            var i = 0;
            var find = -1;
            for (i = 0; i < this.size(); i++) {
                if (this.list[i].name === elem.name || this.list[i].surname === elem.surname) {
                    find = i;
                }
            }
            return find;
        }
        else {
            throw new Error("Element is not a Person");
        }

    }
    this.lastIndexOf = function (elem) {
        if (elem instanceof Person) {
            var i = 0;
            var find = -1;
            for (i = this.size(); i > 0; i--) {
                if (this.list[i].name === elem.name || this.list[i].surname === elem.surname) {
                    find = i;
                }
            }
            return find;
        }
        else {
            throw new Error("Element is not a Person");
        }
    }

    this.capacity = function () {
        return this.max_length;
    }
    this.clear = function () {
        this.list = [];
    }
    this.firstElement = function () {
        if (this.isEmpty()) {
            throw new Error("List is empty");
        }
        return this.list[0];
    }
    this.lastElement = function () {
        if (this.isEmpty()) {
            throw new Error("List is empty");
        }
        return this.list[this.size()];
    }
    this.remove = function (index) {
        if (index > this.size() || index < 0) {
            throw new Error("Index out of limit");
        }
        var elem = this.list[index];
        this.list.splice(index, 1);
        return elem;
    }

    this.removeElement = function (elem) {
        if(elem instanceof Person){
            this.remove(this.indexOf(elem));
        }
        else{
            throw new Error("Element is not a Person");
        }
        return true;
    }


    this.set = function (elem, index) {
        if (elem instanceof Person) {
            var deleted = this.list[index];
            this.list.splice(index, 1, elem);
            return deleted;
        }
        else {
            throw new Error("Element is not a Person");
        }
        if (index > this.size() || index < 0) {
            throw new Error("Index out of limit");
        }
    }
}


function test() {
    console.log("CREATE LIST & ELEMENTS...")
    var list = new List(5);

    console.log(list.add(new Person("Miguel", "Valle")));
    console.log(list.add(new Object("a")));
    console.log(list.add(new Person("Alberto", "Fernandez")));
    console.log(list.add(new Person("Jesus", "Rubio")));
    console.log(list.add(new Person()));
    console.log(list.add(new Person("Rodrigo", "Rodriguez")));
    console.log(list.add(new Person("Este", "Da Error")));


    console.log("IS EMPTY...");
    console.log(list.isEmpty());

    console.log(list.toString());

    console.log("IS FULL...");
    console.log(list.isFull());

    console.log("REMOVE ELEMENT...");
    try {
        console.log(list.remove(4));
    }
    catch (e) {
        console.log(e.name + ": " + e.message);
    }


    console.log("ADDAT ELEMENT...");
    console.log(list.addAt(new Person("Jhonnie", "Walker"), 3));
    console.log(list.toString());

    console.log("INDEX OF...");
    try {
        console.log(list.indexOf("Walker"));
    }
    catch (e) {
        console.log(e.name + ": " + e.message);
    }

    console.log("GET...");
    try {
        console.log(list.get(3));
    }
    catch (e) {
        console.log(e.name + ": " + e.message);
    }

    console.log("SET...");
    try {
        var person7 = new Person("Pajaro", "Loco");
        console.log(list.set(person7, 4));
    }
    catch (e) {
        console.log(e.name + ": " + e.message);
    }

    console.log(list.toString());
}


var list = new List(6);


function myFunctionAdd() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    list.add(new Person(name, surname));
    result.innerHTML = list.toString();
}

function myFunctionRemove() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var param = new Person(name, surname);
    list.removeElement(param);
    result.innerHTML = list.toString();
}

function myFunctionIndexOf() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var per = new Person(name, surname);
    result.innerHTML = list.indexOf(per);
}

function myFunctionLastIndexOf() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var per = new Person(name, surname);
    result.innerHTML = list.lastIndexOf(per);
}
