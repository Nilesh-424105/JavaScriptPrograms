// Object
let person = {
    first_name: 'Nilesh',
    last_name: 'Kotkar',

    getFunction: function () {
        return ("The name of the person is " +
            person.first_name + " " + person.last_name)
    },

    // from ES6
    sayHello () {
        console.log("hello !!");
    }
};

// delete person.last_name;
// person.first_name = 'ravi';

console.log(person.getFunction());
console.log(person['last_name']);
console.log(person.sayHello());
console.log(person)
console.log("================================================")

// this keyword
let obj = {
    a: 10,
    b: 20,
    add: function () {
        return this.a + this.b;
    }
};
console.log(" Addition: " + obj.add())
console.log("================================================")

// maximum value
let sample = {
    x: 100,
    y: 150,
    max: function () {
        if (this.x > this.y) {
            return this.x;
        } else {
            return this.y;
        }
    }
};
console.log("Maximum Number: " + sample.max())
console.log("================================================")

// objects

let Obj = {
    name: 'Nilesh',
    salary: '50000',
    tech: 'JS',
    'work exp': 1,
    laptop: {
        cpu: 'i7',
        ram: '4',
        brand: 'Asus'
    }

};

for (let key in Obj) {
    // console.log(key + " : " + Obj[key])
    console.log(key, Obj[key])
}
console.log("================================================")

// constructor

function Alien(name, tech) {
    this.name = name;
    this.tech = tech;
}

let alien1 = new Alien('Nilesh', 'JS');
let alien2 = new Alien('Shashi', 'Java');

alien1.tech = 'blockchain'

Alien.prototype.profile = "developer";
console.log(alien1)
console.log(alien2)
console.log("================================================")

// Math object used to called built-in functions

// let x = Math.round(4.7);
// let x = Math.ceil(4.7);
// let x = Math.floor(4.7);
// let x = Math.pow(2, 3);
// let x = Math.sqrt(16);
// let x = Math.PI;
// let x = Math.E;
// let x = Math.min(4, 7, 45, 78);
// let x = Math.max(4, 7, 45, 78);
// let x = Math.floor(Math.random() * 10)   // 0-9
// let x = Math.floor(Math.random() * 10) + 1  // 1-10
let x = Math.floor(Math.random() * (25 - 15)) + 15   // 15-25

console.log(x)
console.log("================================================")

// Date Function
// let y = new Date();   // current date
let y = new Date("jan 2018, 12 10:25:32")
// console.log(y.getFullYear());  // get year
// y.setFullYear(2020);    // setnew year
 y.setDate(y.getDate() + 50);   // to get date after 50 days

console.log(y)
console.log("================================================")

// new keyword used to create a object
let o = new Object();
o.name = "rakesh patil";
o.salary = 15000;
console.log(o)
console.log("================================================")

// getter and setter

let student = {
    name : "vijay",
    age : '25',

    // say : function(){
    //     return this.name.toUpperCase();
    // },

    // get getName(){
    //     return this.name.toUpperCase();
    // },

    set setName(n) {
        this.name = n.toUpperCase();
    }
}

student.setName = "Ajit";

// console.log(student.say());
// console.log(student.getName)
console.log(student)
console.log("================================================")

// nested object

let user = {
    id : '110',
    Email : 'nil4512@gmail.com',
    personalInfo : {
        name : "abhi",
        address : {
            city : 'dhule',
            state : 'Maharastra',
            country : 'India'
        }
    }
};

console.log(user)
    
