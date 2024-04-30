//after es 6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     //method -> function
//     encrptPassword() {
//         return `${this.password}abc`;
//     }
// }

// const chai = new User("chai", "chai@gamil.com", "chia@123")

// console.log(chai);
// output for line 18
// User {
//     username: 'chai',
//     email: 'chai@gamil.com',
//     password: 'chia@123'
//   }

// console.log(chai.encrptPassword());//chia@123abc


//without class / how behind the scene call
//1 . crete the constructor function
//2 . here user is a fuction
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

//  using protoypte to create methods 

User.prototype.encrptPassword = function () {
    return `${this.password}abc`;
}

const user1 = new User("chai", "chai@gamil.com", "chia@123");

console.log(user1);
//output
// User {
//     username: 'chai',
//     email: 'chai@gamil.com',
//     password: 'chia@123'
//   }

// console.log(user1.encrptPassword());//chia@123abc
