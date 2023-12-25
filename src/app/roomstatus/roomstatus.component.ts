import { Component, OnInit } from '@angular/core';
import { Room } from '../Room';
import { StayService } from '../stay.service';
import { RoomBooking } from '../RoomBooking';
import { DatePipe } from '@angular/common';
import { BookingStatus } from '../BookingStatus';

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
 
  currentMonth!:number;

  formData = {
    "Form Responses 1":[
       {
          "Timestamp":"7/13/2021 9:15:24",
          "Email Address":"captkk83@gmail.com",
          "Full Name":"Kunal Kadam",
          "Age":"38",
          "Gender":"Male",
          "WhatsApp number":"7506581386",
          "Address":"A2/204,Highland Gardens, Dhokali, Thane ( W) Maharashtra,400608",
          "How many members? ":"4",
          "Number of rooms":"1",
          "AC / Non-AC":"Non-AC",
          "Arrival date":"7/22/21",
          "Arrival time":"5:00:00 PM",
          "Departure date":"7/27/21",
          "Departure time":"1:00:00 PM",
          "Please provide the details of the other members in your group. Name, Age, Gender, Your Relationship with them. ":"1)Swati Kadam, 38 , Female ,Wife\n2)Nitara Kadam , 4.3y ,Female, Doughter\n3)Sudhanwa Kadam, 1.9y , Male , Son",
          "Remarks":"We have two small kids with us ."
       },
       {
          "Timestamp":"7/14/2021 21:59:27",
          "Email Address":"adv.mmdixit@gmail.com",
          "Full Name":"Maneesh Dixit",
          "Age":"43",
          "Gender":"Male",
          "WhatsApp number":"9819021068",
          "Address":"D-27, Poorva CHS, Opp Saraswati English School, Panchpakhadi, Thane West",
          "How many members? ":"2",
          "Number of rooms":"1",
          "AC / Non-AC":"Non-AC",
          "Arrival date":"7/23/21",
          "Arrival time":"5:30:00 PM",
          "Departure date":"7/25/21",
          "Departure time":"2:00:00 PM",
          "Please provide the details of the other members in your group. Name, Age, Gender, Your Relationship with them. ":"Archana Dixit, 38, Female, Wife"
       },
       {
          "Timestamp":"7/18/2021 13:33:12",
          "Email Address":"rohanbir23@gmail.com",
          "Full Name":"Rohanbir Singh",
          "Age":"28",
          "Gender":"male",
          "WhatsApp number":"8750129229",
          "Address":"B2302, Hiranandani Greenwood, Kelambakkam, TN 603103",
          "How many members? ":"1",
          "Number of rooms":"1",
          "AC / Non-AC":"Non-AC",
          "Arrival date":"7/19/21",
          "Arrival time":"5:00:00 PM",
          "Departure date":"7/26/21",
          "Departure time":"8:00:00 AM",
          "Please provide the details of the other members in your group. Name, Age, Gender, Your Relationship with them. ":"NA",
          "Remarks":"Budget traveller looking for single person stay for the 7 days."
       }
    ]
 };

  constructor(private stayService: StayService, public datepipe: DatePipe) { }
  
  ngOnInit(): void {
    // const str = '2024-07-21';

    // const date1 = new Date(str);
    // console.log(date1);

    this.getRooms();
    this.getMonth();
    this.getRoomBookings();

    this.firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    this.lastDay = new Date(this.currentDate.getFullYear(),this.currentDate.getMonth() + 1, 0);

    // const dateL =new Date();
    // let latest_date =this.datepipe.transform(dateL, 'yyyy-MM-dd');
    // console.log (" test .....>" + latest_date);


    for (var i = 1; i < 31; i++) {
      var date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i);    
      var latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');  
      this.dates.push(latest_date?latest_date : "" );
    } 

    // for (booking: this.roomsBookings) {

    // }

    this.dates.forEach( (date) => {
      console.log(date);
     // console.log("Day ", date.getDay());
      this.roomsBookings.forEach( (booking) => {

        // bookingstatus: BookingStatus = {
        //   date: "2023-12-21",
        //   status: ['a','b'] 
        // }
         // console.log(booking.bookedOn);
          var bookedOnLocal:string[] = booking.bookedOn;
         // console.log(" Date" + date + " , " + booking.bookedOn.includes(date))
         if(booking.bookedOn.includes(date)) {
             console.log(" Date" + date + " , " + booking.roomNo  + ", "  +  booking.bookedOn.includes(date))
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
  getMonth() {
    this.currentMonth =this.currentDate.getMonth();
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

