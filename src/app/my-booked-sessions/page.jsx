"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Spinner from "../Components/Spinner";

const MyBookedSessionsPage = () => {
  const [booking, setBooking] = React.useState([]);
  const [loading, setLoading] = React.useState(true);


  useEffect(() => {
    fetch("http://localhost:5000/myBookings?email=student@gmail.com")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBooking(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Spinner />
    );
  }


  console.log(booking);



  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/40 to-white px-4 py-12">
      {/* Background Glow */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-indigo-300/30 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-300/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="inline-flex rounded-full border border-indigo-200 bg-white/80 px-5 py-2 text-sm font-bold text-indigo-600 shadow-sm">
              Private Dashboard
            </div>

            <h1 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
              My Booked Sessions
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              View all tutor sessions booked by the currently logged-in student.
            </p>
          </div>

          <Link
            href="/tutors"
            className="inline-flex rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-black text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
          >
            Browse More Tutors
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl backdrop-blur-xl">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-indigo-100 text-2xl">
              📚
            </div>
            <p className="mt-4 text-sm font-black text-indigo-600">
              Total Bookings
            </p>
            <h3 className="mt-1 text-3xl font-black text-slate-900">03</h3>
          </div>

          <div className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl backdrop-blur-xl">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-green-100 text-2xl">
              ✅
            </div>
            <p className="mt-4 text-sm font-black text-green-600">
              Confirmed
            </p>
            <h3 className="mt-1 text-3xl font-black text-slate-900">02</h3>
          </div>

          <div className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl backdrop-blur-xl">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-yellow-100 text-2xl">
              ⏳
            </div>
            <p className="mt-4 text-sm font-black text-yellow-600">
              Pending
            </p>
            <h3 className="mt-1 text-3xl font-black text-slate-900">01</h3>
          </div>
        </div>


        {

        }


        {/* Table Card */}
        <div className="overflow-hidden rounded-[2rem] border border-white bg-white/95 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Booked Session List
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Only current user&apos;s booked sessions will appear here.
              </p>
            </div>

            <div className="rounded-full bg-indigo-50 px-5 py-2 text-sm font-bold text-indigo-600">
              Student: student@gmail.com
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="bg-slate-50 text-sm text-slate-600">
                  <th className="px-6 py-5">#</th>
                  <th className="px-6 py-5">Tutor Name</th>
                  <th className="px-6 py-5">Student Name</th>
                  <th className="px-6 py-5">Email</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5 text-right">Action</th>
                </tr>
              </thead>

              <tbody>
                {booking.map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-b border-slate-100 transition hover:bg-indigo-50/40"
                  >
                    <td className="px-6 py-5 font-bold text-slate-500">
                      {index + 1}
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-100 text-lg">
                          👨‍🏫
                        </div>

                        <div>
                          <p className="font-black text-slate-900">
                            {item.tutorName}
                          </p>

                          <p className="text-xs font-semibold text-slate-500">
                            {item.subject}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 font-bold text-slate-700">
                      {item.studentName}
                    </td>

                    <td className="px-6 py-5 text-sm font-semibold text-slate-500">
                      {item.email}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-4 py-2 text-xs font-black ${item.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                          }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-right">
                      <button
                        className="rounded-full bg-red-50 px-5 py-2 text-sm font-black text-red-600 transition hover:bg-red-500 hover:text-white"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>



        {/* Empty State UI Design */}
        <div className="mt-10 rounded-[2rem] border border-dashed border-indigo-200 bg-white/80 p-10 text-center shadow-xl backdrop-blur-xl">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-indigo-100 text-4xl">
            📭
          </div>

          <h3 className="mt-6 text-2xl font-black text-slate-900">
            No booked sessions found
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
            You have not booked any tutor session yet. Explore tutors and book
            your first learning session today.
          </p>

          <Link
            href="/tutors"
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-7 py-3 text-sm font-black text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
          >
            Find Tutors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyBookedSessionsPage;