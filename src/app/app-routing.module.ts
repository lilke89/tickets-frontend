import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthPrivateGuard, AuthPublicGuard} from '../auth.guard';
import {NotFoundComponent} from './not-found/not-found.component';
import {TicketsComponent} from './tickets/tickets.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthPublicGuard]
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    canActivate: [AuthPrivateGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthPublicGuard]
  },
  { path: '',
    redirectTo: '/tickets',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
