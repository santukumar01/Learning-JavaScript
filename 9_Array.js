// Array for the start
// resizable -> heap
// const myArr = [0, 1, 2, 3, 4, "santu", true];
// console.log(typeof myArr);  // object
// 0 baesd index
// shallow copy -> when you copy an  array you then you are sharing referece so that chaginh happen in origuinsl state

// aceess
// console.log(myArr[0]);

const arr = new Array(1, 2, 3, 4, 5, 6);
// console.log(typeof arr);  // object

// arr.push(8);  // at last
// console.log(arr);
// arr.pop();  // remove form the last
// console.log(arr);   

// arr.unshift(9) //add from start
// arr.shift() // removing from last
// console.log(arr);

// console.log(arr.includes(9)); // true  -> boolean
// console.log(arr.indexOf(9)); // indedx -> 0

//using join -> convert arr to string 

const myarr = arr.join();

// console.log(arr, typeof arr);  // object [ 9, 1, 2, 3, 4 ]
// console.log(myarr, typeof myarr, myarr[1]);  //string 9,1,2,3,4

//slice and splice  -> return arr 
//using -1 counting  from last
console.log(arr.slice(1, 4));  // [2, 3] -> arr object  // last element dost incldue 

console.log(arr);
const mysp = arr.splice(1, 4);  // last elemnt include // changes the original array as well remove the splice part
console.log("splice ", mysp);
console.log(arr);    // [1, 6]  // which are left after splice 


