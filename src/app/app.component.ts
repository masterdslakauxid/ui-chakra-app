import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spstay';
  items!: MenuItem[];
  ngOnInit() {
    this.items = [
      // {
      //   label: 'Enquiries',
      //   icon: 'fa-light fa-chevron-down',
      //   items: [
      //     {
      //       label: 'Edit',
      //       icon: 'pi pi-fw pi-pencil',
      //       items: [
      //         {
      //           label: 'Save',
      //           icon: 'pi pi-fw pi-calendar-plus'
      //         },
      //         {
      //           label: 'Delete',
      //           icon: 'pi pi-fw pi-calendar-minus'
      //         }
      //       ]
      //     },
      //     {
      //       label: 'Archieve',
      //       icon: 'pi pi-fw pi-calendar-times',
      //       items: [
      //         {
      //           label: 'Remove',
      //           icon: 'pi pi-fw pi-calendar-minus'
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   label: 'Availability',
      //   icon: 'pi pi-fw pi-calendar',
      //   items: [
      //     {
      //       label: 'Edit',
      //       icon: 'pi pi-fw pi-pencil',
      //       items: [
      //         {
      //           label: 'Sadhguru padham stay',
      //           icon: 'pi pi-fw pi-calendar-plus'
      //         },
      //         {
      //           label: 'Om Shanthi',
      //           icon: 'pi pi-fw pi-calendar-minus'
      //         }
      //       ]
      //     },
      //     {
      //       label: 'Archieve',
      //       icon: 'pi pi-fw pi-calendar-times',
      //       items: [
      //         {
      //           label: 'Remove',
      //           icon: 'pi pi-fw pi-calendar-minus'
      //         }
      //       ]
      //     }
      //   ]
      // },
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
