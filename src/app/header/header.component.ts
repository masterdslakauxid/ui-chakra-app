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
        label: 'Lab',
        icon: 'pi pi-fw pi-phone',
        routerLink: "/lab",
        routerLinkActiveOptions: 'active'
      },
      {
        label: 'Enquiry Details',
        icon: 'pi pi-fw pi-phone',
        routerLink: "/enquiry",
        routerLinkActiveOptions: 'active'
      },
      {
        label: 'Available Rooms',
        icon: 'pi pi-fw pi-building',
        routerLink: "/roomstatus",
        routerLinkActiveOptions: 'active'
      },
    ];
  }

}
