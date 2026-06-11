import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Patients } from '../services/patients';

@Component({
  selector: 'app-reports',
  imports: [ CommonModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reports implements OnInit {

   patients:any[]=[];

  selectedPatientId:number | null = null;

  constructor(
    private patientService:Patients
  ) {}

  ngOnInit(): void {

    this.loadPatients();

  }

  loadPatients(){

    this.patientService
      .getAllPatients()
      .subscribe((res:any)=>{

        this.patients = res;

      });

  }

   toggle(id:number){

    if(this.selectedPatientId === id){

      this.selectedPatientId = null;

    }else{

      this.selectedPatientId = id;

    }

  }

  generatePdf(patientId:number){

    window.open(
      `http://localhost:8080/reports/patient/${patientId}/pdf`,
      '_blank'
    );

  }
}
