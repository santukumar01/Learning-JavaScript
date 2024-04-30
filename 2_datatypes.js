//learn about data types

"use strict";  //treat all js code as newer version

// alert(3 + 3);  // alert is not defined in nodejs

// console.log(3 + 3) console.log("santu") //gives error when write in same line without semi colon

//primitive data type  -> 7 

//number => 2 to power 53
//bigint =>
//string => "" / ''
//boolean => true/ false


//null  =>  standalone value 
//undefined => which is not assign
//symbol => mostly used for uniquestion

let account = null; // something that is null 
let accountId  // undefined

//undefined can also be assigned
accountId = undefined;

console.table([account, accountId]);

// object
// under typedef only last parameter conunt
// console.table([typeof (accountId, null, undefined, null)]);
console.log(typeof null);   // object
console.log(typeof undefined);   // undefinded

// console.log(2 + 2, 5 + 5);  // but this is printing all
