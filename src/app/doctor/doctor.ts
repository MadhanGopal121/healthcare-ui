import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctors } from '../services/doctors';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctor',
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './doctor.html',
  styleUrl: './doctor.css',
})
export class Doctor implements OnInit {
  doctors: any[] = [];
  
    doctor: any = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      specialization: '',
      qualification: '',
      experienceYears: '',
      licenseNumber: ''
    };
  
    isEdit = false;
  
    constructor(
      private Doctors: Doctors
    ) {}
  
    ngOnInit(): void {
      this.loadDoctors();
    }
  
    loadDoctors() {
      this.Doctors.getAllDoctors()
        .subscribe((res: any) => {
          this.doctors = res;
        });
    }
  
    saveDoctor() {
  if (this.isEdit) {
  
        this.Doctors.updateDoctor(
          this.doctor.id,
          this.doctor
        ).subscribe(() => {
  
          this.loadDoctors();
          this.resetForm();
  
        });
  
      } else {
  
        this.Doctors.createDoctor(
          this.doctor
        ).subscribe(() => {
  
          this.loadDoctors();
          this.resetForm();
  
        });
  
      }
  
    }
  
    editDoctor(doctor: any) {
  
      this.isEdit = true;
  
      this.doctor = {
        ...doctor
      };
  
    }
  
    deleteDoctor(id: number) {
  
      if (confirm('Delete Doctor ?')) {
  
        this.Doctors
          .deleteDoctor(id)
          .subscribe(() => {
  
            this.loadDoctors();
  
          });
  
      }
  
    }
  
    resetForm() {
  
      this.isEdit = false;
  
      this.doctor = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        specialization: '',
        qualification: '',
        experienceYears: '',
        licenseNumber: ''
      };
  
    }
  
  }
  
