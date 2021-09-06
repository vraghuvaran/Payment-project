export class Customer{
    constructor(private customerid: string,
        private accountholdername: string,
        overdraftflag: number,
        clearbalance: number,
        customeraddress: string,
        customercity: string,
        customertype: string,
        bic: string){
    }
}