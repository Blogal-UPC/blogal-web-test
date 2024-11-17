export interface Payment{
    id:number,
    author_id:number,
    receptor_id:number,
    type:'DONATION'|'SUBSCRIPTION',
    amount:number,
    creationDate: Date,
}
