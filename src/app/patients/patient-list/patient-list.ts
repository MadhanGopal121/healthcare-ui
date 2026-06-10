import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Patients } from '../../services/patients';

@Component({
  selector: 'app-patient-list',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.css',
})
export class PatientList implements OnInit {

  patients:any[]=[];

patient:any={
  firstName:'',
  lastName:'',
  gender:'',
  age:'',
  bloodGroup:'',
  mobile:'',
  email:'',
  address:'',
  emergencyContact:''
};

isEdit=false;

 constructor(
    private patientsService: Patients
  ) {}

ngOnInit(): void {
  this.loadPatients();
}

loadPatients() {
   this.patientsService.getAllPatients()
        .subscribe((res: any) => {
          this.patients = res;
        });
}

savePatient() {

  if(this.isEdit){

    this.patientsService
      .updatePatient(
        this.patient.id,
        this.patient
      )
      .subscribe(()=>{

        this.loadPatients();
        this.resetForm();

      });

  } else {

    this.patientsService
      .createPatient(this.patient)
      .subscribe(()=>{

        this.loadPatients();
        this.resetForm();

      });

  }

}

editPatient(patient:any){

  this.isEdit=true;

  this.patient={
    ...patient
  };

}

deletePatient(id:number){

  if(confirm('Delete Patient?')){

    this.patientsService
      .deletePatient(id)
      .subscribe(()=>{

        this.loadPatients();

      });

  }

}

resetForm(){

  this.isEdit=false;

  this.patient={
    firstName:'',
    lastName:'',
    gender:'',
    age:'',
    bloodGroup:'',
    mobile:'',
    email:'',
    address:'',
    emergencyContact:''
  };

}
}
