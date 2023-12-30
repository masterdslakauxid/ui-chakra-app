import { Component, OnInit } from '@angular/core';
import { Room } from '../Room';
import { StayService } from '../stay.service';
import { RoomBooking } from '../RoomBooking';
import { DatePipe } from '@angular/common';
import { BookingStatus } from '../BookingStatus';
import { RoomAvailability } from '../RoomAvailability.model';
import { Booking } from '../Booking.model';

@Component({
  selector: 'app-roomstatus',
  templateUrl: './roomstatus.component.html',
  styleUrls: ['./roomstatus.component.css']
})
export class RoomstatusComponent implements OnInit {

  rooms: Room[] = [];
  roomsBookings: RoomBooking[] = [];

  currentDate = new Date();
  firstDay = new Date();
  lastDay = new Date();
  dates: string[] = [];

  roomAvailability = new RoomAvailability();

  currentMonth!: number;


  bookedStatus: { roomNo: string, bookedDates: { 'checkInDate': string, 'checkInTime': string, 'checkOutDate': string, 'checkOutTime': string }[] }[] = [
    {
      'roomNo': 'B1', bookedDates: [{ 'checkInDate': '2024-01-01', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-02', 'checkOutTime': '11:00 AM' },
      { 'checkInDate': '2024-01-03', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-04', 'checkOutTime': '11:00 AM' }
      ]
    },
    {
      'roomNo': 'B2', bookedDates: [{ 'checkInDate': '2024-01-01', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-01', 'checkOutTime': '11:00 AM' },
      { 'checkInDate': '2024-01-04', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-05', 'checkOutTime': '11:00 AM' }
      ]
    }];

  bookedRoomsMap: Map<string, Booking> = new Map<string, Booking>([]);

  constructor(private stayService: StayService, public datepipe: DatePipe) { }

  ngOnInit(): void {

    this.jsonToDateObj();
    //let roomAvailability = new RoomAvailability();
    // this.roomAvailability.rooms = ["B1", "B2", "B3"];
    // this.roomAvailability.availability = [{ bookedStatus: ['1/11 12:00 PM - 2/11 11:00 AM', 'yes', 'no'] }, { bookedStatus: ['2/11', '11:00 AM', 'yes', 'yes'] }];

    // this.getRooms();
    // this.getMonth();
    // this.getRoomBookings();

    // this.firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    // this.lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);

    // for (var i = 1; i < 31; i++) {
    //   var date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i);
    //   var latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
    //   this.dates.push(latest_date ? latest_date : "");
    // }


    this.dates.forEach((date) => {
      console.log(date);
      this.roomsBookings.forEach((booking) => {
        // bookingstatus: BookingStatus = {
        //   date: "2023-12-21",
        //   status: ['a','b'] 
        // }
        // console.log(booking.bookedOn);
        var bookedOnLocal: string[] = booking.bookedOn;
        // console.log(" Date" + date + " , " + booking.bookedOn.includes(date))
        if (booking.bookedOn.includes(date)) {
          console.log(" Date" + date + " , " + booking.roomNo + ", " + booking.bookedOn.includes(date))
        }
        // bookedOnLocal.forEach( (bookedDate) => {
        //   const str =bookedDate;
        //   let newDate = new Date(str);
        //   console.log(" system date" + newDate.getDay()  + " =  booked date" +  date.getDay());
        //   if(newDate.getDay()==date.getDay()) {
        //     console.log("Room"+ booking.roomNo + " booked on " + date);
        //   }
        // });
        // string[] bookedOn = booking.bookedOn;

      });
    });

    // for(var index in this.roomsBookings) { 
    //   console.log(this.roomsBookings[index]);  // output: Apple Orange Banana
    // }



  }
  jsonToDateObj() {

    this.bookedStatus.forEach((mainElement: any) => {
      console.log(mainElement.roomNo);
      console.log(mainElement.bookedDates);

      mainElement.bookedDates.forEach((element: { [x: string]: string; }) => {
        const booking = new Booking();
        booking.checkIn = element["checkInDate"] + " " + element["checkInTime"];
        booking.checkOut = element["checkOutDate"] + " " + element["checkOutTime"];
        this.bookedRoomsMap.set(mainElement.roomNo, booking);
      });
    });
    type NewType = Booking;

    for (let key of this.bookedRoomsMap.keys()) {
      console.log(key);
      console.log(this.bookedRoomsMap.get(key)?.checkIn);
    }
  }
  getMonth() {
    this.currentMonth = this.currentDate.getMonth();
  }

  // getRooms(): void {
  //   this.rooms = this.stayService.getRooms();
  // }

  getRooms(): void {
    this.stayService.getRooms()
      .subscribe(rooms => this.rooms = rooms);
  }

  getRoomBookings(): void {
    this.stayService.getRoomBookings()
      .subscribe(roomsBookings => this.roomsBookings = roomsBookings);
  }

}

