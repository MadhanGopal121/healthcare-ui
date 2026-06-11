import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Patients } from '../services/patients';
import { BillingService } from '../services/billing-service';


@Component({
  selector: 'app-billing',
  imports: [CommonModule,FormsModule],
  templateUrl: './billing.html',
  styleUrl: './billing.css',
})
export class Billing implements OnInit{

   bills:any[]=[];
  patients:any[]=[];

  isEdit=false;

  bill:any={

    patientId:'',
    consultationFee:0,
    labFee:0,
    medicineFee:0,
    paymentStatus:'PAID'

  };

  constructor(
    private billingService:BillingService,
    private patientService:Patients
  ){}

   ngOnInit(): void {

    this.loadBills();
    this.loadPatients();

  }
loadBills(){

    this.billingService
      .getAllBillings()
      .subscribe((res:any)=>{

        this.bills=res;

      });

  }

  loadPatients(){

    this.patientService
      .getAllPatientsDropdown()
      .subscribe((res:any)=>{

        this.patients=res;

      });

  }

  saveBill(){

    if(this.isEdit){

      this.billingService
        .updateBilling(
          this.bill.id,
          this.bill
        )
        .subscribe(()=>{

          this.loadBills();
          this.resetForm();

        });

    }else{

      this.billingService
        .createBilling(
          this.bill
        )
        .subscribe(()=>{

          this.loadBills();
          this.resetForm();

        });

    }

  }

  editBill(data:any){

    this.isEdit=true;

    this.bill={
      ...data
    };

  }

  deleteBill(id:number){

    if(confirm('Delete Bill ?')){

      this.billingService
        .deleteBilling(id)
        .subscribe(()=>{

          this.loadBills();

        });

    }

  }

  resetForm(){

    this.isEdit=false;

    this.bill={

      patientId:'',
      consultationFee:0,
      labFee:0,
      medicineFee:0,
      paymentStatus:'PAID'

    };

  }

}
