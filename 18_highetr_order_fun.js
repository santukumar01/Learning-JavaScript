//higher otrder function for array

//for of

// let arr = [1, 2, 3, 4, 5];

//for of
// for (const i of arr) { //value
//     console.log(i);
// }

// const str = "santu Kumar";

// for (const i of str) {
//     console.log(i);   //value 
// }

//map => key : value pair
//maitain the given order
const map = new Map();
map.set("in", "india")
map.set("aus", "austrlia")
map.set("ger", "germany")
map.set("in", "india")

// console.log(map);  //{ 'in' => 'india', 'aus' => 'austrlia', 'ger' => 'germany' }
// for (const [key] of map) {
//     console.log(key);
// }
// in
// aus
// ger

// for (const key of map) {
//     console.log(key);
// }

// [ 'in', 'india' ]
// [ 'aus', 'austrlia' ]
// [ 'ger', 'germany' ]

//printing key

// for (const [key] of map) {
//     console.log(key);
// }
// in
// aus
// ger
//printing value
// for (const [key] of map) {
//     console.log(map.get(key));
// }
// india
// austrlia
// germany

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }
// in :- india
// aus :- austrlia
// ger :- germany

const myobject = {
    name: "santu",
    age: 26
}
// myobject is not iterable  -> gives error -> cannot used by for of loop
// for (const [key, value] of myobject) {
//     console.log(key, value);
// }

//for in loop  works in object 
// for (const key in myobject) {
//     console.log(key)
// }
// name
// age
// for (const key in myobject) {
//     console.log(myobject[key]);
// }
// santu
// 26

//for in loop in array  different form for of loop

// let arr1 = [1, 2, 3, 4, 5];
// for (const key in arr1) {
//     console.log(key, arr1[key]);
// }

//conclusion -> for of loop -> value
//for in -> keys or index 
//map is not itaertale useing for in loopp  also not giving error
// for (const key in map) {
//     console.log(key);
// }


// for - each loop  -> value
const coding = ["c++", "java", "javascript"]

//using callback function -> callback function dont have a name
// coding.forEach(function (item) {
//     console.log(item);
// });

// coding.forEach((element) => {
//     console.log(element);
// })


//passing another function 

// function printMe(val) {
//     console.log(val);
// }

// coding.forEach(printMe);   //only pass refernce  -> works correckty
//forEach((arr_val , arr_index , arr_itsef)=>{})
//forEach((arr_val , arr_index )=>{})
// coding.forEach((arr_val, arr_item , arrr) => {
//     console.log(arr_val, arr_item, arrr);
// })
//c++ 0 [ 'c++', 'java', 'javascript' ]
// java 1 [ 'c++', 'java', 'javascript' ]
//javascript 2 [ 'c++', 'java', 'javascript' ]


//special case


let myArr = [
    {
        "name": "santu",
        age: 23
    },
    {
        "name": "sanu",
        age: 23
    },
    {
        "name": "monu",
        age: 23
    }
]


myArr.forEach((item) => {
    console.log(item);
    console.log(item.age);
    console.log(item.name);
})
// { name: 'santu', age: 23 }
// { name: 'sanu', age: 23 }
// { name: 'monu', age: 23 }
