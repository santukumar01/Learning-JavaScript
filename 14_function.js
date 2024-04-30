//defination of function
function myName() {  // scope of unctin
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("t");
    console.log("u");
}
// myName  -> refrance to the fuction doest print any thing
// myName();  //function exection  gives output


// function sumTwoNum(num1, num2) {
//     console.log(num1 + num2);
// }
// sumTwoNum() // NaN
// sumTwoNum(6, "a");// 6a
// sumTwoNum(6, null); //3
// sumTwoNum(6, undefined); // undefinded

//pleas do not use both toghter
//function as variable
const res = function () {
    console.log("hello res");
}
// console.log(res()); // hello res undefined
// console.log(res); //[Function: mufun]   only refreance
// console.log(typeof res); //function

// //function not stroring in a varibale
// function myfun() {
//     console.log("hello myfun");
// }
// console.log(myfun());  // hello myfun undefiund
// console.log(myfun);   //fuction refreace

//Both of Above are same

// function sumTwoNum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }
// const result1 = sumTwoNum(3, 8);

// console.log(result1);  // 11
// console.log(sumTwoNum);  // again refrance
//above function as a varible

// const sum = function (num1, num2) {
//     return num1 + num2;
// }

// let result = sum(3, 5);
// console.log(result);
// console.log(sum());  // number -> NaN
// console.log(sum);//[Function: sum]   variabe -> refrance 
function loginUse(username) {
    if (username === undefined) {   // (!usernae)
        console.log("plaese enter your username")
        return;
    }
    return `${username} just login`;

}

// console.log(loginUse("santu"));
// console.log(loginUse());  // string -> undeifend 


//default parameter 
function whoLoggedIn(username = "sam") {
    console.log(`${username} just loggeg in`);
}

// whoLoggedIn();  // undefied logged in when default argument  not given

// whoLoggedIn("santu"); // if parma notr given then sam is printed 

function num(num = 4) {
    console.log(`${num} is num`);
}
// num();  // undefined whe n def is not there
// num() // 4 is num when  def is there


//when we dont know the no of parameter in adavance
//rest opeartor


function p(num) {
    return num;
}
// console.log(p(2, 3, 4));  // only 2 printed

// function price(...num1) {
//     return num1;
// }

// console.log(price(200, 300, 4000))  // arr [ 200, 300, 4000 ]

function price(val1, val2, ...num1) {
    return num1;
}

// console.log(price(10, 20, 30, 40));   // num1  -> [30 , 40] ,  val1 -> 10 , val2 -> 20


//passing an object

const myobj = {
    name: "santu",
    age: 22
}

function printobj(anyobj) {
    return anyobj;  //anyobj refer to myobj
}

console.log(printobj(myobj)); //{ name: 'santu', age: 22 }
console.log(printobj(
    {
        name: "sanu",
        age: 18
    }
)); //{ name: 'sanu', age: 18 }



///passing arr to fuunction

const arr = [10, 20, 30];

function getsec(myarr) {
    return myarr[1];
}

console.log(getsec(arr));   // 20

console.log(getsec([1, 2, 3, 4, 5, 6]))  // 2








