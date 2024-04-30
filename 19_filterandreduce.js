//all the higher order function include forEach , filter , map , reduce takes a call back

const coding = ["c++", "c", "ruby", "java", "pyhton"];

// coding.forEach((item) => {
//     console.log(item);
// })
// output
// c++
// c
// ruby
// java
// pyhton
// const values = coding.forEach((item) => {
//     console.log(item);
// })

// console.log(values);
// output
// ++
// c
// ruby
// java
// pyhton
// undefined  -> for values 
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);   // forEach  doest  return any value

//filters

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter return array

//fiffrent way of returning a function 
// const filterAns = mynums.filter((num) => {
//     return (num < 5);
// })
// const filterAns = mynums.filter((num) => (num < 5))
// const filterAns = mynums.filter((num) => num < 5)  //[1 , 2 , 3, 4,]
// console.log(filterAns);  //[1, 2 , 3, 4]


//hoe to use  with foreach
// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ans = [];

mynums.forEach((iteam) => {
    if (iteam < 5) {
        ans.push(iteam);
    }
})


// console.log(ans);   //[1, 2, 3, 4]


//array of object
const user = [
    {
        username: "santu",
        age: 23
    },
    {
        username: "sonu",
        age: 24
    },
    {
        username: "monu",
        age: 25
    },
    {
        username: "sanu",
        age: 26
    }
]

// const ansUser = user.filter((obj) => obj.age >= 25);
// const ansUser = user.filter((obj) => { return obj.age >= 25 }); // [ { username: 'monu', age: 25 }, { username: 'sanu', age: 26 } ]
// const ansUser = user.filter((obj) => (obj.age >= 25));//[ { username: 'monu', age: 25 }, { username: 'sanu', age: 26 } ]

// console.log(ansUser);  //[ { username: 'monu', age: 25 }, { username: 'sanu', age: 26 } ]


//map as higgher order function  
//return an resluting  array 
//map work on each element and upadte the value 
// const mapAns = mynums.map((val) => val + 10);
// console.log(mapAns);  //[ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

//chaning method can be done in maps and filter adn also both toghter

//below representation shows how arr is passing in chainig
// [1, 2, 3, 4, 5,6, 7,8,9, 10] -> [ 2, 3, 4, 5,6, 7,8,9, 10, 11 ] -> [ 3, 4, 5,6, 7,8,9, 10, 11, 12, 13] -> [10, 11, 12, 13]
const chai_ans = mynums.map((num) => num + 1).map((num) => num + 2).filter((num) => num > 9) //[10, 11, 12, 13]
// console.log(chai_ans);



//reduce higher order function -> returns  an value
const myarray = [1, 2, 3, 4, 5];
//0+1+2+3+4+5 = 15
const intialValue = 0;


//bwlow two are same 
const ansReduce = myarray.reduce(function (acc, currval) {
    return acc + currval
}, 0); // intial value 

// const ansReduce = myarray.reduce(
//     (preVal, curVal) => (preVal + curVal), intialValue
// )

// console.log(ansReduce);  //15 in both above case

const shoppingCart = [
    {
        course: "js",
        prince: 2999
    },
    {
        course: "c++",
        prince: 3999
    },
    {
        course: "frontend",
        prince: 4999
    },
    {
        course: "backend",
        prince: 5999
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => {
    console.log(`${acc} and ${item.prince}`);
    return acc + item.prince
}, 0)

console.log(totalPrice);

//output
// 0 and 2999
// 2999 and 3999
// 6998 and 4999
// 11997 and 5999
// 17996






















