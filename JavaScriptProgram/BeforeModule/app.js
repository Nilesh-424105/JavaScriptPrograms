import * as usr from './Module/user.js';
console.log(usr.name);
usr.code();
console.log("=========================================");

import { default as dg, age, cook} from './Module/user.js';
console.log(age);
cook();
dg();
console.log("=========================================");

import * as acc from './Module/account.js';
console.log(acc.account_number);
acc.deposite();
console.log("=========================================");

import { default as fg, account_type, withdraw as wd} from './Module/account.js';
console.log(account_type);
wd();
fg();



