import { Component, OnInit } from '@angular/core';
import { Booking } from '../Booking.model';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

  constructor() { }

  // currentStatus = {
  //   [
  //     {
  //       "B1": [{ 'checkInDate': '2024-01-01', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-02', 'checkOutTime': '11:00 AM' },
  //       { 'checkInDate': '2024-01-03', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-04', 'checkOutTime': '11:00 AM' }]
  //     }
  //   ]
  // };


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

  // currentStatus = {
  //   [:
  //     {"B1": [{ 'checkInDate': '2024-01-01', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-02', 'checkOutTime': '11:00 AM' },
  //     { 'checkInDate': '2024-01-03', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-04', 'checkOutTime': '11:00 AM'}]}
  //    "B2": [{ 'checkInDate': '2024-01-01', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-01', 'checkOutTime': '11:00 AM' },
  //    { 'checkInDate': '2024-01-04', 'checkInTime': '12:00 PM', 'checkOutDate': '2024-01-05', 'checkOutTime': '11:00 AM' }]
  //  ],
  // };

  currentStatusObj: any = [];

  ngOnInit(): void {
    //this.dateCompare();
    // this.dateTimeCompare();
    // const dateOneStr = '2021-05-10';
    // const dateTwoStr = '2021-05-10';
    // this.dateCompare(dateOneStr, dateTwoStr);
    // console.log(this.currentStatus[0]["B1"][0].checkInDate);
    // console.log(this.currentStatus[0]["B1"][0].checkInTime);

    // const requestedDateTimeStr = "2024-01-01 12:00 PM";
    // const requestedCheckOutStr = "2024-01-02 11:00 PM";
    // this.showAvailableRooms(requestedDateTimeStr, requestedCheckOutStr);

    this.jsonToDateObj();
    //this.bookedDates();
  }
  bookedDates() {
    this.currentStatusObj.forEach((element: { [x: string]: string; }) => {
      console.log(element["checkIn"]);
      console.log(element["checkOut"]);
    });
  }

  jsonToDateObj() {

    this.bookedStatus.forEach((mainElement: any) => {
      console.log(mainElement.roomNo);
      console.log(mainElement.bookedDates);

      mainElement.bookedDates.forEach((element: { [x: string]: string; }) => {
        const booking = new Booking();
        booking.checkIn = element["checkInDate"] + " " + element["checkInTime"];
        booking.checkOut = element["checkOutDate"] + " " + element["checkOutTime"];
        // console.log("checkin " + booking.checkIn);
        // console.log("checkOut " + booking.checkIn);
        //  console.log(mainElement.roomNo);
        this.bookedRoomsMap.set(mainElement.roomNo, booking);
        /// this.currentStatusObj.push(booking);
      });
    });
    type NewType = Booking;

    for (let key of this.bookedRoomsMap.keys()) {
      console.log(key);
      console.log(this.bookedRoomsMap.get(key)?.checkIn);
    }

    // const b1 = this.bookedRoomsMap.get("B1");
    // const b2 = this.bookedRoomsMap.get("B2");
    // console.log("B1 = " + b1.checkIn);
    // console.log("B2 = " + b2.checkOut);

    // this.currentStatus[0]["B1"].forEach((element: { [x: string]: string; }) => {
    //   const booking = new Booking();
    //   booking.checkIn = element["checkInDate"] + " " + element["checkInTime"];
    //   booking.checkOut = element["checkOutDate"] + " " + element["checkOutTime"];
    //   this.currentStatusObj.push(booking);
    // });

  }

  showAvailableRooms(requestedDateTimeStr: string, requestedCheckOutStr: string) {


    // console.log(this.currentStatus[0]["B1"][0].checkOutDate);
    // console.log(this.currentStatus[0]["B1"][0].checkOutTime);
    // const checkOutDateStr = this.currentStatus[0]["B1"][0].checkOutDate + " " + this.currentStatus[0]["B1"][0].checkOutTime;
    // console.log("Booked date str" + checkOutDateStr);
    // this.compareWithBookedDate(checkOutDateStr, requestedDateTimeStr);
  }

  compareWithBookedDate(bookedDateTimeStr: string, expectedDateTimeStr: string) {

    const bookedDate = new Date(bookedDateTimeStr);
    const requestedDate = new Date(expectedDateTimeStr);

    console.log("Booked date" + bookedDate);
    console.log("Requested date" + requestedDate);

    if (requestedDate.getTime() > bookedDate.getTime()) {
      console.log("Room is available");
    } else {
      console.log("Room is not available");
    }


  }

  dateCompare(dateOneStr: string, dateTwoStr: string) {
    const dateOne = new Date(dateOneStr);
    const dateTwo = new Date(dateTwoStr);

    if (dateOne.getTime() === dateTwo.getTime()) {
      console.log("Two dates are equal");
    }

    console.log(dateOne);
    console.log(dateTwo);
  }

  dateTimeCompare() {
    var time1 = "09:56 AM";
    var time2 = "09:59 AM";
    const dateOne = new Date('2021-05-10 ' + time1);
    const dateTwo = new Date('2021-05-9 ' + time2);



    if (dateOne.getTime() === dateTwo.getTime()) {
      console.log("Two dates are equal");
    }

    if (dateOne.getTime() > dateTwo.getTime()) {
      console.log("Date one is greater than Date Two");
    }

    if (dateOne.getTime() < dateTwo.getTime()) {
      console.log("Date one is lesser than Date Two");
    }


    console.log(dateOne);
    console.log(dateTwo);
  }


}
