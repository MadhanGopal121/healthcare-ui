import { Component,AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements AfterViewInit {

  constructor(private router: Router) {}

  goToDoctors() {
    this.router.navigate(['/doctors']);
  }

  goToPatients() {
    this.router.navigate(['/patients']);
  }

   goToAppointments() {
    this.router.navigate(['/appointments']);
  }

  goToBilling() {
    this.router.navigate(['/billing']);
  }

  goToReports() {
    this.router.navigate(['/reports']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

    totalPatients = 178;
    activeDoctors = 33;
    appointments = 76;
    revenue = 28156;

     demographics = [
    { age: '18-30', count: 220 },
    { age: '31-45', count: 195 },
    { age: '46-60', count: 175 },
    { age: '61-70', count: 130 },
    { age: '70+', count: 100 }
  ];

    doctors = [
    { name: 'Dr. Smith', time: '10:00 AM' },
    { name: 'Dr. Kumar', time: '12:00 PM' },
    { name: 'Dr. John', time: '02:00 PM' }
  ];

  upcomingAppointments = [
    {
      patient: 'John Doe',
      doctor: 'Dr. Smith',
      date: '2026-06-10',
      time: '10:00 AM'
    },
    {
      patient: 'Mary Jane',
      doctor: 'Dr. Kumar',
      date: '2026-06-10',
      time: '12:00 PM'
    }
  ];

  ngAfterViewInit() {

    new Chart('appointmentChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Appointments',
          data: [100, 140, 180, 220, 200, 260]
        }]
      }
    });

    new Chart('revenueChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue',
          data: [5000, 8000, 12000, 15000, 18000, 28156]
        }]
      }
    });
  }

}
