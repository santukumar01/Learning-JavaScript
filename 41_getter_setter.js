//c+++ code
// #include <iostream>
// using namespace std;

// class Employee {
//   private:
//     // Private attribute
//     int salary;

//   public:
//     // Setter
//     void setSalary(int s) {
//       salary = s;
//     }
//     // Getter
//     int getSalary() {
//       return salary;
//     }
// };

// int main() {
//   Employee myObj;
//   myObj.setSalary(50000);
//   cout << myObj.getSalary();
//   return 0;
// }


//variable -> property 
//getter and setter method in class

//name  of variable and getter and setter 
// class User {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password;
//     }
//     get password() {
//         return this._password.toUpperCase();
//     }
//     set password(value) {
//         this._password = value.toUpperCase();
//     }
// }


// const user = new User("santu@123", "123");
// console.log(user);
// console.log(user.password);  // 123 -> get method 
// user.password = "abc"    // set method
// console.log(user.password);  //ABC -> get method


//using defineProperty
function User(email , password)
{
    this.email = email;
    this.password = password;

    Object.defineProperty(this , 'email', {
        get :function(){
            
        },
        set : function(value){

        }
    })

}
