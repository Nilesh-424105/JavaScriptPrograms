function sayHello() {
    console.log("Hello....");
}

function sayHi() {
    console.log("Hi....");
}

function add(num1, num2, callback) {
    console.log(num1 + num2);
    callback();
}

add(30, 5, sayHello);

add( 30, 5 , function () {
    console.log("Bye....");
});