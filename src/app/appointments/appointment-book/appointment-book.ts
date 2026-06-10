import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Doctors } from '../../services/doctors';
import { Patients } from '../../services/patients';
import { Appointmentservice } from '../../services/appointmentservice';

@Component({
  selector: 'app-appointment-book',
  imports: [CommonModule,FormsModule],
  templateUrl: './appointment-book.html',
  styleUrl: './appointment-book.css',
})
export class AppointmentBook implements OnInit {

  appointments:any[]=[];
  patients:any[]=[];
  doctors:any[]=[];

  isEdit=false;

  appointment:any={

    patientId:'',
    doctorId:'',
    appointmentDate:'',
    appointmentTime:'',
    reason:'',
    status:'Scheduled'

  };

  constructor(
    private appointmentService:Appointmentservice,
    private patientService:Patients,
    private doctorService:Doctors
  ){}

  ngOnInit(): void {

    this.loadAppointments();
    this.loadPatients();
    this.loadDoctors();

  }

  loadAppointments(){

    this.appointmentService
      .getAllAppointments()
      .subscribe((res:any)=>{

        this.appointments=res;

      });

  }

   loadPatients(){

    this.patientService
      .getAllPatientsDropdown()
      .subscribe((res:any)=>{

        this.patients=res;

      });

  }

   loadDoctors(){

    this.doctorService
      .getAllDoctorsDropdown()
      .subscribe((res:any)=>{

        this.doctors=res;

      });

  }

  saveAppointment(){

    if(this.isEdit){

      this.appointmentService
        .updateAppointment(
          this.appointment.id,
          this.appointment
        )
        .subscribe(()=>{

          this.loadAppointments();
          this.resetForm();

        });

    }else{

      this.appointmentService
        .createAppointment(
          this.appointment
        )
        .subscribe(()=>{

          this.loadAppointments();
          this.resetForm();

        });

    }

  }

  editAppointment(data:any){

    this.isEdit=true;

    this.appointment={
      ...data
    };

  }

  deleteAppointment(id:number){

    if(confirm('Delete Appointment ?')){

      this.appointmentService
        .deleteAppointment(id)
        .subscribe(()=>{

          this.loadAppointments();

        });

    }

  }

  resetForm(){

    this.isEdit=false;

    this.appointment={

      patientId:'',
      doctorId:'',
      appointmentDate:'',
      appointmentTime:'',
      reason:'',
      status:'Scheduled'

    };

  }



}
