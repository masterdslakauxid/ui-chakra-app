import { Component, OnInit } from '@angular/core';
import { EnquiryForm } from '../EnquiryForm.model';
import { StayService } from '../stay.service';
import { EnquiryFormDisplay } from '../EnquiryFormDisplay.model';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  enquiryFormDisplay!: EnquiryFormDisplay;

  constructor(private stayService: StayService) { }

  ngOnInit(): void {
    this.getEnquiryFormDisplay();
  }
  getEnquiryFormDisplay(): void {
    this.stayService.getEnquiryStatusData("n/a")
      .subscribe(enquiryFormDisplay => this.enquiryFormDisplay = enquiryFormDisplay);
  }
}
