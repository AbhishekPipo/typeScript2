interface IsPerson{
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number):void;
}

const me: IsPerson={
    name: "abhi",
    age: 21,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number): number{
        console.log("i spen",amount);
        return amount;
    },
    // skills=[]
}
console.log(me);
// let someone: IsPerson={

// }
const greetPerson=(person: IsPerson)=>{
    console.log("hello",person.name);

}

greetPerson(me)
