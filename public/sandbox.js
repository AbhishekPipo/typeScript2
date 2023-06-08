"use strict";
//@tsconfig done in rootDr(src) and OutDr(public)
//@ functions 
let greet;
greet = () => {
    console.log("hello");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c); //undefined
};
add(5, 10, 20); //overrides default value 10
console.log("watching tsc from public ");
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
// result='something else';
