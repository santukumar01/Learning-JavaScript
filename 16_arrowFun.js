//this and arrow function

//this refer current contex -> scope

// const user = {
//     name: "santu",
//     age: 23,
//     //function inside object should only be defined define as key value pair
//     myfun: function fun() {
//         console.log(`${this.name} , has logged in`);
//     }
// }



// user.greetinng = function () {
// console.log("hrllo")
// }

// console.log(user);

// user.myfun();
// user.greetinng;  // doest give any out put 
// console.log(user.greetinng());   // hello // undefined
// console.log(typeof user.greetinng);   //fuinction 
// console.log(user.greetinng);   //fuinction  refereance    //[Function (anonymous)]
// user.fun;  // doest not gives error nor output

// user.printMsg = function (name) {
//     console.log(`${this.name}  has just logged in`);
// }

// user.printMsg();  // santu has just logged in | this keyword
// user.printMsg("sonu")  // same output shown

// user.name = "sonu";  // user name chnge to sonu
// user.printMsg();  // sonu has just logged in  


const user = {
    username: "santu Kumar",
    age: 23,

    greeting: function () {
        console.log(`${this.username} has logged in`);
        console.log(this);

        console.log(typeof this);  // object
    }

}
// console.log(user);  // { username: 'santu Kumar', age: 23, greeting: [Function: greeting] }
// user.greeting();  //santu Kumar has logged in //{ username: 'santu Kumar', age: 23, greeting: [Function: greeting] }
// user.username = "sonu";
// user.greeting(); //{ username: 'sonu', age: 23, greeting: [Function: greeting] }
// console.log(user);

// below can happen only in noode envirmont  
// console.log(this)  // {}   // refer to empty object

//but in brower this refer to window objct



//function and this
//cant use let and var with this
// function chai() {
//     // let username = "hitesh";  // undefinṇed
//     var username = "santu";   //undeined
//     // console.log(this);   // too many ouputṇ
//     console.log(this.username);
// }

// const chai = (username) => {
//     console.log(this.username)  // undefined
// }

// chai("xty");

//this should not be used inside function


//arrow function

// function addTwo(num1, num2) {
//     return num1 + num2;
// }

// const addTwo = function (num1, num2) {
//     return num1 + num2;
// }
//arrow function -> varible 
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//implecit return 
// const addTwo = (num1, num2) => num1 + num2;  // all good

//explicit return useing keyword return 
// const addTwo = (num1, num2) => {return num1 + num2};  // if you use {} then you have to use return keywoird

// const addTwo = (num1, num2) => (num1 + num2);  // Note uses : () doest need to use return keyword


// console.log(addTwo);  // [Function : addTwo]
// console.log(addTwo(3, 5));  // 8
// console.log(addTwo());  // NaN
// console.log(addTwo(3,));  // NaN


const addTwo = () => ({ username: "santu" })

    // console.log(addTwo());  //for  return object use {} inside ();


    //immediately invoked function expression (IIFE)
    // used for global scope pollution prevent 
    // function conncetion() {
    //     console.log("connected");
    // }

    // conncetion();

    //outer smaller baracket returen 
    // (
    //     function conncetion() {

    //         //named IIFE
    //         console.log("connected");
    //     }
    // )();  // execution  //semil colon used plaese 
    // //arrow function
    // (() => {
    //     console.log("db connected");
    // })();

    // //argumnt IIFE
    // ((username) => {
    //     console.log(`hi ,  ${username}`);
    // })("snatu");


    // function outer() {
    //     username = "santu";
    //     (() => (
    //         console.log(`hi ${username}`)
    //     ))(username);
    // }


    (function () {
        var x = 10;  // This variable 'x' is local to the IIFE
        console.log(x);  // This will log 10
    })();
// console.log(x);  // This would result in an error because 'x' is not defined in this scope
// (function () {
//     var b = 10;
//     console.log(b);  // Outputs 10
// })();

//object and funtion
const userStand = {
    name: "santu",
    age: 18
}

// function printObj(user) {
//     console.log(user);
// })

// printObj(userStand);

//returning a objkect from object 
const myfun = () => ({ username: " santu" })
console.log(myfun());





