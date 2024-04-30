// promise is also a object
// promise take two argument (resolve , results)

// let promise = new Promise((resolve , result) => {

// })
// .then().
// catch();


// console.log("hello 1");
// setTimeout(() => {
//     console.log("hello");
// }, 0)
// console.log("hello 2");


//promises  -> pending -> fullilled -> rejected

// let p = new Promise((res, rej) => {
//     console.log("promise made");
//     res(56);
// }).then((val) => {
//     console.log("p is resolved");
//     console.log(val);
// }).catch(() => {
//     console.log("p is rejected")
// })
// console.log(p);

//creating a promise

// let p = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("Async task is completed");
//         res();
//     }, 1000);
// })

// p.then(() => {
//     console.log("we are in then");
// })

// new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("Async 2 is completed")
//         res();
//     }, 1000)
// }).then(() => {
//     console.log("Async 2 resolved");
// })

// const p3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("Async 3 is completed");
//         res({ username: "java", age: 24 })
//     }, 1000)
// })
// p3.then((user) => {
//     console.log(user);
// })


// const p4 = new Promise((res, rej) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             res({ username: "santu" });
//         }
//         else {
//             rej("Some Error");
//         }
//     }, 5000)
// }).then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("p is either resolved or rejected")
// })

const p5 = new Promise((res, rej) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            res({ username: "javascript" })
        }
        else {
            rej("Error");
        }

    })
})

async function consumeP5() {
    try {
        const response = await p5;
        console.log(response);
    }
    catch (err) {
        console.log(err);
    }
}

consumeP5();
