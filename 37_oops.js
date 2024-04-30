//inheritance  -> using claas

class User {
    constructor(username) {
        this.username = username;
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
    //method
    addCourse() {
        console.log(`A new Courses is added by ${this.username}`)
    }
}

const user = new Teacher("chai", "chai@gamil.com", "chai@123");

// console.log(user);
// Teacher {
//     username: 'chai',
//     email: 'chai@gamil.com',
//     password: 'chai@123'
//   }

// console.log(user.addCourse());
// A new Courses is added by chai
// undefined

const user2 = new User("sanntu");
// console.log(user2); //User { username: 'sanntu' }
// user2.addCourse()  -> not accessable

console.log(user === Teacher);  // false
console.log(user === User);  // false

console.log(user instanceof User);  // true
console.log(user instanceof Teacher);  // true
console.log(user2 instanceof Teacher);  // false
