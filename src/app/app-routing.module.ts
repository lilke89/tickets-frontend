import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthPrivateGuard, AuthPublicGuard} from '../auth.guard';
import {NotFoundComponent} from './not-found/not-found.component';
import {TicketsComponent} from './tickets/tickets.component';

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
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
