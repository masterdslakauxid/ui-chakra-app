import { Component, OnInit } from '@angular/core';
import { StayService } from '../stay.service';
import { EnquiryFormDisplay } from '../EnquiryFormDisplay.model';

@Component({
  selector: 'app-waitlisted',
  templateUrl: './waitlisted.component.html',
  styleUrls: ['./waitlisted.component.css']
})
export class WaitlistedComponent implements OnInit {

  enquiryFormDisplay!: EnquiryFormDisplay;

  constructor(private stayService: StayService) { }

  ngOnInit(): void {
    this.getEnquiryFormDisplay();
  }
  getEnquiryFormDisplay(): void {
    this.stayService.getEnquiryStatusData("Waitlisted")
      .subscribe(enquiryFormDisplay => this.enquiryFormDisplay = enquiryFormDisplay);
  }
}
