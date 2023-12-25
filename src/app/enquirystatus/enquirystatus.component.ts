import { Component, OnInit } from '@angular/core';
import { EnquiryForm } from '../EnquiryForm.model';
import { StayService } from '../stay.service';
import { EnquiryFormDisplay } from '../EnquiryFormDisplay.model';

@Component({
  selector: 'app-enquirystatus',
  templateUrl: './enquirystatus.component.html',
  styleUrls: ['./enquirystatus.component.css']
})
export class EnquirystatusComponent implements OnInit {

  
  formData!: any;
  enquiryFormDisplay!: EnquiryFormDisplay;

  constructor(private stayService: StayService) { }

  ngOnInit(): void {
   this.getEnquiryForms();   
   console.log("Getting from service " + this.formData["Form Responses 1"][0]["Timestamp"]);
   this.enquiryFormDisplay = new  EnquiryFormDisplay();    
    this.formData["Form Responses 1"].forEach((element: { [x: string]: string; }) => {
      const enquiryForm = new EnquiryForm();
      enquiryForm.timestamp = element["Timestamp"];
      enquiryForm.emailAddress = element["Email Address"];      
      enquiryForm.fullName = element["Full Name"];
      enquiryForm.age = element["Age"];
      enquiryForm.gender = element["Gender"];
      enquiryForm.whatsappNumber = element["WhatsApp number"];
      enquiryForm.address = element["Address"];
      enquiryForm.howManyMembers = element["How many members?"];
      enquiryForm.noOfRooms = element["Number of rooms"];
      enquiryForm.acOrNonAc = element["AC / Non-AC"];
      enquiryForm.arrivalDate = element["Arrival date"];
      enquiryForm.arrivalTime = element["Arrival time"];
      enquiryForm.departureDate = element["Departure date"];
      enquiryForm.departureTime = element["Departure time"];
      enquiryForm.detailsOfMembers = element["Please provide the details of the other members in your group. Name, Age, Gender, Your Relationship with them. "];
      enquiryForm.remarks = element["Remarks"];          
      this.enquiryFormDisplay.enquiryForms.push(enquiryForm);
    });
   
  }

  getEnquiryForms(): void {
   this.stayService.getEnquiryForms()
       .subscribe(formData => this.formData = formData);
 }

}
