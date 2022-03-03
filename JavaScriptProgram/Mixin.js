let useFullMethod = {
    sayHi() {
        console.log("Hi....")
    },

    sayBye() {
        console.log("Bye....")
    }
}

class user {
    constructor() {
        this.name = "Vikas";
    }
}

class admin extends user {

}

Object.assign(admin.prototype, useFullMethod);

let admin1 = new admin();

console.log(admin1);