"use strict";
//@function signature
// let greetUser1: Function;
let gree; //@signature
gree = (name, greeting) => {
    console.log(`${name} says greeting`);
};
//example 2
let calc;
calc = (num1, num2, action) => {
    if (action == 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
//exmaple 3
let logDetails1;
logDetails1 = (abhiobj) => {
    console.log(`${abhiobj.name} is ${abhiobj.age} years old`);
};
