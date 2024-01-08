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
      },
      {
         "timestamp": "10/15/2021 17:05:58",
         "email": "solanki.atul@gmail.com",
         "status": "n/a"
      },
      {
         "timestamp": "10/15/2021 21:23:36",
         "email": "ssujeeth03@gmail.com",
         "status": "n/a"
      },
      {
         "timestamp": "10/16/2021 17:25:22",
         "email": "dr.ambal@gmail.com",
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
      },
      {
         "Timestamp": "10/15/2021 17:05:58",
         "Email Address": "solanki.atul@gmail.com",
         "Full Name": "atul solanki",
         "Age": "40",
         "Gender": "male",
         "WhatsApp number": "9998771191",
         "Address": "74, new arvind park society, opposite chandra prasad desai hall, Bapunagar, Ahmedabad-380024, Gujarat",
         "How many members? ": "1",
         "Number of rooms": "1",
         "AC / Non-AC": "AC, Non-AC",
         "Arrival date": "10/18/21",
         "Arrival time": "12:00:00 PM",
         "Departure date": "10/19/21",
         "Departure time": "12:30:00 PM",
         "Please provide the details of the other members in your group. Name, Age, Gender, Your Relationship with them. ": "none",
         "Remarks": "whichever room is best, please suggest that."
      },
      {
         "Timestamp": "10/15/2021 21:23:36",
         "Email Address": "ssujeeth03@gmail.com",
         "Full Name": "Radhakrishnan",
         "Age": "56",
         "Gender": "Male",
         "WhatsApp number": "9159860900",
         "Address": "22/39 4th Cross, KPN Colony, Tiruppur 641601",
         "How many members? ": "5",
         "Number of rooms": "2",
         "AC / Non-AC": "AC, Non-AC",
         "Arrival date": "10/16/21",
         "Arrival time": "12:00:00 PM",
         "Departure date": "10/18/21",
         "Departure time": "9:00:00 AM",
         "Please provide the details of the other members in your group. Name, Age, Gender, Your Relationship with them. ": "Radhakrishnan Male 56\nMeenakshi Jyoti Female 50\nAishwarya Krishnan Female 26\nAbhiram Male 21\nSujeeth Male 30\n"
      },
      {
         "Timestamp": "10/16/2021 17:25:22",
         "Email Address": "dr.ambal@gmail.com",
         "Full Name": "Dr. N. Ambalavanan",
         "Age": "62",
         "Gender": "Male",
         "WhatsApp number": "9841052868",
         "Address": "54/35, 8th west cross st, SHENOYNAGAR, Chennai 600030",
         "How many members? ": "4",
         "Number of rooms": "2",
         "AC / Non-AC": "AC",
         "Arrival date": "10/19/21",
         "Arrival time": "6:30:00 AM",
         "Departure date": "10/20/21",
         "Departure time": "8:00:00 PM",
         "Please provide the details of the other members in your group. Name, Age, Gender, Your Relationship with them. ": "Ponni - wife,  Gomathi- sister-in-law , Dr. Cheran - Co brother",
         "Remarks": "Hope to have a comfortable stay"
      }
   ]
};