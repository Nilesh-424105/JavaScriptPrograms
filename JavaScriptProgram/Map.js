// Map

let map1 = new Map();
map1.set("Nilesh", "JS");
map1.set("Ravi", "Android");
map1.set("Shashi", "Developer");
map1.set("Nilesh", "Blockchain");

for (let [k, v] of map1) {
    console.log(k, " : ", v)
};
 console.log("========================================")

map1.forEach((v, k) => {
    console.log(k, " : ", v)
});
console.log("========================================")

// Map Function 

let arr = [2, 3, 4, 5, 6];

// by anonymous function
let arr1 = arr.map(function(val) {
    return val * 3;
});
console.log(arr1)

// by arrow function

let arr2 = arr.map((val) => val * 3);
console.log(arr2);
console.log("========================================")

