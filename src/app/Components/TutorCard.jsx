import Image from "next/image";
import React from "react";
import { FaBookOpen, FaClock, FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt, FaLaptopHouse } from "react-icons/fa";

const TutorCard = ({ tutor }) => {
    const {
        tutorName,
        photo,
        subject,
        availableDays,
        availableTime,
        hourlyFee,
        totalSlot,
        institutionExperience,
        location,
        teachingMode,
    } = tutor;

    return (
        <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            {/* Top */}
            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 h-28">
                <Image
                    src={photo}
                    alt={tutorName}
                    width={112}
                    height={112}
                    className="absolute left-1/2 top-full h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white object-cover shadow-xl"
                />
            </div>

            {/* Body */}
            <div className="pt-16 p-6">

                <div className="text-center">

                    <span className="rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
                        {subject}
                    </span>

                    <h2 className="mt-4 text-2xl font-bold text-slate-800">
                        {tutorName}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        {institutionExperience}
                    </p>

                </div>

                <div className="my-6 border-t"></div>

                <div className="space-y-3">

                    <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-500">
                            <FaMapMarkerAlt className="text-red-500" />
                            Location
                        </span>

                        <span className="font-semibold text-black">
                            {location}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-500">
                            <FaCalendarAlt className="text-blue-500" />
                            Days
                        </span>

                        <span className="font-semibold text-black">
                            {availableDays}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-500">
                            <FaClock className="text-green-500" />
                            Time
                        </span>

                        <span className="font-semibold text-black">
                            {availableTime}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-500">
                            <FaLaptopHouse className="text-purple-500" />
                            Mode
                        </span>

                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                            {teachingMode}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-500">
                            <FaBookOpen className="text-orange-500" />
                            Slots
                        </span>

                        <span className="font-bold">
                            {totalSlot}
                        </span>
                    </div>

                </div>

                <div className="mt-7 flex items-center justify-between rounded-2xl bg-slate-100 p-4">

                    <div>
                        <p className="text-sm text-slate-500">
                            Hourly Fee
                        </p>

                        <h2 className="flex items-center gap-2 text-2xl font-bold text-indigo-700">
                            <FaMoneyBillWave />
                            ৳{hourlyFee}
                        </h2>
                    </div>

                    <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 font-semibold text-white transition hover:scale-105">
                        View Details
                    </button>

                </div>

            </div>

        </div>
    );
};

export default TutorCard;