class emp {
    #name = "";   // private properties
    constructor(n) {
        this.#name = n;
    }

    #getName() {
        console.log(this.#name);
    }

    pubFun() {
        this.#getName();
    }
}

let emp1 = new emp("sanket");

console.log(emp1.pubFun());