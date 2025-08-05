import { Routes } from '@angular/router';
import { LoginComponent} from './components/pages/login/login.component'
import { CreateAccountComponent } from './components/pages/create-account/create-account.component';

export const routes: Routes = [
    { 'path': '', redirectTo: 'login', pathMatch: 'full' },
    { 'path': 'login', component: LoginComponent },
    { 'path': 'signup', component: CreateAccountComponent},
];
