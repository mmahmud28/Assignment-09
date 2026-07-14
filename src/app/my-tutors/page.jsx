"use client";
import React, { useEffect } from "react";
import BookingTuCard from "../Components/BookingTuCard";
import Spinner from "../Components/Spinner";

const MyTutorPage = () => {
    const [booking, setBooking] = React.useState(null);
    const [loading, setLoading] = React.useState(true);



    useEffect(() => {
        const email = localStorage.getItem("userEmail");

        if (!email) {
            setLoading(false);
            return;
        }

        fetch(`http://localhost:5000/myAddTutor?email=${email}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch tutors");
                }
                return res.json();
            })
            .then((data) => {
                setBooking(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    });

    return (
        <div className="bg-white/90 p-5 backdrop-blur">
            {/* Page Header */}
            <div className="mb-8 rounded-3xl bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 p-8 text-white shadow-xl">

                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-100">
                    Tutor Dashboard
                </p>

                <h1 className="mt-2 text-4xl font-extrabold">
                    My Created Tutors
                </h1>

                <p className="mt-4 max-w-3xl text-base leading-7 text-indigo-100">
                    Manage all tutor profiles you have created. View tutor information,
                    monitor teaching availability, update schedules, and organize your
                    tutoring services from one place.
                </p>

                {/* Statistics */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                        <p className="text-sm text-indigo-100">
                            Total Tutors
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            {booking?.length || 0}
                        </h2>
                    </div>

                    <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                        <p className="text-sm text-indigo-100">
                            Online Tutors
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            {booking?.filter(item => item.teachingMode === "Online").length}
                        </h2>
                    </div>

                    <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                        <p className="text-sm text-indigo-100">
                            Offline Tutors
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            {booking?.filter(item => item.teachingMode === "Offline").length}
                        </h2>
                    </div>

                    <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                        <p className="text-sm text-indigo-100">
                            Total Available Slots
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            {booking?.reduce((total, item) => total + (item.totalSlot || 0), 0)}
                        </h2>
                    </div>

                </div>

            </div>

            {/* Booking Cards */}
            {loading ? (
                <div className="py-2 text-center">
                    <Spinner />
                </div>
            ) : (
                <BookingTuCard booking={booking} />
            )}
        </div>
    );
};

export default MyTutorPage;