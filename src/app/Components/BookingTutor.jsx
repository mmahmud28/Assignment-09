"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BookingTutor = ({ booking }) => {

  const item = booking;

  console.log("data", item);


  const bookingStatusStyle = {
    pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
    confirmed: "bg-green-100 text-green-700 border-green-200",
    cancelled: "bg-red-100 text-red-700 border-red-200",
  };

  const paymentStatusStyle = {
    unpaid: "bg-red-100 text-red-700 border-red-200",
    paid: "bg-green-100 text-green-700 border-green-200",
    processing: "bg-blue-100 text-blue-700 border-blue-200",
  };

  if (!booking || booking.length === 0) {
    return (
      <div className="py-10 text-center">
        <h2>No Booking Found</h2>
      </div>
    );
  }

  const bookingStatus = booking?.bookingStatus;
  const paymentStatus = booking?.paymentStatus;
  const isCancelled = booking?.cancel?.isCancelled;


  return (
    <div
      key={item._id}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >

      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-200/60 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-cyan-200/50 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 px-6 py-7 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_35%)]" />

          <div className="relative flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-200">
                Digital Session Token
              </p>

              <h2 className="mt-2 text-3xl font-black">
                {booking?.sessionToken || "MQ-2026-874521"}
              </h2>

              <p className="mt-2 text-sm font-medium text-slate-300">
                Booked on {booking?.bookingDate || "2026-06-29"} at{" "}
                {booking?.bookingTime || "10:35 AM"}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span
                className={`rounded-full border px-4 py-2 text-xs font-black capitalize ${bookingStatusStyle[bookingStatus] || bookingStatusStyle.pending
                  }`}
              >
                {bookingStatus}
              </span>

              <span
                className={`rounded-full border px-4 py-2 text-xs font-black capitalize ${paymentStatusStyle[paymentStatus] || paymentStatusStyle.unpaid
                  }`}
              >
                {paymentStatus}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Tutor + Student */}
          <div className="grid gap-5 lg:grid-cols-1">
            {/* Tutor */}
            <div className="rounded-[2rem] border border-indigo-100 bg-indigo-50/70 p-5">
              <div className="flex items-start gap-4">
                <Image
  src={booking?.photo}
  alt={booking?.tutorName}
  width={80}
  height={80}
  className="h-20 w-20 rounded-3xl border-4 border-white object-cover shadow-lg"
/>

                <div>
                  <p className="text-xs font-black uppercase text-indigo-500">
                    Tutor
                  </p>

                  <h3 className="mt-1 text-xl font-black text-slate-900">
  {booking?.tutorName}
</h3>

<p className="mt-1 text-sm font-bold text-indigo-600">
  {booking?.subject}
</p>

<p className="mt-2 break-all text-sm font-medium text-slate-500">
  {booking?.createdBy?.email}
</p>

                  <p className="mt-2 text-sm font-medium text-slate-300">
                    Created on {new Date(booking?.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-xs font-black text-slate-400">Fee</p>
                  <h4 className="mt-1 text-xl font-black text-indigo-600">
                    ৳{booking.hourlyFee || 500}
                  </h4>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <p className="text-xs font-black text-slate-400">Mode</p>
                  <h4 className="mt-1 font-black text-slate-900">
                    {booking?.teachingMode}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Session Details */}
          <div className="mt-6 rounded-[2rem] border border-slate-100 bg-slate-50 p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase text-cyan-500">
                  Session Details
                </p>
                <h3 className="mt-1 text-2xl font-black text-slate-900">
                  Learning Schedule
                </h3>
              </div>

              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-100 text-2xl">
                📅
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-black text-slate-400">Date</p>
                <h4 className="mt-1 font-black text-slate-900">
                  {booking?.sessionStartDate}
                </h4>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-black text-slate-400">Day</p>
                <h4 className="mt-1 font-black text-slate-900">
                  {booking?.availableDays}
                </h4>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-black text-slate-400">Time</p>
                <h4 className="mt-1 font-black text-slate-900">
                  {booking?.availableTime}
                </h4>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-black text-slate-400">Available Slots</p>
                <h4 className="mt-1 font-black text-slate-900">
                  {booking?.totalSlot}
                </h4>
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-black text-slate-400">
                  Teaching Type
                </p>
                <h4 className="mt-1 font-black text-slate-900">
                  {booking?.teachingMode}
                </h4>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-black text-slate-400">Location</p>
                <h4 className="mt-1 font-black text-slate-900">
                  {booking?.location}
                </h4>
              </div>
            </div>
          </div>

          {/* Payment / Review / Cancel */}
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-green-100 bg-green-50 p-5">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-green-100 text-2xl">
                💳
              </div>

              <p className="mt-4 text-xs font-black uppercase text-green-600">
                Payment
              </p>

              <h3 className="mt-1 text-2xl font-black text-slate-900">
                BDT {booking?.hourlyFee}
              </h3>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                Per Hour
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-400">
                Total Slot : {booking?.totalSlot}
              </p>
            </div>

            <div className="rounded-[2rem] border border-yellow-100 bg-yellow-50 p-5">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-100 text-2xl">
                ⭐
              </div>

              <p className="mt-4 text-xs font-black uppercase text-yellow-600">
                Review
              </p>

              <h3 className="mt-1 text-2xl font-black text-slate-900">
                {booking?.subject}
              </h3>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                Subject Category
              </p>
            </div>

            <div
              className={`rounded-[2rem] border p-5 ${isCancelled
                ? "border-red-100 bg-red-50"
                : "border-slate-100 bg-slate-50"
                }`}
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-2xl text-2xl ${isCancelled ? "bg-red-100" : "bg-slate-100"
                  }`}
              >
                {isCancelled ? "❌" : "🛡️"}
              </div>

              <p
                className={`mt-4 text-xs font-black uppercase ${isCancelled ? "text-red-600" : "text-slate-500"
                  }`}
              >
                Cancel Status
              </p>

              <h3 className="mt-1 text-2xl font-black text-slate-900">
                {isCancelled ? "Cancelled" : "Active"}
              </h3>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                Reason: {booking?.cancel?.cancelReason || "No reason added"}
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-6 rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
            <p className="text-xs font-black uppercase text-indigo-500">
              Tutor Experience
            </p>

            <p className="mt-3 leading-7 text-slate-600">
              {booking?.tutor?.institutionExperience ||
                "BSc in Mathematics, 5 years teaching experience"}
            </p>
          </div>

          {/* Footer Actions */}
          <div className="mt-6 flex flex-col justify-between gap-4 border-t border-dashed border-slate-200 pt-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold text-slate-400">Booking ID</p>
              <p className="mt-1 break-all text-sm font-black text-slate-700">
                {booking?._id || "booking001"}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/tutors/${booking?._id || "demo-id"}`}
                className="rounded-full border border-indigo-200 bg-indigo-50 px-6 py-3 text-center text-sm font-black text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
              >
                View Tutor
              </Link>

              <button
                type="button"
                className="rounded-full bg-red-50 px-6 py-3 text-sm font-black text-red-600 transition hover:bg-red-100 hover:text-white"
              >
                Cancel Session
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

};

export default BookingTutor;