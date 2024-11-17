import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RevenueService } from '../../../core/services/revenue.service';
import { AuthService } from '../../../core/services/auth.service';
import { Payment } from '../../../shared/models/payment.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.css'
})
export class RevenueComponent {
  private revenueService=inject(RevenueService);
  private authService=inject(AuthService);

  private currentUser=this.authService.getcurrentUser();

  payments:Payment[]=[];
  private snackBar = inject(MatSnackBar);
  totalPayment = 0;

  ngOnInit(): void {
    if(!this.currentUser){
      this.showSnackBar('Error al cargar la información de usuario')
      return;
    }
    this.payments=this.revenueService.getPaymentById(this.currentUser.id)
    if(this.payments.length<=0){
      this.showSnackBar('Aún no tiene ingresos')
      return;
    }
    this.payments.forEach(p=>this.totalPayment+=p.amount);
    this.chart();
    
  }
  showSnackBar(message:string) {
    this.snackBar.open(message,'Cerrar',{
      duration:3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  chart(){
    const chartLabels = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const chartData = Array(12).fill(0);
    this.payments.forEach(p=>{
      chartData[p.creationDate.getMonth()]+=p.amount;
    });
    const paymentChart = new Chart('paymentChart',{
      type:'line',
      data:{
        labels:chartLabels,
        datasets:[{
          label:'Pagos por mes',
          data:chartData!,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          pointStyle: 'circle',
          pointRadius: 5,
          pointHoverRadius: 7,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Meses',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Monto Pagado',
            },
            beginAtZero: true,
          },
        }
      }
    });
  }
  

}