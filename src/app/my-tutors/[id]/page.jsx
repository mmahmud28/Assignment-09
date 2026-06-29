"use client";

import BookingTutor from "@/app/Components/BookingTutor";
import Spinner from "@/app/Components/Spinner";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const MyTutorDetails = ({ params }) => {
    const { id } = useParams();

    const [booking, setBooking] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:5000/myBookings/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch booking details");
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
    }, [id]);

    if (loading) {
        return (

            <Spinner />

        );
    }

    return (
        <div className="p-10 justify-center bg-white/90 ">
            <BookingTutor booking={booking} />
        </div>
    );
};

export default MyTutorDetails;