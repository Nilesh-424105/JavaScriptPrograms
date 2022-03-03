class Person {
    constructor(n,a) {
        this.name = n;
        this.age = a;
    }

    syaHi() {
        console.log("Hi....");
    }

    static sproperty = "something";

    static hello() {
        console.log("Hello....");
    }

}

let person1 = new Person("Harish", 27);
Person.hello();
console.log(Person.sproperty);
console.log(person1);