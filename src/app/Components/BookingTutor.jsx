import React from "react";

const BookingTutor = ({ booking }) => {
  const status = booking?.bookStatus || "pending";

  const statusStyle = {
    pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
    confirmed: "bg-green-100 text-green-700 border-green-200",
    cancelled: "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-indigo-200/50 blur-3xl transition group-hover:bg-purple-200/70" />
      <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative">
        {/* Top */}
        <div className="flex flex-col justify-between gap-4 border-b border-dashed border-slate-200 pb-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-500">
              Session Token
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-900">
              {booking?.sessionToken || "MQ-2026-874521"}
            </h2>
          </div>

          <span
            className={`inline-flex w-fit rounded-full border px-4 py-2 text-xs font-black capitalize ${
              statusStyle[status] || statusStyle.pending
            }`}
          >
            {status}
          </span>
        </div>

        {/* Tutor Info */}
        <div className="mt-6 rounded-[1.5rem] bg-gradient-to-r from-indigo-50 to-purple-50 p-5">
          <div className="flex items-start gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-2xl shadow-md">
              👨‍🏫
            </div>

            <div>
              <p className="text-sm font-black text-indigo-600">
                Tutor Information
              </p>

              <h3 className="mt-1 text-xl font-black text-slate-900">
                {booking?.tutorName || "Mr. Rahim Ahmed"}
              </h3>

              <p className="mt-1 text-sm font-semibold text-slate-500">
                {booking?.tutorSubject || "Mathematics"} Tutor
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {booking?.tutorEmail || "tutor@gmail.com"}
              </p>
            </div>
          </div>
        </div>

        {/* Student Info */}
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs font-black uppercase text-slate-500">
              Student Name
            </p>
            <h4 className="mt-2 font-black text-slate-900">
              {booking?.studentName || "RD Plus"}
            </h4>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs font-black uppercase text-slate-500">
              Student Email
            </p>
            <h4 className="mt-2 break-all font-black text-slate-900">
              {booking?.studentEmail || "student@gmail.com"}
            </h4>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs font-black uppercase text-slate-500">
              Phone
            </p>
            <h4 className="mt-2 font-black text-slate-900">
              {booking?.studentPhone || "01850020101"}
            </h4>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs font-black uppercase text-slate-500">
              Hourly Fee
            </p>
            <h4 className="mt-2 text-xl font-black text-indigo-600">
              ৳{booking?.hourlyFee || 500}
            </h4>
          </div>
        </div>

        {/* Schedule */}
        <div className="mt-5 rounded-[1.5rem] border border-indigo-100 bg-white p-5 shadow-sm">
          <p className="mb-4 text-sm font-black text-slate-900">
            Session Schedule
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold text-slate-400">Date</p>
              <p className="mt-1 text-sm font-black text-slate-800">
                {booking?.sessionDate || "2026-07-01"}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-400">Days</p>
              <p className="mt-1 text-sm font-black text-slate-800">
                {booking?.availableDays || "Sun - Thu"}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-400">Time</p>
              <p className="mt-1 text-sm font-black text-slate-800">
                {booking?.availableTime || "5:00 PM - 8:00 PM"}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold text-slate-400">Tutor ID</p>
            <p className="mt-1 text-sm font-black text-slate-700">
              {booking?.tutorId || "TUTOR-DEMO-ID"}
            </p>
          </div>

          <button
            type="button"
            className="rounded-full bg-red-50 px-6 py-3 text-sm font-black text-red-600 transition hover:bg-red-500 hover:text-white"
          >
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingTutor;