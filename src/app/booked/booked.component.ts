import { Component, OnInit } from '@angular/core';
import { EnquiryFormDisplay } from '../EnquiryFormDisplay.model';
import { StayService } from '../stay.service';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.css']
})
export class BookedComponent implements OnInit {
  enquiryFormDisplay!: EnquiryFormDisplay;

  constructor(private stayService: StayService) { }

  ngOnInit(): void {
    this.getEnquiryFormDisplay();
  }
  getEnquiryFormDisplay(): void {
    this.stayService.getEnquiryStatusData("Booked")
      .subscribe(enquiryFormDisplay => this.enquiryFormDisplay = enquiryFormDisplay);
  }
}
