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
  bookedRoomsArr: { roomId: string, bookings: Booking[], statusMsg: string, status: boolean }[] = [];
  roomsIds: string[] = [];
  totalDays: string = "0 days";
  status!: string;

  bookedStatus: { roomNo: string, bookedDates: { 'checkInDate': string, 'checkOutDate': string, 'reservedFor': string }[] }[] = [
    {
      'roomNo': 'B1', bookedDates: [{ 'checkInDate': '2024-01-01', 'checkOutDate': '2024-01-02', 'reservedFor': 'Ram' },
      { 'checkInDate': '2024-01-03', 'checkOutDate': '2024-01-07', 'reservedFor': 'Lakshman' }
      ]
    },
    {
      'roomNo': 'B2', bookedDates: [{ 'checkInDate': '2024-01-01', 'checkOutDate': '2024-01-02', 'reservedFor': 'Krishna' },
      { 'checkInDate': '2024-01-04', 'checkOutDate': '2024-01-05', 'reservedFor': 'Perumal' }
      ]
    },
    {
      'roomNo': 'B3', bookedDates: [{ 'checkInDate': '2024-01-10', 'checkOutDate': '2024-01-14', 'reservedFor': 'Kanna' }]
    }
  ];

  constructor(private stayService: StayService, public datepipe: DatePipe) { }

  //Failing test case :  Current date 31/23 and checkout date 1/1/24 or 2/1/24
  ngOnInit(): void {
    //this.minDate1.setDate(this.minDate.getDate() + 1);
    this.jsonToDateObj();
    this.aBookedFor = "Shiva";
  }

  value!: Date;
  timeValue!: string;
  checkInTime!: Date;
  checkOutTime!: Date;

  // onSelect($event: Date) {
  //   let hour = new Date($event).getHours();
  //   let min = new Date($event).getMinutes();
  //   this.timeValue = `${hour}:${min}`;
  // }

  bookingRequest = new Booking();
  aBookedFor!: string;

  checkAvailability() {
    console.log("checkIn " + this.checkIn);
    console.log("checkOut " + this.checkOut);
    let checkInStr = this.datepipe.transform(this.checkIn, 'yyyy-MM-dd');
    let checkOutStr = this.datepipe.transform(this.checkOut, 'yyyy-MM-dd');
    console.log(" checkInStr " + checkInStr);
    console.log(" checkOutStr " + checkOutStr);

    console.log("checkIn Time " + this.checkInTime);
    console.log("checkOut Time" + this.checkOutTime);
    let checkInTimeStr = this.datepipe.transform(this.checkInTime, 'hh:mm a');
    let checkOutTimeStr = this.datepipe.transform(this.checkOutTime, 'hh:mm a');
    console.log(" checkInTimeStr " + checkInTimeStr);
    console.log(" checkOutTimeStr " + checkOutTimeStr);

    let unavailable = false;
    // let bookingRequest = new Booking();
    if (checkInTimeStr && checkOutTimeStr) {
      this.bookingRequest.checkIn = checkInStr + " " + checkInTimeStr;
      this.bookingRequest.checkOut = checkOutStr + " " + checkOutTimeStr;
    } else {
      this.bookingRequest.checkIn = checkInStr + " 12:00 PM";
      this.bookingRequest.checkOut = checkOutStr + " 11:00 AM";
    }

    for (let bookedRoom of this.bookedRoomsArr) {
      console.log(bookedRoom.roomId);
      if (bookedRoom.bookings.length == 0) {
        bookedRoom.statusMsg = "Congrats .. room is available. This is the first booking " + this.getDatesAsMsg(this.bookingRequest.checkIn, this.bookingRequest.checkOut);
        bookedRoom.status = true;
      } else {
        for (var i = 0; i < bookedRoom.bookings.length; i++) {
          let booking = bookedRoom.bookings[i];
          let currentBookedCheckedIn = new Date(booking.checkIn);
          let currentBookedCheckedOut = new Date(booking.checkOut);

          let requestedCheckedIn = new Date(this.bookingRequest.checkIn);
          let requestedCheckedOut = new Date(this.bookingRequest.checkOut);

          if ((requestedCheckedIn.getTime() <= currentBookedCheckedIn.getTime()) && (requestedCheckedOut.getTime() <= currentBookedCheckedIn.getTime())) {
            console.log("Congratulations... Falls on the left");
            console.log("Req. time falling within or equal to the booked time");
            console.log("Req  " + this.bookingRequest.checkIn + " - " + this.bookingRequest.checkOut);
            console.log("Book " + booking.checkIn + " - " + booking.checkOut);
          } else if ((requestedCheckedIn.getTime() >= currentBookedCheckedOut.getTime()) && (requestedCheckedOut.getTime() >= currentBookedCheckedOut.getTime())) {
            console.log("Congratulations... Falls on the Right");
            console.log("Req. time falling within or equal to the booked time");
            console.log("Req  " + this.bookingRequest.checkIn + " - " + this.bookingRequest.checkOut);
            console.log("Book " + booking.checkIn + " - " + booking.checkOut);
          } else {
            console.log("Sorry... ");
            console.log("overlapping");
            console.log("Req  " + this.bookingRequest.checkIn + " - " + this.bookingRequest.checkOut);
            console.log("Book " + booking.checkIn + " - " + booking.checkOut);
            unavailable = true;
            break;
          }
        }
        if (unavailable) {
          bookedRoom.statusMsg = "Sorry. No vacant room is found for the selected dates" + this.getDatesAsMsg(this.bookingRequest.checkIn, this.bookingRequest.checkOut);
          console.log(this.bookingRequest);
          bookedRoom.status = false;
        } else {
          bookedRoom.statusMsg = "Congratulations. Room is available for the selected dates" + this.getDatesAsMsg(this.bookingRequest.checkIn, this.bookingRequest.checkOut);
          bookedRoom.status = true;
        }
        unavailable = false;
      }
    }
  }

  getDatesAsMsg(date1: string, date2: string) {
    // const checkinDate = this.datepipe.transform(date1, 'dd-MM-yyyy hh:mm');
    // const checkOutDate = this.datepipe.transform(date2, 'dd-MM-yyyy hh:mm');
    const msg = "Check-in date : " + date1 + " Check-out date : " + date2;
    return msg;
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
    var diffDays: any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
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
        booking.checkIn = element["checkInDate"]; //+ " " + element["checkInTime"];
        booking.checkOut = element["checkOutDate"];// + " " + element["checkOutTime"];
        booking.totalDays = this.calculateDiff(new Date(element["checkInDate"]), new Date(element["checkOutDate"]));
        booking.reservedFor = element["reservedFor"];
        this.bookedRoomsMap.set(mainElement.roomNo, booking);
        bookingList.push(booking);
      });
      this.bookedRoomsArr.push({ roomId: mainElement.roomNo, bookings: bookingList, statusMsg: '', status: false })
    });
  }
  initiateBooking(roomId: string, aCheckIn: string, aCheckOut: string, aBookedFor: string) {
    console.log("Button clicked" + roomId);
    console.log("Button clicked" + this.bookingRequest.checkIn);
    console.log("Button clicked" + this.bookingRequest.checkOut);
    console.log("Button clicked" + aBookedFor);
    //console.log( this.getDatesAsMsg(this.bookingRequest.checkIn, this.bookingRequest.checkOut));


    for (let bookedRoom of this.bookedStatus) {
      console.log(bookedRoom.roomNo);
      if (bookedRoom.roomNo == roomId) {
        bookedRoom.bookedDates.push({ 'checkInDate': this.bookingRequest.checkIn, 'checkOutDate': this.bookingRequest.checkOut, 'reservedFor': this.aBookedFor })
      }
    }
    this.bookedRoomsArr = [];
    this.jsonToDateObj();
    for (let bookedRoom of this.bookedStatus) {
      console.log(bookedRoom.roomNo);
      if (bookedRoom.roomNo == roomId) {
        for (let room of bookedRoom.bookedDates) {
          console.log(room);
        }
      }
    }


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

