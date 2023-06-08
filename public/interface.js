"use strict";
const me = {
    name: "abhi",
    age: 21,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("i spen", amount);
        return amount;
    },
    // skills=[]
};
console.log(me);
// let someone: IsPerson={
// }
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
