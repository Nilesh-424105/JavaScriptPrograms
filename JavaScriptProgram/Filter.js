let arr = [2, 22, 13, 5, 6, 61, 23, 7];

// anonymous function
let arr1 = arr.filter(function(val) {
    return val > 10;
});

console.log(arr1);

// arrow function

let arr2 = arr.filter(val => val > 10);
console.log(arr2);
console.log("==========================================");

let team = [
    {
        name : "sachin",
        position : "JS"
    },
    {
        name : "Rajesh",
        position : "Java"
    },
    {
        name : "Sanket",
        position : "FullStack"
    },
    {
        name : "Shashi",
        position : "Java"
    },
    {
        name : "Arun",
        position : "Java"
    },
    {
        name : "Rajiv",
        position : "Java"
    },
]

let dev = team.filter(val => val.position == "Java");
console.log(dev);