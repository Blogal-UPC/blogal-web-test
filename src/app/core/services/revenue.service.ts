import { Injectable } from '@angular/core';
import { Payment } from '../../shared/models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {
  private payments: Payment[] =[
    {
      id:1,
      author_id:1,
      receptor_id:1,
      type:'DONATION',
      amount:20,
      creationDate: new Date('2024-06-12'),
    },
    {
      id:2,
      author_id:1,
      receptor_id:1,
      type:'DONATION',
      amount:100,
      creationDate: new Date('2024-06-12'),
    },
    {
      id:3,
      author_id:1,
      receptor_id:1,
      type:'DONATION',
      amount:50,
      creationDate: new Date('2024-07-12'),
    },
    {
      id:4,
      author_id:1,
      receptor_id:1,
      type:'DONATION',
      amount:20,
      creationDate: new Date('2024-07-12'),
    },
    {
      id:5,
      author_id:3,
      receptor_id:1,
      type:'DONATION',
      amount:20,
      creationDate: new Date('2024-10-12'),
    },
    {
      id:6,
      author_id:3,
      receptor_id:1,
      type:'DONATION',
      amount:20,
      creationDate: new Date('2024-11-12'),
    },
  ]
  private nextId = this.payments.length + 1;
  addPayment(payment:Payment){
    payment.id=this.nextId++;
    this.payments.push(payment);
  }
  getPaymentById(id:number){
    return this.payments.filter(p=>p.receptor_id===id);
  }
  constructor() { }
}
