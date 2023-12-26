import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomstatusComponent } from './roomstatus/roomstatus.component';
import { TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';
import { EnquirystatusComponent } from './enquirystatus/enquirystatus.component';
import {TabView} from 'primeng/tabview';
import {TabViewModule} from 'primeng/tabview';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { BookedComponent } from './booked/booked.component';
import { WaitlistedComponent } from './waitlisted/waitlisted.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomstatusComponent,
    EnquirystatusComponent,
    EnquiryComponent,
    BookedComponent,
    WaitlistedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    TabViewModule    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
