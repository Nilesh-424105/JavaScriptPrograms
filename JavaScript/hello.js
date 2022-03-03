// Print heloworld
console.log("Hello world");

// var:- declared it again with same name, can re-assign its value
// let:- cannot declared it again with same name, but can re-assign its value.
// const:- neither declared it again, nor can re-assign its value
let num = 4  
console.log(num)

num = 9
console.log(num)

let userName = 'Nilesh'
console.log(userName)

// calculate area of circle
let r = 5
const pi = 3.14  
let area = pi * r * r
console.log(area)

// data types
let a = 9      //1] number
let user = 'Nilesh'     //2] string

console.log(typeof user)

let s1 = 'Nilesh'
let s2 = 'kotkar'
console.log(s1 + " " + s2)
//3] boolean type
let bool = 5 < 6
console.log(bool)

// object--> null
let s = null
console.log(typeof s)

// undefined
let d
console.log(typeof d)

let n1 = 5
//let res=Math.pow(n1,3)
let res = n1 ** 3
console.log(res)

let x = ''
let y = false
let data = x === y
console.log(data)

let m = 7

if (m % 2 == 0) {
    console.log("Number is Even")
} else {
    console.log("Number is odd")
}

let n = 5
let result = n % 2 === 0 ? "Even" : "Odd"
console.log(result)

let num1 = 4
let num2 = 5
res = num1 + num2

console.log("Addition of " + num1 + " and " + num2 + " is " + res)
console.log(`Addition of ${num1} and ${num2} is ${res}`);

// objects

let input = 'name'
let obj = {
    name: 'Nilesh',
    salary: '50000',
    tech: 'JS',
    'work exp': 1,
    laptop: {
        cpu: 'i7',
        ram: '4',
        brand: 'Asus'
    }

}

for (let key in obj) {
    console.log(key, obj[key])
}

// function
// create a function
function greet() {
    console.log("Hello World")
}
// call a function
greet()

// return function
function greeting() {
    return "Hello World!!!"
}

let str = greeting();
console.log(str)

// function expression
let add = function (num1, num2) {
    return num1 + num2
}
let sum = add
let resu = sum(5, 6)
console.log(resu)

// arrow functions

let arrow = (user) => {
    console.log('Hello ' + user)
    return 1
}

console.log(arrow('Nilesh'))

let addition = (Num1, Num2) => Num1 + Num2
let re = addition(9, 7)
console.log(re)

// constructor

function Alien(name, tech) {
    this.name = name;
    this.tech = tech;
}

let alien1 = new Alien('Nilesh', 'JS');
let alien2 = new Alien('Shashi', 'Java');

alien1.tech = 'blockchain'
console.log(alien1)
console.log(alien2)

// arrays
//let values = new Array();   // defined a array
let values = [];

// push values in empty arrays
values.push(5)
values.push(7)
values.push(8)

console.log(values)

// array data types

let data1 = ['Navin', 5, { tech: 'JS' },
    function () { console.log("Hello JS") }]

console.log(data1)

data1[3]();

// Methods in arrays

let data2 = [5, 7, 8, 9, 4]
console.log(data2.push(2)) // add in last
console.log(data2.pop())   // delete in last
console.log(data2.shift()) // delete in first
console.log(data2.unshift(1)) // add in first
console.log(data2.splice(2, 2, 15, 14))
console.log(data2)

// for of loop

let nums = []
nums[0] = 5;
nums[99] = 9;
for (let n of nums) {
    console.log(n)
}

// for in loop

for (let key in nums) {
    console.log(key)
}

// destructuring of array

let demo = [5, 7, 8, 9]

let [e, f, g, h] = demo
console.log(h)

// swap two numbers

let q = 5;
let w = 6;

[q, w] = [w, q]
console.log(q, w)

// string of array

let eno = 'my Name Is Nilesh Kotkar developer'.split(' ')

let [z, u, ...v] = eno;
console.log(eno)
console.log(v)

// for each method

let devid = [40, 52, 45, 69, 78, 62]

devid.forEach((n, i, devid) => {
    console.log(n, i, devid)
    //  console.log(n*2)
});

// array method fiter, map, reduce

let fog = [40, 52, 45, 69, 78, 62]

let rav = fog.filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((a, b) => a + b);
console.log(rav);

// set in JS => does not print duplicate value, don't have a index value
// it can have a unique value

let ajit = new Set('bookList');
console.log(ajit)

let shu = new Set();
shu.add(3)
shu.add(4)
shu.add(3)
shu.add('Nilesh')
shu.add('pankaj')
shu.add('Ravi')

console.log(shu)

shu.forEach(n => {
    console.log(n)
});

console.log(shu.has("Nilesh"))  // has checked value is available or not

// Map

let map = new Map();
map.set("Nilesh", "JS");
map.set("Ravi", "Android");
map.set("Shashi", "Testing")
map.set("Nilesh", "Blockchain")

for (let [k, v] of map) {
    console.log(k, " : ", v)
}

map.forEach((v, k) => {
    console.log(k, " : ", v)
})

// Recursion => calling a function bu itself

let nu = 1;
function show() {
    console.log("Hi", nu);
    nu++;
    if (nu <= 5)
        show();
}

show();

// factorial of number by recursion

function fact(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

let N = 5;
let Res = fact(N)
console.log(Res)