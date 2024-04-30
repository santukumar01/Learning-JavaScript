
//using var is not a good idea
//in var only those printed who are the last -> global 
var c = 3000

let a = 20;
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;  // this var can be printed outside
    // console.log("inner", a); // local scope
}

// console.log(a);
// console.log(b);
// console.log(c);  // plaese do not use


//clousre in js
//child scope  can access parenet scope

function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username);
    }

    // console.log(website); // out of scope 
    two();  // printing  username
}
// one();


//**************intersting - hoisting *************//

console.log(addOne(5));  // execution -> mini hoisting

function addOne(num) {   // defination of function 
    return num + 1;
}
//below type of function can  be refered as expression vairble can hold function
// console.log(addTwo(5));  //gives error // connot be hoisted  ->may be because function here is as a var
// //varible -> function
// const addTwo = function (num) {
//     return num + 2;
// }



//NaN and undefined
function addone(num) {
    console.log(num + 1);   // NaN
    console.log(typeof num + 1);   // number -> NaN
}
addone();


//string 
function printUsername(username) {
    // console.log(username + 1);   // operrtion decides which output 
    console.log(username);  // undefined
    console.log(typeof username);  // undefined
}


printUsername(4);
printUsername();

//needs to learn clouser