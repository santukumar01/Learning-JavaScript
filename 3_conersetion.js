// let score = "33";

// console.log(typeof score);  //-> output -> string

// let valtoNumber = Number(score);  // first letter is cap

// console.log(typeof valtoNumber); // > number


//now come to NAN  when convert to non real number to Number


// let score = "333abs";

// console.log(typeof score);
// let stringToNumber = Number(score);

// console.table([typeof stringToNumber, stringToNumber]);  // output -> [number , NaN]


// let score = null;  // object

// console.log(typeof score);
// let stringToNumber = Number(score);

// console.table([typeof score, typeof stringToNumber, stringToNumber]);  // output -> [object ,number , 0]  null -> Number(null) -> 0



// let score = undefined;
// console.log(typeof score);
// let stringToNumber = Number(score);

// console.table([typeof score, typeof stringToNumber, stringToNumber]);  // output -> [undefined,number , NaN] undefind -> Number -> NaN


// let score = true;
// console.log(typeof score);
// let stringToNumber = Number(score);

// console.table([typeof score, typeof stringToNumber, stringToNumber]);  // output -> [booloean,number , 1] // false -> 0;


//"33" => 33
//"33abc" => NaN
//null => 0
//undefined => NaN

//conversion form to boolean datatytpe
// let score = 1;
// console.log(typeof score);
// let stringToNumber = Boolean(score);

// console.table([typeof score, typeof stringToNumber, stringToNumber]);  // output -> [number, boolean,true ]

//1-> true , 0 -> false
//"" -> false , "something" => true


//number to String

// let name1 = null;
// let conv = String(name1);

// console.table([typeof name1, typeof conv, conv]);// [objecct  , string , null];

// console.log(conv);  