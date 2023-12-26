// #docregion
import { Room } from './Room';
import { RoomBooking } from './RoomBooking';

export const ROOMS: Room[] = [
   { roomNo: 'SP B1', Descr: 'Dormatary room' },
   { roomNo: 'SP 101', Descr: 'Room' }
];

export const ROOMS_BOOKED_STATUS: RoomBooking[] = [
   { roomNo: 'SP B1', bookedOn: ['2023-12-23', '2023-12-22'] },
   { roomNo: 'SP 101', bookedOn: ['2023-12-20', '2023-12-21'] }
];

export const ENQUIRY_STATUS = {
   "enquiryStatus": [
      {
         "timestamp": "7/13/2021 9:15:24",
         "email": "captkk83@gmail.com",
         "status": "Booked"
      },
      {
         "timestamp": "7/14/2021 21:59:27",
         "email": "adv.mmdixit@gmail.com",
         "status": "Waitlisted"
      },
      {
         "timestamp": "7/18/2021 13:33:12",
         "email": "rohanbir23@gmail.com",
         "status": "n/a"
      }
   ]
};

export const ENQUIRY_FORMS = {
   "Form Responses 1": [
      {
         "Timestamp": "7/13/2021 9:15:24",
         "Email Address": "captkk83@gmail.com",
         "Full Name": "Kunal Kadam",
         "Age": "38",
         "Gender": "Male",
         "WhatsApp number": "7506581386",
         "Address": "A2/204,Highland Gardens, Dhokali, Thane ( W) Maharashtra,400608",
         "How many members?": "4",
         "Number of rooms": "1",
         "AC / Non-AC": "Non-AC",
         "Arrival date": "7/22/21",
         "Arrival time": "5:00:00 PM",
         "Departure date": "7/27/21",
         "Departure time": "1:00:00 PM",
         "Please provide the details of the other members in your group. Name, Age, Gender, Your Relationship with them. ": "1)Swati Kadam, 38 , Female ,Wife\n2)Nitara Kadam , 4.3y ,Female, Doughter\n3)Sudhanwa Kadam, 1.9y , Male , Son",
         "Remarks": "We have two small kids with us ."
      },
      {
         "Timestamp": "7/14/2021 21:59:27",
         "Email Address": "adv.mmdixit@gmail.com",
         "Full Name": "Maneesh Dixit",
         "Age": "43",
         "Gender": "Male",
         "WhatsApp number": "9819021068",
         "Address": "D-27, Poorva CHS, Opp Saraswati English School, Panchpakhadi, Thane West",
         "How many members?": "2",
         "Number of rooms": "1",
         "AC / Non-AC": "Non-AC",
         "Arrival date": "7/23/21",
         "Arrival time": "5:30:00 PM",
         "Departure date": "7/25/21",
         "Departure time": "2:00:00 PM",
         "Please provide the details of the other members in your group. Name, Age, Gender, Your Relationship with them. ": "Archana Dixit, 38, Female, Wife"
      },
      {
         "Timestamp": "7/18/2021 13:33:12",
         "Email Address": "rohanbir23@gmail.com",
         "Full Name": "Rohanbir Singh",
         "Age": "28",
         "Gender": "male",
         "WhatsApp number": "8750129229",
         "Address": "B2302, Hiranandani Greenwood, Kelambakkam, TN 603103",
         "How many members?": "1",
         "Number of rooms": "2",
         "AC / Non-AC": "Non-AC",
         "Arrival date": "7/19/21",
         "Arrival time": "5:00:00 PM",
         "Departure date": "7/26/21",
         "Departure time": "8:00:00 AM",
         "Please provide the details of the other members in your group. Name, Age, Gender, Your Relationship with them. ": "NA",
         "Remarks": "Budget traveller looking for single person stay for the 7 days."
      }
   ]
};