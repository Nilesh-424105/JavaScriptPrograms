// Prototypes

// function Person(first, last, a) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = a;
// }

// Person.prototype.fullName = function () {
//     console.log(this.firstName + " " + this.lastName);
// }

// let person1 = new Person("ravi", "pate", 27);
// let person2 = new Person("shashi", "takur", 30);

// console.log(person1.fullName());
// console.log(person2)
console.log("===========================================")

// Prototypal Inheritance

function Creature(ls){
    this.lifeSpan = ls;
}

Creature.prototype.Breath = function(){
    console.log("Breathing....")
}

function Person(first, last, a) {
    this.firstName = first;
    this.lastName = last;
    this.age = a;
}

Person.prototype.__proto__ = Object.create(Creature.prototype);

Person.prototype.fullName = function () {
    console.log(this.firstName + " " + this.lastName);
}

let person1 = new Person("ravi", "pate", 27);
let person2 = new Person("shashi", "takur", 30);

console.log(person1.Breath());
console.log(person2)