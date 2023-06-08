//@function signature

// let greetUser1: Function;

let gree: (a:string,b:string)=> void; //@signature
gree=(name: string,greeting: string)=>{
    console.log(`${name} says greeting`);
} 

//example 2

let calc: (a: number,b:number,c:string)=> number;
calc=(num1:number,num2: number,action:string)=>{
    if(action=='add'){
        return num1+num2;

    }else{
        return num1-num2;
    }
}

//exmaple 3
let logDetails1: (obj: {name: string,age: number})=> void;
type person={name: string,age: number}
logDetails1=(abhiobj:person)=>{ // person is now also matching function signature ven though person is explicit
console.log(`${abhiobj.name} is ${abhiobj.age} years old`);
}

