
import { Invoice } from "./classes/invoice"; 
import { ListTemplate } from "./classes/listTemplate";
import { Payment } from "./classes/payments";
import { HasFormatter } from "./interfaces/HasFormatter";

let docOne: HasFormatter;
let docTwo: HasFormatter;

let docs: HasFormatter[]=[];


docOne= new Invoice('yoshi','web work',250);
docTwo= new Invoice('ABHI','web work',200);
docs.push(docOne);
docs.push(docTwo);
console.log(docs);



//@ the dom and type casting    

// const anchor=document.querySelector('a')!;

// // if(anchor){

// //     console.log(anchor.href); //error comes if we move this line out of if block
// // }

// console.log(anchor.href); //no error bcz we put ! in first line


// const form=document.querySelector('form')!;
// const form=document.querySelector(".new-item-form")!;
const form=document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

//inputs











//@clases
//@ private , public ,readonly

const invOne=new Invoice('abhi',"work on the typescript",250);
const invTwo=new Invoice('pax',"work on the database",350);
let invoices: Invoice[]=[];
invoices.push(invOne)
invoices.push(invTwo)
// invOne.client='yoshi'; //@ we cant rewrite bcz  it is only @readonly
invOne.amt=12;



invoices.forEach(inv=>{
   
    console.log(inv.client,inv.amt,inv.format());//using format now we can use private datamember 
})
// console.log(invOne,invTwo);


const type =document.querySelector('#type') as HTMLSelectElement;
const toFrom =document.querySelector('#tofrom') as HTMLInputElement;
const detailes =document.querySelector('#details') as HTMLInputElement;
const amount =document.querySelector('#amount') as HTMLInputElement;


//list template instance
const ul=document.querySelector('ul')!;
const list=new ListTemplate(ul)


form.addEventListener('submit',(e: Event)=>{
    e.preventDefault();
    let doc: HasFormatter;
    if(type.value=='invoice'){
        doc =new Invoice(toFrom.value,detailes.value,amount.valueAsNumber)
    }else{
        doc =new Payment(toFrom.value,detailes.value,amount.valueAsNumber)
    }
    // console.log(
    //     doc
    //     // type.value,
    //     // toFrom.value,
    //     // detailes.value,
    //     // amount.valueAsNumber
    // );

})










