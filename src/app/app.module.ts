import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {appRoutingProviders} from '../auth.guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketComponent } from './tickets/ticket/ticket.component';
import { RegisterComponent } from './register/register.component';
import { NewTicketDialogComponent } from './tickets/new-ticket-dialog/new-ticket-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    TicketsComponent,
    TicketComponent,
    RegisterComponent,
    NewTicketDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
          return     localStorage.getItem('access_token'); },
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: [
          'http://localhost:3000/auth/login',
          'http://localhost:3000/auth/register'
        ]
      }
    }),
    ModalModule.forRoot()
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewTicketDialogComponent
  ]
})
export class AppModule { }
