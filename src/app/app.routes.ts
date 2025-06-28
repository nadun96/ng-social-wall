import { Routes } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NgModule } from '@angular/core';
import { LoginComponent} from './components/pages/login/login.component'

export const routes: Routes = [
    {'path': 'login', component: LoginComponent},
];
