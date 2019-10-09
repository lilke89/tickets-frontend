import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ticket} from '../interface/tickets.interface';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) { }

  getTickets() {
    return this.httpClient.get<Ticket[]>('http://localhost:3000/tickets');
  }

  createNewTicket(title: string, content: string) {
    return this.httpClient.post<{access_token: string}>('http://localhost:3000/tickets/create', {title, content})
      .pipe(
        tap(async (newTicket) => {
          return newTicket;
        }));
  }
}
