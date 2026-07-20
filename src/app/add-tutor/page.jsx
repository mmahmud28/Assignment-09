"use client";
import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";


const AddTutorPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = localStorage.getItem("userEmail");

    const tutorData = {
      tutorName: form.tutorName.value,
      photo: form.photo.value,
      subject: form.subject.value,
      availableDays: form.availableDays.value,
      availableTime: form.availableTime.value,
      hourlyFee: Number(form.hourlyFee.value),
      totalSlot: Number(form.totalSlot.value),
      sessionStartDate: form.sessionStartDate.value,
      institutionExperience: form.institutionExperience.value,
      location: form.location.value,
      teachingMode: form.teachingMode.value,
      createdAt: new Date().toISOString(),
      createdBy: {       
        email: email,
      }
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/add-tutors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tutorData),
      });

      if (!res.ok) {
        throw new Error("Failed to add tutor");
      }

      const result = await res.json();

      if (result.insertedId) {
        toast.success("Tutor Added Successfully");
        form.reset();
      } else {
        toast.error("Failed to Add Tutor");
      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-indigo-50/40 to-white px-4 py-12">
      {/* Background Decoration */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-indigo-300/30 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-300/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex rounded-full border border-indigo-200 bg-white/80 px-5 py-2 text-sm font-bold text-indigo-600 shadow-sm">
            Private Tutor Creation
          </div>

          <h1 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Add Your Tutor Profile
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Fill in the tutor information below so students can find and book
            learning sessions easily.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left Info Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-[2rem] border border-white bg-white/90 p-7 shadow-2xl backdrop-blur-xl">
              <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 text-3xl text-white shadow-lg shadow-indigo-500/30">
                👨‍🏫
              </div>

              <h2 className="mt-6 text-2xl font-black text-slate-900">
                Tutor Information
              </h2>

              <p className="mt-3 leading-7 text-slate-500">
                Add accurate details about your subject, schedule, fee,
                institution, and teaching mode.
              </p>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl bg-indigo-50 p-4">
                  <p className="text-sm font-black text-indigo-600">
                    Step 01
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Fill tutor basic information
                  </p>
                </div>

                <div className="rounded-2xl bg-purple-50 p-4">
                  <p className="text-sm font-black text-purple-600">
                    Step 02
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Add schedule and session fee
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-50 p-4">
                  <p className="text-sm font-black text-cyan-600">
                    Step 03
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Submit tutor profile
                  </p>
                </div>
              </div>

              <Link
                href="/tutors"
                className="mt-7 inline-flex w-full justify-center rounded-2xl border border-indigo-200 bg-indigo-50 px-5 py-3 text-sm font-black text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
              >
                View Tutors Page
              </Link>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-2">
            <div className="rounded-[2rem] border border-white bg-white/95 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              {/* Success Message Design */}
              <div className="mb-7 rounded-2xl border border-green-100 bg-green-50 px-5 py-4 text-sm font-bold text-green-700">
                Tutor profile submitted successfully! This is only success
                message design.
              </div>

              <form onSubmit={handleSubmit} className="space-y-7 text-black">
                {/* Basic Info */}
                <div>
                  <h3 className="mb-5 text-xl font-black text-slate-900">
                    Basic Information
                  </h3>

                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Tutor Name */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Tutor Name
                      </label>
                      <input
                        type="text"
                        name="tutorName"
                        placeholder="Enter tutor name"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                      />
                    </div>

                    {/* Photo URL */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Photo URL
                      </label>
                      <input
                        type="url"
                        name="photo"
                        placeholder="imgbb/postimage photo link"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                      />
                    </div>

                    {/* Subject Category */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Subject / Category

                      </label>
                      <select name="subject" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100">
                        <option>Select subject</option>
                        <option>Mathematics</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                        <option>English</option>
                        <option>ICT</option>
                        <option>Accounting</option>
                      </select>
                    </div>

                    {/* Teaching Mode */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Teaching Mode
                      </label>
                      <select name="teachingMode" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100">
                        <option>Select teaching mode</option>
                        <option>Online</option>
                        <option>Offline</option>
                        <option>Both</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Schedule Info */}
                <div>
                  <h3 className="mb-5 text-xl font-black text-slate-900">
                    Schedule & Session Details
                  </h3>

                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Available Days */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Available Days
                      </label>
                      <input
                        name="availableDays"
                        type="text"
                        placeholder="Example: Sun - Thu"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                      />
                    </div>

                    {/* Available Time Slot */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Available Time Slot
                      </label>
                      <input
                        type="text"
                        name="availableTime"
                        placeholder="Example: 5:00 PM - 8:00 PM"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                      />
                    </div>

                    {/* Hourly Fee */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Hourly Fee
                      </label>
                      <input
                        type="number"
                        name="hourlyFee"
                        placeholder="Example: 500"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                      />
                    </div>

                    {/* Total Slot */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Total Slot
                      </label>
                      <input
                        type="number"
                        name="totalSlot"
                        placeholder="Example: 10"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                      />
                    </div>

                    {/* Session Start Date */}
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Session Start Date
                      </label>
                      <input
                        type="date"
                        name="sessionStartDate"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Experience Info */}
                <div>
                  <h3 className="mb-5 text-xl font-black text-slate-900">
                    Experience & Location
                  </h3>

                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Institution & Experience */}
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Institution & Experience
                      </label>
                      <textarea
                        rows="4"
                        name="institutionExperience"
                        placeholder="Example: BSc in Mathematics, 3 years teaching experience..."
                        className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                      ></textarea>
                    </div>

                    {/* Location */}
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Location Area / City
                      </label>
                      <input
                        type="text"
                        name="location"
                        placeholder="Example: Dhanmondi, Dhaka"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-4 text-sm font-black text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
                  >
                    Submit Tutor
                  </button>

                  <button
                    type="button"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-black text-slate-600 transition hover:bg-slate-100 sm:w-auto"
                  >
                    Clear Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTutorPage;