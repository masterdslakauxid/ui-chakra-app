import { Injectable } from '@angular/core';
import { Room } from './Room';
import { Observable, of } from 'rxjs';
import { RoomBooking } from './RoomBooking';
import { ROOMS, ROOMS_BOOKED_STATUS, ENQUIRY_FORMS } from './mock-rooms';

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
    // const enquiryForms: EnquiryForm[]=[];
    

  }
}
