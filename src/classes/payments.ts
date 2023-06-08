import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter{
    //    readonly client: string;
    //      private details: string;
    //     amt: number;
    // //this contructot to intialize above members
        constructor(
            readonly recipient: string,
            private details: string,
            public amt: number,
    
        ){
            // this.client=c;
            // this.details=d;
            // this.amt=a;
        }
    
        //methhods
        format(){
            return `${this.recipient} owed £${this.amt} for ${this.details}`
        }
    
    }