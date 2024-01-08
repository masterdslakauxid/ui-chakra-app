import { Component, OnInit } from '@angular/core';
import { EnquiryForm } from '../EnquiryForm.model';
import { StayService } from '../stay.service';
import { EnquiryFormDisplay } from '../EnquiryFormDisplay.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  enquiryFormDisplay!: EnquiryFormDisplay;

  constructor(private stayService: StayService, private router: Router,) { }

  ngOnInit(): void {
    this.getEnquiryFormDisplay();
  }
  getEnquiryFormDisplay(): void {
    this.stayService.getEnquiryStatusData("n/a")
      .subscribe(enquiryFormDisplay => this.enquiryFormDisplay = enquiryFormDisplay);
  }
  processEnquiry(emailAddress: string) {
    console.log(emailAddress);
    //this.router.navigate(['/roomstatus', '']);
    this.router.navigate(['/roomstatus']);
  }
}
