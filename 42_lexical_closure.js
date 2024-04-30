// a closure gives you access to an outer function's scope from an inner function

//lexical scoping -> innner function have always outer funcvtion accces
// function init() {
//     let name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         // displayName() is the inner function, that forms the closure
//         console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();


// closure 

function makeFunc() {
    const name = "Mozilla"; // this is also in lexical scope in displayName
    function displayName() {
        console.log(name);
    }
    return displayName;  // return lexical scope
}


const myFunc = makeFunc();
myFunc();

