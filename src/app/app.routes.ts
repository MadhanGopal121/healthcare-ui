import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Dashboard } from './dashboard/dashboard';
import { PatientsModule } from './patients/patients-module';
import { Doctor } from './doctor/doctor';
import { PatientList } from './patients/patient-list/patient-list';
import { AppointmentBook } from './appointments/appointment-book/appointment-book';
import { Billing } from './billing/billing';
import { Reports } from './reports/reports';
import { Settings } from './settings/settings';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    },

    {
    path: 'login',
    loadComponent: () =>
        import('./auth/login/login')
        .then(m => m.Login)
    },
    {
    path: 'register',
    loadComponent: () =>
        import('./auth/register/register')
        .then(m => m.Register)
    },
    {
    path: 'dashboard',
    loadComponent: () =>
        import('./dashboard/dashboard')
        .then(m => m.Dashboard)
    },
    {
    path: 'patients',
    loadComponent: () =>
        import('./patients/patient-list/patient-list')
        .then(m => m.PatientList)
    },
    {
    path: 'doctors',
    loadComponent: () =>
        import('./doctor/doctor')
        .then(m => m.Doctor)
    },
    {
    path: 'appointments',
    loadComponent: () =>
        import('./appointments/appointment-book/appointment-book')
        .then(m => m.AppointmentBook)
    },
    {
    path: 'billing',
    loadComponent: () =>
        import('./billing/billing')
        .then(m => m.Billing)
    },
    {
    path: 'reports',
    loadComponent: () =>
        import('./reports/reports')
        .then(m => m.Reports)
    },
    {
    path: 'settings',
    loadComponent: () =>
        import('./settings/settings')
        .then(m => m.Settings)
    },
    
];

