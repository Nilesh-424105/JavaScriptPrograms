class emp {
    constructor(n) {
        this.name = n;
    }

    msg() {
        console.log("Hi....");
    }
}

class manager extends emp {
    constructor(n, d) {
        super(n);
        this.department = d;
    }

    msg() {
        console.log("Hello....");
    }

    info() {
        super.msg();  // parent class method
        this.msg();   // current class method
        console.log(this.name + " is manager of department of " + this.department)
    }
}

let man = new manager("Nikhil", "Web Development");

console.log(man);
console.log(man.info());
