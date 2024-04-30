//all of these are keywords
//declering const
const accountId = 1445
// accountId = 2;  cant change in const
console.log(accountId);

//var ans let are for varible 
let accountEmail = "santu@123";
var accoutCity = "patna";

//can update for let and var
accountEmail = "somethinglse";
accoutCity = "nalnda";

//what if we redecalre
// let accountEmail ="";  // doest not allow
var accountCity = "patne";
let accountState;  /* undefined*/
console.table([accountId, accountEmail, accoutCity, accountState]);

//what if we dont write any key word  -> var

accountPerson = "santu kumar";
accountPerson = "sanu kumar";

console.log(accountPerson);


//const -> changing and redeclratuion not allowed
//let -> changing allowed , redeclratetion not allowed
//var -> both allowed
//dont write anything then treat it as var

/*
Prefer not to use var
because of issue in block scope and functional scope  ->  next 
*/


