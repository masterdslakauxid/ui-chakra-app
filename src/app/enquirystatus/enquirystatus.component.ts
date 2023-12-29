import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-enquirystatus',
  templateUrl: './enquirystatus.component.html',
  styleUrls: ['./enquirystatus.component.css']
})
export class EnquirystatusComponent implements OnInit {
  messages!: Message[];

  constructor() { }

  ngOnInit(): void {
    // this.addMessages();
  }

  // addMessages() {
  //   this.messages.push([
  //     { severity: 'success', summary: 'Success', detail: 'Message Content' },
  //     { severity: 'info', summary: 'Info', detail: 'Message Content' },
  //     { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
  //     { severity: 'error', summary: 'Error', detail: 'Message Content' }
  //   ]);
  // }

  clearMessages() {
    this.messages = [];
  }
}
