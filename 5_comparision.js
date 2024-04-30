// console.log(2 > 2); // false

// console.log("ba" < "aa"); //  false
//com with string -> normal com  -> uses char table
// console.log("0" < "1"); // string com -> false
// console.log("1" < "a"); // string com -> false

//com bet number and string  // all value false
// console.log("ab" < 5);
// console.log("ab" > 5);
// console.log("ab" == 5);
// console.log("ab" <= 5);

//conbert string to number duting comparsion
// console.log("2" > 1); //true
// console.log("02" == 2); //true

// let score = undefined;   -> NaN
// let con = Number(score);
// console.log(con);
//in equality checker chages to number does not happen checks for actuall data
// console.log(null == 0);  // false
// console.log(null === 0);  // false
//null means compltly empty
//in comparision converting null to number gives 0
// console.log(null < 0);
// console.log(null > 0);
// console.log(null >= 0);

//undefine can also we assign
// let score = undefined;

//try to converting undefine into number but its not possible so all resulf false
// console.log(undefined < 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);
// console.log(undefined >= undefined);  //false
// console.log(undefined == undefined);  //true
// console.log(undefined === undefined);  //true

//=== and ==
// console.log(2 == "2");
// console.log(2 === "2"); // false

//primitive -> call by value
//string , number , BigInt , null , undefined , symbol , boolean

//refreance (Non primiive )
//Array ,  function  , Object

//javascript dynamically typed languague

// console.table([typeof 100, typeof 100.3]);  // [number , number]

//using symbol -> unique

// let Id = Symbol("123");
// let anotherid = Symbol("123");

//typedef Id  -> sybmol
// console.log(Id == anotherid);  // false -> value doesnt same
// console.log(Id === anotherid);  // false -> value + data donest same

// const BigNumber = 1983627954098667698076587690n;  // after adding
//if you not add n then convert it into e type and data type is number
// console.table([BigNumber, typeof BigNumber]); // [983627954098667698076587690n ,'bigint']

//typescrropt
// const score: Number = 100;

//non primitive type

//Array
// const myname = [1, "123", "santu", true];
// console.log(myname, typeof myname);  // [1, "123", "santu", true]; typedef -> [obejct]

//object // kay vlaue pair
// let myobj = {
//     name: "santu",
//     age: 22
// }
// console.log(typeof myobj, myobj, myobj.name); //object { name: 'santu', age: 22 } santu

//function
//in javscript treat all fuction as varible

// let myfun = function () {
//     // console.log("hello santu");
//     return 3;
// }

// myfun();
// console.log(typeof myfun); // function
// console.log(myfun()); // 1st line undefined , 2 nd line 3
// console.log(myfun); // [function : myfun]

// function myfun1() {
//     console.log("santu");
// }

// let myfun = function () {
//     console.log("hello");
//     myfun1();
// }

// console.log(myfun.myfun1);  // undeindes else this all are compilation error

//****************Memory********************
//Stack{Primitive}

// let myname = "santu kumar";
// let mysecname = myname;
// mysecname = "praduman";
// console.log(myname, mysecname);   //changes happens only in myname because copy of myname is given to mysecname

//Heap {Non - Promitive}

// let accountOne = {
//     name: "santu",
//     age: 23
// }
// let accountTwo = accountOne;
// accountTwo.name = "sanu";
// console.log(accountOne);  // changes refeltes on accoiuntOne also because refrenace of actual is provided to accountTwo  


