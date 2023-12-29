import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  title = 'spstay';
  items!: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Enquiry',
        icon: 'pi pi-fw pi-phone',
        routerLink: "/enquiry",
        routerLinkActiveOptions: 'active'
      },
      {
        label: 'Room Availability',
        icon: 'pi pi-fw pi-building',
        routerLink: "/roomstatus",
        routerLinkActiveOptions: 'active'
      },
    ];
  }

}
