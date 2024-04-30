const myarr = [1, 2, 3, 4, 5, 6];
const myarr1 = ["string", "name", "santu"];
//problem with push  work on exsiting arr
// myarr.push(myarr1);
// console.log(myarr);  //[ 1, 2, 3, 4, 5, 6, [ 'string', 'name', 'santu' ] ]
// console.log(myarr[6][0]);  //string

//solution with concat -> return a array
// const arrcat = myarr.concat(myarr1); //arrcat = marr+myarr1 //[ 1, 2, 3, 4, 5, 6, 'string', 'name', 'santu' ]
// console.log(arrcat);

//******spread opreator ***********/
//reatunr an array
const a1 = [1, 2, 3, 4];
const a2 = ["santu", "kumar"];

const ans = [...a2, ...a1]
console.log(ans);   // [ 'santu', 'kumar', 1, 2, 3, 4 ]  -> arr 
console.log({ ...a1, ...a2 }); // { '0': 'santu', '1': 'kumar', '2': 3, '3': 4 } -> object


// const another_arr = [1, 2, 3, 4, [1, 2, 3, 4,], [1, 2, 3, [4, 5, 6]]];
// const final_arr = another_arr.flat(Infinity);
// console.log(final_arr);


//checking array

const num = 10 + 1;
const str = "santu";
// console.log(Array.isArray(str));  // false
// console.log(Array.from(str));  //[ 's', 'a', 'n', 't', 'u' ]  ->char arr

// console.log(Array.isArray(num));  // false
// console.log(Array.from(num));  //[]   emmpty false


myobj = {
    name: "santu",
    "age": 22
}

// console.log(myobj);  //{ name: 'santu', age: 22 }

// console.log(Array.from(myobj)); //[] need to specfy which thing i need to cnvert in arrkey or value




let score1 = 100;
let score2 = 100;
let score3 = 103;

// console.log(Array.of(score1, score2, score3)); //[ 100, 100, 103 ]





