import { Injectable } from '@angular/core';
import { Room } from './Room';
import { Observable, of } from 'rxjs';
import { RoomBooking } from './RoomBooking';
import { ROOMS, ROOMS_BOOKED_STATUS, ENQUIRY_FORMS, ENQUIRY_STATUS } from './mock-rooms';
import { EnquiryFormDisplay } from './EnquiryFormDisplay.model';
import { EnquiryForm } from './EnquiryForm.model';

@Injectable({
  providedIn: 'root'
})
export class StayService {

  constructor() { }
  // getRooms(): Room[] {
  //   return ROOMS;
  // }
  getRooms(): Observable<Room[]> {
    const rooms = of(ROOMS);
    return rooms;
  }
  getRoomBookings(): Observable<RoomBooking[]> {
    const heroes = of(ROOMS_BOOKED_STATUS);
    return heroes;
  }
  getEnquiryForms(): Observable<any> {
    const enquiryFormsObj = of(ENQUIRY_FORMS);
    return enquiryFormsObj;
  }
  getEnquiryStatus(): Observable<any> {
    const enquiryFormsObj = of(ENQUIRY_STATUS);
    return enquiryFormsObj;
  }

  enquiryFormDisplay!: EnquiryFormDisplay;
  enquiryStatusData!: any;
  formData!: any;


  getEnquiryStatusData(type:string): Observable<EnquiryFormDisplay> {

    
    this.getEnquiryForms()
         .subscribe(formData => this.formData = formData);
    
    this.getEnquiryStatus()  
    .subscribe(enquiryStatusData => this.enquiryStatusData = enquiryStatusData);
 
    let map = new Map([]);
     this.enquiryStatusData.enquiryStatus.forEach((element: { [x: string]: string; }) => {
       console.log(element['timestamp']);
       console.log(element['email']);
       map.set(element['timestamp'] + "_" + element['email'], element["status"]);
     });
 
    const enquiryState = ["Booked","Waitlisted"];
    console.log("Getting from service " + this.formData["Form Responses 1"][0]["Timestamp"]);
    this.enquiryFormDisplay = new  EnquiryFormDisplay();    
     this.formData["Form Responses 1"].forEach((element: { [x: string]: string; }) => {
       const key = element["Timestamp"] + "_" +element["Email Address"];
       if(map.has(key) && map.get(key)) {
        if(map.get(key)==type) {
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
        }
       } else {
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
       }      
     });
    const enquiryFormDisplay = of(this.enquiryFormDisplay);
    return enquiryFormDisplay;
  }

}
