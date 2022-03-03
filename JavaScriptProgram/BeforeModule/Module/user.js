let name = "Nilesh";
let age = 26;

import { withdraw } from "./account.js";

export default function(){
    console.log("User Default Function Called....")
}

function code(){
    console.log("Coding....");
    withdraw();
}

function cook(){
    console.log("Coking....")
}

export {name, code, age, cook};