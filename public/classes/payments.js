export class Payment {
    //    readonly client: string;
    //      private details: string;
    //     amt: number;
    // //this contructot to intialize above members
    constructor(recipient, details, amt) {
        this.recipient = recipient;
        this.details = details;
        this.amt = amt;
        // this.client=c;
        // this.details=d;
        // this.amt=a;
    }
    //methhods
    format() {
        return `${this.recipient} owed £${this.amt} for ${this.details}`;
    }
}
