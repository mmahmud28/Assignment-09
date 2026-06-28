import React from 'react';
import BookingTutor from '../Components/BookingTutor';
 const booking = {
        _id: "booking001",
        tutorId: "tutor001",
        tutorName: "Mr. Rahim Ahmed",
        tutorSubject: "Mathematics",
        tutorEmail: "tutor@gmail.com",
        studentName: "RD Plus",
        studentEmail: "student@gmail.com",
        studentPhone: "01850020101",
        sessionDate: "2026-07-01",
        availableDays: "Sun - Thu",
        availableTime: "5:00 PM - 8:00 PM",
        hourlyFee: 500,
        bookStatus: "pending",
        sessionToken: "MQ-2026-874521",
    };
    
const MyTutorPage = () => {
    return (
        <div>

            <BookingTutor booking={booking} />
            
        </div>
    );
};

export default MyTutorPage;