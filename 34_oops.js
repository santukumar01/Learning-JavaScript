// prototyal behaivour 
// layer form down to up
// Array -> object -> null
// strint -> object -> null

//in javascript  ->     all thngs including function is Obhect

// function mulBy5(num) {
//     return num * 5;
// }

// console.log(mulBy5(6));  // 30

//function behave as a object 
// mulBy5.santu = 6;
// console.log(mulBy5.santu);   // 6
//protype is like a parent
// console.log(mulBy5.prototype);  //{}

//normal function -> construction fucntion
function createUser(username, score) {
    this.username = username;
    this.score = score;
}

let user1 = createUser("santu", 20);
let user2 = createUser("sanu", 30);

console.log(user1);   // { username: 'santu', score: 20 }








