// function
// create a function
function greet() {
    console.log("Hello World")
}
// call a function
greet()
console.log("================================================")

// return function
function greeting() {
    return "Hello World!!!"
}

let str = greeting();
console.log("Print: " + str)
console.log("================================================")

// function expression
let add = function (num1, num2) {
    return num1 + num2
}
let sum = add
let res = sum(5, 6)
console.log("Addition: " + res)
console.log("================================================")

// arrow functions

let arrow = (user) => {
   return 'Hello ' + user
    
}

console.log("Using Arrow Functions: " + arrow('Nilesh'))

let addition = (Num1, Num2) => Num1 + Num2
let result = addition(9, 7)
console.log("Addition: " + result)
console.log("================================================")

// Recursion => calling a function by itself

let num = 1;
function show() {
    console.log("Hi", num);
    num ++;
    if (num <= 5)
        show();
}

show();
console.log("================================================")

// factorial of number by recursion

function fact(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

let n = 5;
let Res = fact(n)
console.log(`Factorial of ${n} is ${Res}`);

let s = (a=10,b) => a+b;
let re = s('',1);
console.log(re)
console.log("================================================")

// to get random value
function getRandom (min, max){
    let x = Math.floor(Math.random() * (max - min)) + min 
    return x;
}
console.log(getRandom(25, 15));
console.log("================================================")

// ES6 Features
// var:- declared it again with same name, can re-assign its value
// let:- cannot declared it again with same name, but can re-assign its value.
// const:- neither declared it again, nor can re-assign its value
var fun = 10;
var fun = 14;
console.log(fun)

let run = 50;
run = 100;
console.log(run)

const gun = 540;
console.log(gun)
console.log("================================================")
// default parameter
// if there is no any value given at the time of parameter calling then consinder default parameter

function talk(msg = "hi") {
    console.log(msg)
}
talk();
console.log("================================================")

// Rest Parameters

function addi(...args){
    let result = 0;

    for(i = 0; i < args.length; i++){
        result += args[i];
    }
    return result;
}
let ex = addi(2,4,5,8,10,11,10,50);
console.log(ex)
console.log("================================================")

// spread operator:- copied element of array in another array using ...array
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [...array1, ...array2];
console.log(array3);
console.log("================================================")

// for-of loop
let score = [88,98,75,85,95,97];

for(let c of score){
    console.log(c)
}

// Template Literal :- use backstick

let strr = `Hello

world`;
console.log(strr)

let row = "Ravindra";
console.log(`Hi Everyone my name is ${row}. Thank You.`);

let mul = 80;
console.log(`Multiplication of ${mul} by 5 is ${mul * 5}.`);
console.log("================================================")

// Array Destructuring
// 1] use sample
let book = ["Andvanse JS", 200, 150, ["Oracle", 2022]];

let[name, page, price, [publication, year]] = book;

console.log(year);

// 2] use array destructuring in function
function title(){
    // do something
    return ["Advanse JS", 150];
}

let [tech,pages] = title();
console.log(tech)
console.log("================================================")

// object destructuring

let bookList = {
    name1 : "Advanse JS",
    page1 : 200,
    public : { pub_name : "Oracle", year1 : 2022}
}

let { name1 : titles, page1, price1 = 500, public : {pub_name, year1}} = bookList;
console.log(titles)