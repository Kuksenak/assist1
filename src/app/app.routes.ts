import { Routes } from '@angular/router';
import { LoginComponent } from './features/users/login/login.component';
import { RegisterComponent } from './features/users/register/register.component';
import { HomeComponent } from './features/home/home/home.component';
import { MfaComponent } from './features/mfa/mfa/mfa.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'mfa', component: MfaComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
