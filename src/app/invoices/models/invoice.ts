export class Invoice {
    _id: string='';
    item: string='';
    qty: number=0;
    date: Date= new Date();
    due: Date = new Date();
    tax: number=0;
    rate: number=0;

}
 