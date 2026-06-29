"use client";
import React from "react";
import BookingTutor from "../Components/BookingTutor";

const MyTutorPage = () => {
    const [booking, setBooking] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch("http://localhost:5000/allBookings")
            .then((res) => res.json())
            .then((data) => {
                console.log("Response Data:", data); // এখানে লগ হবে

                setBooking(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Fetch Error:", error);
                setLoading(false);
            });
    }, []);

    console.log("Booking State:", booking); // State আপডেট হওয়ার পর লগ হবে

    return (
        <div className="mx-auto max-w-7xl p-5">
            {/* Page Header */}
            <div className="mb-8 rounded-3xl bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 p-8 text-white shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-100">
                    Student Dashboard
                </p>

                <h1 className="mt-2 text-4xl font-extrabold">
                    My Booked Tutors
                </h1>

                <p className="mt-4 max-w-3xl text-base leading-7 text-indigo-100">
                    Welcome to your booking dashboard. Here you can view all your booked
                    tutoring sessions, monitor booking and payment status, review session
                    details, and manage your learning schedule with ease.
                </p>

                {/* Statistics */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                        <p className="text-sm text-indigo-100">Total Bookings</p>
                        <h2 className="mt-2 text-3xl font-bold">
                            {booking?.length || 0}
                        </h2>
                    </div>

                    <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                        <p className="text-sm text-indigo-100">Confirmed</p>
                        <h2 className="mt-2 text-3xl font-bold">
                            {booking?.filter(item => item.bookingStatus === "confirmed").length || 0}
                        </h2>
                    </div>

                    <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                        <p className="text-sm text-indigo-100">Pending</p>
                        <h2 className="mt-2 text-3xl font-bold">
                            {booking?.filter(item => item.bookingStatus === "pending").length || 0}
                        </h2>
                    </div>

                    <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                        <p className="text-sm text-indigo-100">Cancelled</p>
                        <h2 className="mt-2 text-3xl font-bold">
                            {booking?.filter(item => item.bookingStatus === "cancelled").length || 0}
                        </h2>
                    </div>
                </div>
            </div>

            {/* Booking Cards */}
            {loading ? (
                <div className="py-20 text-center">
                    <h2 className="text-xl font-semibold">Loading your bookings...</h2>
                </div>
            ) : (
                <BookingTutor booking={booking} />
            )}
        </div>
    );
};

export default MyTutorPage;