//call , bind , apply
//this -> current contex
//call


// noramt funtion works fine
// function mulBy5(num) {
//     num = num * 5;
//     return num;
// }

// function mulBy2(num) {
//     let res = num * 2;
//     res = mulBy5(res);
//     return res;
// }

// console.log(mulBy2(10));




// function setUersName(username) {
//     this.username = username;
//     // return this.username;
// }

// function createUser(username, email, password) {
//     // setUersName(username);  // createUser { email: 'santu@gmail.com', password: 'paqs' } / not username
// this.username =   setUserName(useranme)  // using this with return  createUser { username: 'santu', email: 'santu@gmail.com', password: 'paqs' }
//     this.email = email;
//     this.password = password;
// }

// const user = new createUser("santu", "santu@gmail.com", "paqs");

// console.log(user);

// why using call 

function setUserName(username) {
    this.username = username;
}

function createUserName(username, email, age) {
    setUserName.call(this, username);  // passing current contex
    this.email = email;
    this.age = age;
}

// const user = createUserName("name", "eamil@google.com", "password123");
// console.log(user);  // undefined
// const user = new createUserName("name", "eamil@google.com", "password123");
// console.log(user);  // without call { email: 'eamil@google.com', age: 'password123' }  -> without using call
const user = new createUserName("name", "eamil@google.com", "password123");
console.log(user);
//with call now we can get value in username
// createUserName {
//     username: 'name',
//     email: 'eamil@google.com',
//     age: 'password123'
//   }


