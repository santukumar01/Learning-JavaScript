
const PI = Math.PI
Math.PI = 5;   //cant chnage
console.log(PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

//gives the descrition of property of specifed object
// console.log(descriptor);
// {
//     value: 3.141592653589793,
//     writable: false,    // beacse of this
//     enumerable: false,       
//     configurable: false      
//   }

const user = {
    name: "username",
    age: 78,
    isLoggedIn: true
}

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
//output
// {
//     value: 'username',
//     writable: true,
//     enumerable: true,  // itration property
//     configurable: true
//   }

//what is i dont want to change the propewty of object i have made
// Object.defineProperty(user, 'name', {
//     writable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
//output 
// {
//     value: 'username',
//     writable: false,
//     enumerable: true,
//     configurable: true
//   }
// user.name = "abhijeet";  // not able to chnage
// console.log(user); // { name: 'username', age: 78, isLoggedIn: true }


//iterate over object

// for (let [key, value] of Object.entries(user)) {

//     console.log(`${key} : ${value}`);
// }

//output
// name : username
// age : 78
// isLoggedIn : true



// let object1 = {};

// Object.defineProperties(object1, {
//     name: {
//         value: 42,
//         writable: true,
//     },
//     property2: {},
// });

// console.log(object1.name);
// Expected output: 42

// let obj = {}
// // obj.value = 39;
// // console.log(obj);
//at least 2 property we have to write
// Object.defineProperty(obj, 'pro', {
//     value: 30,
//     writable: true,
//     enumerable: true,

// });
// console.log(obj);


// const o = {}; // Creates a new object

// Example of an object property added
// with defineProperty with a data property descriptor
// Object.defineProperty(o, "a", {
//     value: 37,
//     writable: true,
//     enumerable: true,
//     configurable: true,
// });

// console.log(o);




let myobj = {}

Object.defineProperties(myobj, {
    propert1: {
        value: 30,
        writable: true,
        enumerable: true
    },
    propert2: {
        value: 50,
        writable: true,
        enumerable: true,
    }
})


console.log(myobj);

console.log(Object.getOwnPropertyDescriptor(myobj, 'propert1'));

const obj = Object.getOwnPropertyDescriptors(myobj)

console.log(obj);
//output
// {
//     propert1: { value: 30, writable: true, enumerable: true, configurable: false },
//     propert2: { value: 50, writable: true, enumerable: true, configurable: false }
//   }