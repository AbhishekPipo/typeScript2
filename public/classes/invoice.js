export class Invoice {
    //    readonly client: string;
    //      private details: string;
    //     amt: number;
    // //this contructot to intialize above members
    constructor(client, details, amt) {
        this.client = client;
        this.details = details;
        this.amt = amt;
        // this.client=c;
        // this.details=d;
        // this.amt=a;
    }
    //methhods
    format() {
        return `${this.client} owes £${this.amt} for ${this.details}`;
    }
}
