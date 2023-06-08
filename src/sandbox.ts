//@tsconfig done in rootDr(src) and OutDr(public)


//@ functions 

let greet: Function;
greet=()=>{
    console.log("hello");
}

const add=(a:number,b:number,c: number | string=10): void=>{
console.log(a+b);
console.log(c); //undefined
}
add(5,10,20) //overrides default value 10
console.log("watching tsc from public ");


const minus=(a:number,b:number)=>{
    return a+b;
}
let result=minus(10,7);
// result='something else';



