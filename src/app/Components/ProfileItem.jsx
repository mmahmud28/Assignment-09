 "use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProfileItem = ({ user }) => {  

  if (!user) {
    return <div>User not found</div>;
  }

  console.log("page User", user);
   console.log(user.image);
  

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/50 to-white px-4 py-12">
      {/* Background Glow */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-indigo-300/30 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-300/30 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">

          <h1 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            My Profile
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            View your account information, login provider, role, and profile
            details.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl">
              {/* Cover */}
              <div className="relative z-0 h-36 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_35%)]" />
              </div>

              {/* Avatar */}
              <div className="relative z-10 -mt-16 flex justify-center">
                <div className="rounded-full bg-white p-2 shadow-xl">
                  <Image
                    src={user.image || "https://i.pravatar.cc/300?img=12"}
                    alt={user.name || "User"}
                    width={180}
                    height={180}
                    className="h-32 w-32 rounded-full border-4 border-indigo-500 bg-white object-cover"
                    unoptimized
                  />
                 
                  
                </div>
              </div>

              <div className="px-6 pb-8 pt-5 text-center">
                <h2 className="text-3xl font-black text-slate-900">
                  {user.name}
                </h2>

                <p className="mt-2 break-all text-sm font-semibold text-slate-500">
                  {user.email}
                </p>

                <div className="mt-5 flex justify-center gap-3">
                  <span className="rounded-full bg-indigo-100 px-4 py-2 text-xs font-black uppercase text-indigo-600">
                    {user.role}
                  </span>

                  <span className="rounded-full bg-purple-100 px-4 py-2 text-xs font-black uppercase text-purple-600">
                    {user.provider}
                  </span>
                </div>

                <Link
                  href="/my-booked-sessions"
                  className="mt-7 inline-flex w-full justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-black text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
                >
                  My Booked Sessions
                </Link>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            <div className="rounded-[2rem] border border-white bg-white/95 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div className="flex flex-col justify-between gap-5 border-b border-slate-100 pb-7 md:flex-row md:items-center">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Account Information
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Personal user data stored in the users collection.
                  </p>
                </div>

                <div className="rounded-full bg-green-100 px-5 py-2 text-sm font-black text-green-700">
                  Active Account
                </div>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                    User ID
                  </p>
                  <h4 className="mt-2 break-all text-sm font-black text-slate-900">
                    {user._id}
                  </h4>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-indigo-50 p-6">
                  <p className="text-xs font-black uppercase tracking-wide text-indigo-500">
                    Full Name
                  </p>
                  <h4 className="mt-2 text-lg font-black text-slate-900">
                    {user.name}
                  </h4>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-purple-50 p-6">
                  <p className="text-xs font-black uppercase tracking-wide text-purple-500">
                    Email Address
                  </p>
                  <h4 className="mt-2 break-all text-lg font-black text-slate-900">
                    {user.email}
                  </h4>
                </div>               

                

                <div className="rounded-3xl border border-slate-100 bg-green-50 p-6">
                  <p className="text-xs font-black uppercase tracking-wide text-green-500">
                    Account Status
                  </p>
                  <h4 className="mt-2 text-lg font-black text-slate-900">
                    Verified User
                  </h4>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-8 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-slate-900">
                  Activity Summary
                </h3>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="flex items-center gap-4 rounded-3xl bg-slate-50 p-5">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-indigo-100 text-2xl">
                      📅
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-500">
                        Joined Date
                      </p>
                      <p className="mt-1 font-black text-slate-900">
                        {user.createdAt}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-3xl bg-slate-50 p-5">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-purple-100 text-2xl">
                      🕒
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-500">
                        Last Login
                      </p>
                      <p className="mt-1 font-black text-slate-900">
                        {user.updatedAt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <Link
                  href="/tutors"
                  className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6 transition hover:-translate-y-1 hover:bg-indigo-100"
                >
                  <div className="text-3xl">🎓</div>
                  <h4 className="mt-4 font-black text-slate-900">
                    Browse Tutors
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Find expert tutors.
                  </p>
                </Link>

                <Link
                  href="/add-tutor"
                  className="rounded-3xl border border-purple-100 bg-purple-50 p-6 transition hover:-translate-y-1 hover:bg-purple-100"
                >
                  <div className="text-3xl">➕</div>
                  <h4 className="mt-4 font-black text-slate-900">
                    Add Tutor
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Create tutor profile.
                  </p>
                </Link>

                <Link
                  href="/my-tutors"
                  className="rounded-3xl border border-cyan-100 bg-cyan-50 p-6 transition hover:-translate-y-1 hover:bg-cyan-100"
                >
                  <div className="text-3xl">📚</div>
                  <h4 className="mt-4 font-black text-slate-900">
                    My Tutors
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Manage created tutors.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileItem;