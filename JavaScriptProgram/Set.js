// set in JS => does not print duplicate value, don't have a index value
// it can have a unique value

let ajit = new Set('bookList');
console.log(ajit)             // only print unique char

let shu = new Set();
shu.add(3)
shu.add(4)
shu.add(3)
shu.add('Nilesh')
shu.add('pankaj')
shu.add('Ravi')

console.log(shu)

shu.forEach(n => {
    console.log(n)   // to print unique values
});

console.log(shu.has("Nilesh"))  // has checked value is available or not
