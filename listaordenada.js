"use strict";

function MyError(message) {
    this.name = 'Error';
    this.message = message || 'There is an error';
    this.stack = (new Error()).stack;
}


MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;


function Person(surname, name) {
    this.surname = surname || "Unknown";
    this.name = name || "Unknown";
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
            finalText += this.list[i].surname + " " + this.list[i].name + ", ";
        }
        return finalText;
    }
    this.indexOf = function (elem) {
        if (elem instanceof Person) {
            var i = 0;
            var find = -1;
            for (i = 0; i < this.size(); i++) {
                if (this.list[i].name == elem || this.list[i].surname == elem) {
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
                if (list[i].name == elem || list[i].surname == elem) {
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
        if (elem instanceof Person) {
            this.remove(this.indexOf(elem));
            return true;
        }
        else {
            throw new Error("Element is not a Person");
        }
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
    try{
        console.log(list.remove(4));
        console.log(list.toString());
    }
    catch (e){
        console.log(e.name + ": " + e.message);
    }


    console.log("INDEX OF...");
    try{
        console.log(list.indexOf("Jesus"));
    }
    catch (e){
        console.log(e.name + ": " + e.message);
    }


    console.log("GET...");
    console.log(list.get(3));

}

test();