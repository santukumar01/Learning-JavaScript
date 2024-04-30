// javascript and classses

// OOPS -> programming syntex

//object
// is  collection of properties and method ;
// property -> var
// methods -> function


// why we use OOP -> for better programming

// - constrtre function
// - prototypes
// - classes
// - instamces (new , this)

// 4 piller for oops

// Absration
// Encapsulation
// inheritance 
// polymorhism  

// object in javascript 

let user = {
    username: "javascript",
    age: 30,

    getDetails: function () {
        console.log("user details");
        console.log(this);   //{ username: 'javascript', age: 30, getDetails: [Function: getDetails] }
    }

}

//this is also  an object

// console.log(user);
// console.table(user);
// console.log(user.age);
// user.getDetails();  // excution 


// global objecct in node envirmoent is empty envirmont
// console.log(this)  -> {} // empty object

//but in brower there is  globlle objcet as window()

//when we want to make another user for that we have  write all element 
//for the above problem we use consertor
//new keyWords   -> conssturctor function
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = true;
    this.greeting
    return this;   // if we dont use this then undefined is printed // implicit this alwyas create
}
//without new Kryword
// const user1 = User("santu", 8, true);
// const user2 = User("sanu", 11, true);  // this will overwrite previos val

// console.log(user1);
//outputr for user 1  -> ooverwrite if we dont use the new keyword
//
// username: 'sanu',
// loginCount: 11,
// isLoggedIn: true

//  1. if you use new keyword then empty object is created first
//  2. calls the constructor
//  3. all the value injecte inside this insteance 
//  4. giving you the object

//now both of below will print seprlty as per asking
const user1 = new User("santu", 8, true);
const user2 = new User("sanu", 11, true);



// console.log(user1)
// User { username: 'santu', loginCount: 8, isLoggedIn: true }
console.log(user2)
console.log(user2.construcor);   //undefied 

// do not overwrite ->  User { username: 'sanu', loginCount: 11, isLoggedIn: true }


//plaese read abou isinstanceof

// prototype of an object  -> working as constructor  -> object constructor 
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

//
const auto = new Car('Honda', 'Accord', 1998);

// console.log(auto instanceof Car);
// Expected output: true

// this line checks whether auto is an instance of the Object constructor, and it should also return true, because all objects in JavaScript inherit from Object
// console.log(auto instanceof Object);
// Expected output: true

// prototyal behaivour
// layer form down to up
// Array -> object -> null
// strint -> object -> null
//class constructor usess word class






