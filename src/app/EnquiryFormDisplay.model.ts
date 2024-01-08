import { EnquiryForm } from './EnquiryForm.model';

export class EnquiryFormDisplay {

    configs = {
        "columns": ["timestamp", "emailAddress", "fullName", "age", "gender",
            "whatsappNumber", "address", "howManyMembers", "noOfRooms", "acOrNonAc",
            "arrivalDate", "arrivalTime", "departureDate", "departureTime", "detailsOfMembers", "remarks"],

        "showHideConfig": {
            "timestamp": false,
            "emailAddress": true,
            "fullName": true,
            "age": true,
            "gender": true,
            "whatsappNumber": false,
            "address": false,
            "howManyMembers": true,
            "noOfRooms": true,
            "acOrNonAc": true,
            "arrivalDate": true,
            "arrivalTime": true,
            "departureDate": true,
            "departureTime": true,
            "detailsOfMembers": false,
            "remarks": false,
            "booked": true,
        },
        "columnNames": {
            "timestamp": "Timestamp",
            "emailAddress": "Email",
            "fullName": "Name",
            "age": "Age",
            "gender": "Gender",
            "whatsappNumber": "Whatsapp number",
            "address": "Address",
            "howManyMembers": "#Members",
            "noOfRooms": "#Rooms",
            "acOrNonAc": "Room type",
            "arrivalDate": "Arrival",
            "arrivalTime": "Arrival Time",
            "departureDate": "Departure",
            "departureTime": "Departure Time",
            "detailsOfMembers": "Member details",
            "remarks": "Remarks",
            "booked": "Booking status"
        }
    };


    enquiryForms: EnquiryForm[] = [];
    setEnquiryForms(enqForm: EnquiryForm[]) {
        this.enquiryForms = enqForm;
    }
}