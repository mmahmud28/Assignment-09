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
    <div className="grid gap-6 lg:grid-cols-2">
      {booking.map((item) => {
        const status = item.bookingStatus || "pending";

        return (
          <div
            key={item._id}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-900 to-cyan-700 p-6 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.18),transparent_45%)]" />

              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100">
                    Booking Token
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold tracking-wide text-white">
                    {item.sessionToken}
                  </h2>

                  <p className="mt-2 text-sm font-medium text-slate-100">
                    {item.bookingDate} • {item.bookingTime}
                  </p>
                </div>

                <span
                  className={`rounded-full px-4 py-2 text-xs font-bold capitalize shadow-md ${bookingStatusStyle[status]
                    }`}
                >
                  {status}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-5 p-5">

              {/* Tutor */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">

                <Image
                  src={
                    item?.tutor?.photo ||
                    "https://randomuser.me/api/portraits/men/1.jpg"
                  }
                  alt={item?.tutor?.name || "Tutor"}
                  width={65}
                  height={65}
                  className="h-16 w-16 rounded-2xl border-2 border-white object-cover shadow"
                />

                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    Tutor
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    {item?.tutor?.name}
                  </h3>

                  <p className="text-sm font-medium text-slate-600">
                    {item?.tutor?.subject}
                  </p>
                </div>

                <div className="rounded-xl bg-white px-4 py-3 text-right shadow-sm">
                  <p className="text-xs font-semibold text-slate-500">
                    Fee
                  </p>

                  <h4 className="mt-1 text-lg font-bold text-indigo-700">
                    ৳{item?.tutor?.hourlyFee}
                  </h4>
                </div>

              </div>

              {/* Session */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

                <h3 className="mb-4 text-base font-bold text-slate-900">
                  Session Schedule
                </h3>

                <div className="grid grid-cols-2 gap-3">

                  <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                    <p className="text-xs font-semibold text-slate-500">
                      Date
                    </p>

                    <h4 className="mt-1 text-sm font-bold text-slate-900">
                      {item?.session?.date}
                    </h4>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                    <p className="text-xs font-semibold text-slate-500">
                      Time
                    </p>

                    <h4 className="mt-1 text-sm font-bold text-slate-900">
                      {item?.session?.time}
                    </h4>
                  </div>

                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-slate-200 pt-4">

                <div className="max-w-[60%]">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Booking ID
                  </p>

                  <p className="mt-1 truncate text-sm font-bold text-slate-900">
                    {item._id}
                  </p>
                </div>

                <Link
                  href={`/tutors/${item?.tutor?.tutorMongoId}`}
                  className="rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-indigo-700 hover:to-cyan-700 hover:shadow-lg"
                >
                  View Tutor →
                </Link>

              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookingTuCard;