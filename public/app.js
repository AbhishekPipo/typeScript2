import { Invoice } from "./classes/invoice";
import { ListTemplate } from "./classes/listTemplate";
import { Payment } from "./classes/payments";
let docOne;
let docTwo;
let docs = [];
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Invoice('ABHI', 'web work', 200);
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
const form = document.querySelector(".new-item-form");
// console.log(form.children);
//inputs
//@clases
//@ private , public ,readonly
const invOne = new Invoice('abhi', "work on the typescript", 250);
const invTwo = new Invoice('pax', "work on the database", 350);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client='yoshi'; //@ we cant rewrite bcz  it is only @readonly
invOne.amt = 12;
invoices.forEach(inv => {
    console.log(inv.client, inv.amt, inv.format()); //using format now we can use private datamember 
});
// console.log(invOne,invTwo);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const detailes = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(toFrom.value, detailes.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, detailes.value, amount.valueAsNumber);
    }
    // console.log(
    //     doc
    //     // type.value,
    //     // toFrom.value,
    //     // detailes.value,
    //     // amount.valueAsNumber
    // );
});
