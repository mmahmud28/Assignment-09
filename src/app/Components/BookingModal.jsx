"use client";

import toast from "react-hot-toast";

const BookingModal = ({ bookingData, token }) => {

    const handleBooking = async () => {
        try {
            const res = await fetch("http://localhost:5000/booking_Tutor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(bookingData),
            });

            const result = await res.json();

            if (result.insertedId) {
                toast.success("Booking completed successfully!");

                document.getElementById("book-session-modal").checked = false;
            } else {
                toast.error("Booking failed!");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <>
            <button
                type="button"
                onClick={handleBooking}
                className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 text-sm font-black text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 sm:w-auto"
            >
                Confirm Booking
            </button>
        </>
    );
};

export default BookingModal;