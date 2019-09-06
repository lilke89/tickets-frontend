import { Component} from '@angular/core';
import {Ticket} from '../common/interface/tickets.interface';
import {TicketService} from '../common/services/ticket.service';
import {AuthService} from '../common/services/auth.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  private tickets: Ticket[];
  private ticketsServiceSubscriber;

  constructor(
    private ticketsService: TicketService,
    private authService: AuthService,
  ) {

    this.ticketsServiceSubscriber = ticketsService.getTickets().subscribe(res => {
      this.tickets = res;
    });

  }

  async logout() {
    await this.authService.logout();
  }

  createTicket() {
  }

}
