import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ticket} from '../interface/tickets.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) { }

  getTickets() {
    return this.httpClient.get<Ticket[]>('http://localhost:3000/tickets');
  }
}
