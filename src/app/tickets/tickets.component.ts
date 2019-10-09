import { Component} from '@angular/core';
import {Ticket} from '../common/interface/tickets.interface';
import {TicketService} from '../common/services/ticket.service';
import {AuthService} from '../common/services/auth.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {NewTicketDialogComponent} from './new-ticket-dialog/new-ticket-dialog.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  private tickets: Ticket[];
  private ticketsServiceSubscriber;
  public modalRef: BsModalRef;

  constructor(
    private authService: AuthService,
    private ticketsService: TicketService,
    private modalService: BsModalService,
  ) {

    this.ticketsServiceSubscriber = ticketsService.getTickets().subscribe(res => {
      this.tickets = res;
    });

  }

  async logout() {
    await this.authService.logout();
  }

  createTicket() {
    this.modalRef = this.modalService.show(
      NewTicketDialogComponent,
      {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false});
    this.modalRef.content.newTicketCreated.subscribe((newTicket) => {
      this.tickets.push(newTicket);
    });
    this.modalRef.content.closeBtnName = 'Cancel';
  }
}
