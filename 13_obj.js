//sikh lo 
//destructing of obj

const course = {
    cousName: "javascript",
    price: 999
}

const cousse2 = {
    cousName1: "c++ in hindi",
    prince: 1000
}

// console.log(course.cousName)
// uses in REact destructing
const { cousName: c1 } = course
const { price: p } = course;

const { cousName1: c2 } = cousse2

// console.log(cousName, price);
// console.log(c1, price);
console.log(c2);
// console.log(price);
console.log(p);


