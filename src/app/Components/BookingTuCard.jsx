"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const bookingStatusStyle = {
  pending:
    "border-yellow-300 bg-yellow-50 text-yellow-700",
  confirmed:
    "border-green-300 bg-green-50 text-green-700",
  completed:
    "border-blue-300 bg-blue-50 text-blue-700",
  cancelled:
    "border-red-300 bg-red-50 text-red-700",
};

const BookingTuCard = ({ booking }) => {
  if (!booking || booking.length === 0) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-700">
          No Booking Found
        </h2>
      </div>
    );
  }

  return (
   <div className="space-y-5">
  {booking.map((item) => (
    <div
      key={item._id}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-2xl"
    >
      <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center">

        {/* Tutor Photo */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src={item.photo}
            alt={item.tutorName}
            width={110}
            height={110}
            unoptimized
            className="h-28 w-28 rounded-3xl border-4 border-indigo-100 object-cover shadow-lg"
          />
        </div>

        {/* Tutor Information */}
        <div className="flex-1">

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                {item.tutorName}
              </h2>

              <p className="mt-1 text-sm font-semibold text-indigo-600">
                {item.subject} Tutor
              </p>
            </div>

            <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
              {item.teachingMode}
            </div>

          </div>

          {/* Information */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Hourly Fee
              </p>

              <h3 className="mt-1 text-lg font-bold text-slate-900">
                ৳ {item.hourlyFee}
              </h3>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Available
              </p>

              <h3 className="mt-1 font-semibold text-slate-800">
                {item.availableDays}
              </h3>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Time
              </p>

              <h3 className="mt-1 font-semibold text-slate-800">
                {item.availableTime}
              </h3>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Location
              </p>

              <h3 className="mt-1 font-semibold text-slate-800">
                📍 {item.location}
              </h3>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-6 flex flex-col gap-4 border-t border-dashed border-slate-200 pt-5 md:flex-row md:items-center md:justify-between">

            <div className="flex flex-wrap gap-3">

              <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
                🎓 {item.subject}
              </span>

              <span className="rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
                🪑 {item.totalSlot} Slots
              </span>

              <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
                📅 {item.sessionStartDate}
              </span>

            </div>

            <Link
              href={`/my-tutors/${item._id}`}
              className="rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-7 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View Tutor Details →
            </Link>

          </div>

        </div>

      </div>
    </div>
  ))}
</div>
  );
};

export default BookingTuCard;