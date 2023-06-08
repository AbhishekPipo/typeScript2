type stringOrNum = string | number;
type objWithName={name: string, uid: stringOrNum}
const logDetails = (uid: stringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greetUser = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}


const greetAgain=(user: objWithName)=>{
    console.log(`${user.name}`);
}

greetUser({name: "abhi",uid: '01'})