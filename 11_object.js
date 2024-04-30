//construct  -> singleton 
//object.create

//object litrses 
//key:vaalue pair

const mysym = Symbol("key1");

const user = {
    0: "value",
    name: "santu",
    "full name": "santu Kumar",
    [mysym]: "key1",
    age: 22,
    location: "patna",
    lastLogin: ["monday", "saturday"]
}
// kay -> string in js 
// console.log(user);
// console.log(user.name);
// console.log(user["0"]);  // behind the scene
// console.log(user["full name"]) //for this only [] can be use
// console.log(typeof user[mysym]);  // string
// console.log(typeof mysym)  // symbol

//change in object
// Object.freeze(user)  // after freazzing didintchange anything
// user.name = "sonu";
// console.log(user);   //does not cahnge

/* check for output carefuly
{
  '0': 'value',
  name: 'santu',
  'full name': 'santu Kumar',
  age: 22,
  location: 'patna',
  lastLogin: [ 'monday', 'saturday' ],
  [Symbol(key1)]: 'key1'
}*/

// funbction inside object

user.state = "Pune"; // will add state as key value pair
// console.log(user);
// console.log(user.state);


//define function
user.greeting = function () {
    console.log("hello");
}

user.greeting2 = function () {
    console.log(`hello ${this.name}`);
}

console.log(user);  // all function merge in user object
// greeting: [Function (anonymous)],
//   greeting2: [Function (anonymous)],



//take two approch
// console.log(user.greeting);  // [Function (anonymous)]  refrance to the function
// console.log(user.greeting());   //hello undefined
// console.log(user.greeting2());   //hello undefined
let ans = user.greeting();  // hello not undefined
console.log("ans :", ans);  // ans : undeifned