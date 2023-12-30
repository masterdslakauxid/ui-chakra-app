import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomstatusComponent } from './roomstatus/roomstatus.component';
import { TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';
import { EnquirystatusComponent } from './enquirystatus/enquirystatus.component';
import { TabViewModule } from 'primeng/tabview';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { BookedComponent } from './booked/booked.component';
import { WaitlistedComponent } from './waitlisted/waitlisted.component';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LabComponent } from './lab/lab.component';

const appRoutes: Routes = [
  { path: 'lab', component: LabComponent },
  { path: 'enquiry', component: EnquirystatusComponent },
  { path: 'roomstatus', component: RoomstatusComponent },
  { path: '', component: LabComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RoomstatusComponent,
    EnquirystatusComponent,
    EnquiryComponent,
    BookedComponent,
    WaitlistedComponent,
    HeaderComponent,
    FooterComponent,
    LabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    TabViewModule,
    MessageModule,
    MessagesModule,
    MenubarModule,
    MenuModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
    )
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
