import { Component, OnInit } from '@angular/core';
import {Ticket} from '../common/interface/tickets.interface';
import {TicketService} from '../common/services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  private tickets: Ticket[];
  private ticketsServiceSubscriber;

  constructor(private ticketsService: TicketService) {

    this.ticketsServiceSubscriber = ticketsService.getTickets().subscribe(res => {
      console.log(res);
    });

  }

  ngOnInit() {
  }

}
