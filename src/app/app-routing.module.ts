import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabComponent } from './lab/lab.component';
import { EnquirystatusComponent } from './enquirystatus/enquirystatus.component';
import { RoomstatusComponent } from './roomstatus/roomstatus.component';

const routes: Routes = [
  { path: 'lab', component: LabComponent },
  { path: 'enquiry', component: EnquirystatusComponent },
  { path: 'roomstatus', component: RoomstatusComponent },
  { path: '', component: LabComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
