import { Component,AfterViewInit,OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import { DashboardService } from '../services/dashboard-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements AfterViewInit,OnInit {

  totalPatients = 0;
  activeDoctors = 0;
  appointments = 0;
  revenue = 0;

   demographics: any[] = [];

  doctors: any[] = [];

  upcomingAppointments: any[] = [];

  appointmentChart: any;
  revenueChart: any;

   constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {}

 
  ngOnInit(): void {
    this.loadDashboard();
  }

   loadDashboard() {

    this.dashboardService
      .getDashboard()
      .subscribe({

        next: (res: any) => {

          this.totalPatients =
            res.totalPatients;

          this.activeDoctors =
            res.activeDoctors;

          this.appointments =
            res.totalAppointments;

          this.revenue =
            res.totalRevenue;

          this.demographics =
            res.demographics || [];

          this.doctors =
            res.doctorSchedules || [];

          this.upcomingAppointments =
            res.upcomingAppointments || [];

          this.loadCharts(
            res.appointmentTrends || []
          );

        },

        error: (err) => {

          console.error(
            'Dashboard API Error',
            err
          );

        }

      });

  }
 ngAfterViewInit(): void {}
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

  loadCharts(
    trends: any[]
  ) {

    const labels =
      trends.map(
        (t: any) => t.month
      );

    const values =
      trends.map(
        (t: any) => t.count
      );

    if (this.appointmentChart) {
      this.appointmentChart.destroy();
    }

    if (this.revenueChart) {
      this.revenueChart.destroy();
    }

    this.appointmentChart =
      new Chart(
        'appointmentChart',
        {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Appointments',
                data: values
              }
            ]
          }
        }
      );

    this.revenueChart =
      new Chart(
        'revenueChart',
        {
          type: 'bar',
          data: {
            labels: ['Revenue'],
            datasets: [
              {
                label: 'Revenue',
                data: [this.revenue]
              }
            ]
          }
        }
      );

  }

}
