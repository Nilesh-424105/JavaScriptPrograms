// arrays
//let values = new Array();   // defined a array
let values = [];

// push values in empty arrays
values.push(5)
values.push(7)
values.push(8)

console.log(values)
console.log("==================================================")

// array data types

let data1 = ['Navin', 5, { tech: 'JS' },
    function () { console.log("Hello JS") }]

console.log(data1)

data1[3]();
console.log("==================================================")

// Methods in arrays

let data2 = [5, 7, 8, 9, 4]
console.log("Number of Elements After Adding 2 in Last is: " + data2.push(2)) // add in last
console.log("Delete Last Element is: " + data2.pop())   // delete in last
console.log("Delete First Element is: " + data2.shift()) // delete in first
console.log("Number of Elements After Adding 1 in First is: " + data2.unshift(1)) // add in first
console.log("Replaced Element is: " + data2.splice(2, 2, 15, 14))  // replace 2 element from index 2
console.log("Element after slice is: " + data2.slice(2, 4)) // Print element between from index=2 to before index=4
console.log(data2)
console.log("==================================================")

// for of loop

let nums = []
nums[0] = 5;
nums[4] = 9;
for (let n of nums) {               // n-> values
    console.log("Value is: " + n)   // Print values
}
console.log("==================================================")

// for in loop

for (let key in nums) {               // key -> index
    console.log("Index is: " + key)   // Print index
}
console.log("==================================================")

// destructuring of array

let demo = [5, 7, 8, 9]

let [e, f, g, h] = demo
console.log(h)
console.log("==================================================")

// swap two numbers

let q = 5;
let w = 6;

[q, w] = [w, q]
console.log("Numbers After Swapping is: " + q, w)
console.log("==================================================")

// string of array

let eno = 'my Name Is Nilesh Kotkar developer'.split(' ')

let [z, u, ...v] = eno;
console.log(eno)
console.log(v)
console.log("==================================================")

// for each method

let devid = [40, 52, 45, 69, 78, 62]

devid.forEach((n, i, devid) => {
    console.log(n, i, devid)
     console.log(n * 2)
});
console.log("==================================================")

// array method fiter, map, reduce

let fog = [40, 52, 45, 69, 78, 62]

let rav = fog.filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((a, b) => a + b);
console.log(rav);
console.log("==================================================")