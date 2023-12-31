import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../Booking.model';
import { Room } from '../Room';
import { RoomAvailability } from '../RoomAvailability.model';
import { RoomBooking } from '../RoomBooking';
import { StayService } from '../stay.service';

@Component({
  selector: 'app-roomstatus',
  templateUrl: './roomstatus.component.html',
  styleUrls: ['./roomstatus.component.css']
})
export class RoomstatusComponent implements OnInit {

  rooms: Room[] = [];
  roomsBookings: RoomBooking[] = [];
  currentDate = new Date();
  checkIn!: Date;
  checkOut!: Date;
  minDate: Date = new Date();
  minDate1: Date = new Date();
  roomAvailability = new RoomAvailability();
  currentMonth!: number;
  bookedRoomsMap: Map<string, Booking> = new Map<string, Booking>([]);
  bookedRoomsArr: { roomId: string, bookings: Booking[] }[] = [];
  roomsIds: string[] = [];
  totalDays: string = "0 days";

  bookedStatus: { roomNo: string, bookedDates: { 'checkInDate': string, 'checkInTime': string, 'checkOutDate': string, 'checkOutTime': string, 'reservedFor': string }[] }[] = [
    {
      'roomNo': 'B1', bookedDates: [{ 'checkInDate': '2024-01-01', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-02', 'checkOutTime': '11:00 AM', 'reservedFor': 'Ram' },
      { 'checkInDate': '2024-01-03', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-07', 'checkOutTime': '11:00 AM', 'reservedFor': 'Lakshman' }
      ]
    },
    {
      'roomNo': 'B2', bookedDates: [{ 'checkInDate': '2024-01-01', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-01', 'checkOutTime': '11:00 AM', 'reservedFor': 'Krishna' },
      { 'checkInDate': '2024-01-04', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-05', 'checkOutTime': '11:00 AM', 'reservedFor': 'Perumal' }
      ]
    }];

  constructor(private stayService: StayService, public datepipe: DatePipe) { }


  //Failing test case :  Current date 31/23 and checkout date 1/1/24 or 2/1/24
  ngOnInit(): void {
    //this.minDate1.setDate(this.minDate.getDate() + 1);
    this.jsonToDateObj();
  }

  checkAvailability() {
    console.log("checkIn " + this.checkIn);
    console.log("checkOut " + this.checkOut);
  }




  onBlurMethod() {
    this.minDate1 = new Date(this.checkIn);
    this.minDate1.setDate(this.minDate1.getDate() + 1);

    this.checkOut = new Date(this.checkIn);
    this.checkOut.setDate(this.checkOut.getDate() + 1);
    this.totalDays = this.calculateDiff(this.checkIn, this.checkOut) + " day(s)";
  }
  onBlurCheckoutDate() {
    this.totalDays = this.calculateDiff(this.checkIn, this.checkOut) + " day(s)";

  }
  calculateDiff(date1: any, date2: any) {
    // console.log("  date 1 and date2 " + date1 + "=" + date2);
    // var date1: any = this.checkIn;
    // var date2: any = this.checkOut
    var diffDays: any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
    //  console.log("days " + diffDays);
    return diffDays;
  }

  jsonToDateObj() {

    this.bookedStatus.forEach((mainElement: any) => {
      // console.log(mainElement.roomNo);
      // console.log(mainElement.bookedDates);
      this.roomsIds.push(mainElement.roomNo);
      let bookingList: Booking[] = [];
      mainElement.bookedDates.forEach((element: { [x: string]: string; }) => {
        const booking = new Booking();
        booking.checkIn = element["checkInDate"] + " " + element["checkInTime"];
        booking.checkOut = element["checkOutDate"] + " " + element["checkOutTime"];
        booking.totalDays = this.calculateDiff(new Date(element["checkInDate"]), new Date(element["checkOutDate"]));
        booking.reservedFor = element["reservedFor"];
        this.bookedRoomsMap.set(mainElement.roomNo, booking);
        bookingList.push(booking);
      });
      this.bookedRoomsArr.push({ roomId: mainElement.roomNo, bookings: bookingList })
    });

    // for (let key of this.bookedRoomsMap.keys()) {
    //   console.log(key);
    //   console.log(this.bookedRoomsMap.get(key)?.checkIn);
    // }
  }
  getMonth() {
    this.currentMonth = this.currentDate.getMonth();
  }

  getRooms(): void {
    this.stayService.getRooms()
      .subscribe(rooms => this.rooms = rooms);
  }

  getRoomBookings(): void {
    this.stayService.getRoomBookings()
      .subscribe(roomsBookings => this.roomsBookings = roomsBookings);
  }

}

