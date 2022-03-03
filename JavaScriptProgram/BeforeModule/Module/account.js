let account_number = '7412585236';
let account_type= "Saving";

export default function(){
    console.log("Account Default Function Called....")
}

function withdraw() {
    console.log("Money deducted....");
}

function deposite() {
    console.log("Money Deposited....")
}

export { account_number, deposite, account_type, withdraw};