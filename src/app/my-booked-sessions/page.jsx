import React from "react";
import Link from "next/link";

const MyBookedSessionsPage = () => {
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
                {/* Row 1 */}
                <tr className="border-b border-slate-100 transition hover:bg-indigo-50/40">
                  <td className="px-6 py-5 font-bold text-slate-500">01</td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-100 text-lg">
                        👨‍🏫
                      </div>
                      <div>
                        <p className="font-black text-slate-900">
                          Mr. Rahim Ahmed
                        </p>
                        <p className="text-xs font-semibold text-slate-500">
                          Mathematics Tutor
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5 font-bold text-slate-700">
                    RD Plus
                  </td>

                  <td className="px-6 py-5 text-sm font-semibold text-slate-500">
                    student@gmail.com
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-black text-green-700">
                      Confirmed
                    </span>
                  </td>

                  <td className="px-6 py-5 text-right">
                    <button
                      type="button"
                      className="rounded-full bg-red-50 px-5 py-2 text-sm font-black text-red-600 transition hover:bg-red-500 hover:text-white"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="border-b border-slate-100 transition hover:bg-indigo-50/40">
                  <td className="px-6 py-5 font-bold text-slate-500">02</td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-purple-100 text-lg">
                        👩‍🏫
                      </div>
                      <div>
                        <p className="font-black text-slate-900">
                          Ms. Nusrat Jahan
                        </p>
                        <p className="text-xs font-semibold text-slate-500">
                          English Tutor
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5 font-bold text-slate-700">
                    RD Plus
                  </td>

                  <td className="px-6 py-5 text-sm font-semibold text-slate-500">
                    student@gmail.com
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-black text-yellow-700">
                      Pending
                    </span>
                  </td>

                  <td className="px-6 py-5 text-right">
                    <button
                      type="button"
                      className="rounded-full bg-red-50 px-5 py-2 text-sm font-black text-red-600 transition hover:bg-red-500 hover:text-white"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="transition hover:bg-indigo-50/40">
                  <td className="px-6 py-5 font-bold text-slate-500">03</td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-100 text-lg">
                        👨‍🏫
                      </div>
                      <div>
                        <p className="font-black text-slate-900">
                          Mr. Tanvir Hasan
                        </p>
                        <p className="text-xs font-semibold text-slate-500">
                          Physics Tutor
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5 font-bold text-slate-700">
                    RD Plus
                  </td>

                  <td className="px-6 py-5 text-sm font-semibold text-slate-500">
                    student@gmail.com
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-black text-green-700">
                      Confirmed
                    </span>
                  </td>

                  <td className="px-6 py-5 text-right">
                    <button
                      type="button"
                      className="rounded-full bg-red-50 px-5 py-2 text-sm font-black text-red-600 transition hover:bg-red-500 hover:text-white"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
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