//literals  non-singlaton  
// const myobj = {
//     id: 1,
//     name: "santu",
// }
// myobj.isLoggedIn = false;
// console.log(myobj);

//using constructor to make an object -> singlton object
const myobj = new Object();
myobj.id = "01";
myobj.name = "santu";
myobj.isLoggedIn = false;
// console.log(myobj);

//print obj
console.log(myobj);
//print all key as arr

console.log(Object.keys(myobj));  // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(myobj));  // [ '01', 'santu', false ]
//key valye
console.log(Object.entries(myobj)); //[ [ 'id', '01' ], [ 'name', 'santu' ], [ 'isLoggedIn', false ] ]

//check if property is in object or not
console.log(myobj.hasOwnProperty('name'));  // true

const user = {
    email: "santu@gmail.com",
    fullname: {
        firstName: "santu",
        lastName: "kumar",
    },
    state: "patna"
}

// console.log(user);
// console.log(user.fullname);  // { firstName: 'santu', lastName: 'kumar' }
// console.log(user.fullname.firstName);  // santu 


const myobj1 = { name: "santu" };
const myobj2 = { name1: "sonu" };
//santu thought ---
// const myobj = [myobj1, myobj2];  //making an arr value
// const m = { myobj1, myobj2 }  // making an obj key : vlaue
// console.log(myobj);  //[ { name: 'santu' }, { name: 'sonu' } ]
// console.log(m);   // { myobj1: { name: 'santu' }, myobj2: { name: 'sonu' } }

// console.log(myobj[0]);  // as an arr
// console.log(m.myobj1);  // as an obj
//---
//assign (target  source1 , source2 , sourec3)
//all the object with in target
// const myobj3 = Object.assign({}, myobj1, myobj2);
// console.log(myobj3);  //{ name: 'santu', name1: 'sonu' }  when key are same then only one last piar print
//if in assign {} is not therer then all onject gone in myobj1 also
// console.log(myobj1);


//spraed opeartor

const a1 = [1, 2, 3, 4];
const a2 = [2, 3, 4, 5];
// console.log([...a1, ...a2]);
/*[
  1, 2, 3, 4,                               cript"
  2, 3, 4, 5                                t> node "c:\Users\santu\OneDrive\Desktop\javascript\12_obj.js"
]*/
// console.log([a1, a2]); // [ [ 1, 2, 3, 4 ], [ 2, 3, 4, 5 ] ] one array ascan elemt

const obj3 = { ...myobj1, ...myobj2 };
// console.log(obj3); // { name: 'santu', name1: 'sonu' }



//data coming formm data
//arry of object

// const u1 = [
//     {
//         id: 1,
//         email: "santu@gmail.com"
//     },
// ]

// console.log(u1[0].id);



