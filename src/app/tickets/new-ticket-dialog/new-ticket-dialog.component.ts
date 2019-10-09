import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap';
import {TicketService} from '../../common/services/ticket.service';

@Component({
  selector: 'app-new-ticket-dialog',
  templateUrl: './new-ticket-dialog.component.html',
  styleUrls: ['./new-ticket-dialog.component.scss']
})
export class NewTicketDialogComponent implements OnInit {
  private newTicketForm: FormGroup;
  @Output() newTicketCreated = new EventEmitter();

  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private ticketsService: TicketService,
  ) { }

  ngOnInit() {
    this.newTicketForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  async createNewTicket() {
    const val = this.newTicketForm.value;
    const newTicket = await this.ticketsService.createNewTicket(val.title, val.content).toPromise();
    console.log(newTicket);
    this.newTicketCreated.emit(newTicket);
    this.bsModalRef.hide();
  }

  cancelCreatingTicket() {
    this.bsModalRef.hide();
  }

}
