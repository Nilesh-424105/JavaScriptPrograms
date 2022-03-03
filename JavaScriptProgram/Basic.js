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
console.log("===========================================")

// calculate area of circle
let r = 5
const pi = 3.14  
let area = pi * r * r
console.log("Area Of Circle is: " + area)
console.log("===========================================")

// concate two string
let s1 = 'Nilesh'
let s2 = 'kotkar'
console.log("Concatenation is: " + s1 + " " + s2)
console.log("===========================================")

// data types
// typeof operator returns the data type of its operand in the form of a string.
//1] number
let a = 9  
console.log(typeof a)

//2] string   
let user = 'Nilesh'
console.log(typeof user)   

//3] boolean type
let bool = 5 < 6
console.log(bool)
console.log(typeof bool)

// object--> null
let s = null
console.log(typeof s)

// undefined
let d
console.log(typeof d)
console.log("===========================================")

let n1 = 5
//let res=Math.pow(n1,3)
let res = n1 ** 3
console.log(`Cuberoot of ${n1} is ${res}`)
console.log("===========================================")

// "===" :- strong equality operator:- Compare values and its datatypes also
let x = ''
let y = true
let data = x === y   
console.log(data)
console.log("===========================================")

// to check number is even or odd using if-else
let m = 7
if (m % 2 == 0) {
    console.log("Number is Even")
} else {
    console.log("Number is odd")
}
console.log("===========================================")

// to check number is even or odd using ternary operator
let n = 5
let result = n % 2 === 0 ? "Even" : "Odd"
console.log(result)
console.log("===========================================")

// addition of two numbers using templates
let num1 = 4
let num2 = 5
res = num1 + num2
console.log("Addition of " + num1 + " and " + num2 + " is " + res)
console.log(`Addition of ${num1} and ${num2} is ${res}`);
console.log("===========================================")

//Type Conversion:- convert one type of variable into another type
// 1] automatic converion
let type = "5" + null;   // convert null type into string automatic
console.log(type)
console.log(typeof type)
console.log("===========================================")

// 2] Conversion Using function
// a] string()
let t = 42;
console.log(typeof t)
let t1 = String(t)
//console.log(t1)
console.log(typeof t1)

let u = true;
console.log(typeof u)
let u1 = String(u)
//console.log(u1)
console.log(typeof u1)
console.log("===========================================")

// b] Number()
let q = "42";
console.log(typeof q)
let q1 = Number(q)
//console.log(q1)
console.log(typeof q1)

let w = true;
console.log(typeof w)
let w1 = Number(w)
//console.log(w1)
console.log(typeof w1)
console.log("===========================================")

// c] boolean()
let k = 42;
console.log(typeof k)
let k1 = Boolean(k)
//console.log(k1)
console.log(typeof k1)

let l = "Hello";
console.log(typeof l)
let l1 = Boolean(l)
//console.log(l1)
console.log(typeof l1)