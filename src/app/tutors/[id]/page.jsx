import BookingModal from "@/app/Components/BookingModal";
import Spinner from "@/app/Components/Spinner";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

  let token;
  let session;
  let user;
  let tutor;

  try {
    // Get Token
    const tokenResult = await auth.api.getToken({
      headers: await headers(),
    });

    token = tokenResult?.token;

    if (!token) {
      redirect("/login");
    }

    // Get Session
    session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      redirect("/login");
    }

    const email = session.user.email;

    // User Information
    const proRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users?email=${email}`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (proRes.status === 401) {
      redirect("/login");
    }

    if (!proRes.ok) {
      throw new Error("Failed to fetch user");
    }

    user = await proRes.json();

    // Tutor Information
    const tutorRes = await fetch(
      `${process.env.SERVER_URL}/tutors/${id}`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (tutorRes.status === 401) {
      redirect("/login");
    }

    if (!tutorRes.ok) {
      throw new Error("Failed to fetch tutor");
    }

    tutor = await tutorRes.json();

  } catch (error) {
    console.error("Tutor Details Error:", error);

    // যদি Unauthorized হয় তাহলে Login এ পাঠাবে
    redirect("/login");
  }

  const bookingData = {
    sessionToken: `BK-${Date.now()}`,
    bookingStatus: "confirmed",
    bookingDate: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    bookingTime: new Date().toLocaleTimeString(),

    student: {
      name: user.name,
      email: user.email,
    },

    tutor: {
      _id: tutor._id,
      name: tutor.tutorName,
      photo: tutor.photo,
      subject: tutor.subject,
      hourlyFee: tutor.hourlyFee,
    },

    session: {
      date: tutor.sessionStartDate,
      time: tutor.availableTime,
    },
  };



  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/40 to-white px-4 py-12">
      {/* Background Decoration */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-indigo-300/30 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-300/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex rounded-full border border-indigo-200 bg-white/80 px-5 py-2 text-sm font-bold text-indigo-600 shadow-sm">
            Private Tutor Details
          </div>

          <h1 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Tutor Details
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            View tutor information, available slots, session schedule and book a
            learning session.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Tutor Profile Card */}
          <div className="lg:col-span-1">
            <div className="rounded-[2rem] border border-white bg-white p-6 shadow-2xl">

              <div className="relative h-80 w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src={tutor.photo}
                  alt={tutor.tutorName}
                  width={500}
                  height={500}
                  unoptimized
                />

                <div className="absolute left-4 top-4 z-10 rounded-full bg-green-500 px-4 py-2 text-xs font-black text-white shadow-lg">
                  Available
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-3xl font-black text-slate-900">
                  {tutor.tutorName}
                </h2>

                <p className="mt-2 text-sm font-bold text-indigo-600">
                  {tutor.subject}
                </p>

                <p className="mt-4 leading-7 text-slate-500">
                  {tutor.institutionExperience}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-indigo-50 p-4">
                  <p className="text-sm font-bold text-slate-500">
                    Hourly Fee
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-indigo-600">
                    ৳{tutor.hourlyFee}
                  </h3>
                </div>

                <div className="rounded-2xl bg-purple-50 p-4">
                  <p className="text-sm font-bold text-slate-500">
                    Total Slot
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-purple-600">
                    {tutor.totalSlot}
                  </h3>
                </div>
              </div>

              <label
                htmlFor="book-session-modal"
                className="btn mt-7 w-full rounded-2xl border-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30 hover:from-indigo-600 hover:to-purple-600"
              >
                Book Session
              </label>
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Important Status */}
              <div className="rounded-[2rem] border border-white bg-white p-6 shadow-xl">
                <h3 className="text-2xl font-black text-slate-900">
                  Booking Status & Slot Availability
                </h3>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                    <p className="text-sm font-black text-green-600">
                      Book Status
                    </p>
                    <h4 className="mt-2 text-xl font-black text-slate-900">
                      Open
                    </h4>
                    <p className="mt-2 text-sm text-slate-500">
                      Students can request booking.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
                    <p className="text-sm font-black text-indigo-600">
                      Available Slot
                    </p>
                    <h4 className="mt-2 text-xl font-black text-slate-900">
                      {tutor.totalSlot}
                    </h4>
                    <p className="mt-2 text-sm text-slate-500">
                      Slot will decrease after booking.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
                    <p className="text-sm font-black text-purple-600">
                      Session Start
                    </p>
                    <h4 className="mt-2 text-xl font-black text-slate-900">
                      2026-07-01
                    </h4>
                    <p className="mt-2 text-sm text-slate-500">
                      Booking allowed from this date.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tutor Information */}
              <div className="rounded-[2rem] border border-white bg-white p-6 shadow-xl">
                <h3 className="text-2xl font-black text-slate-900">
                  Tutor Information
                </h3>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm font-bold text-slate-500">
                      Tutor ID
                    </p>
                    <h4 className="mt-1 font-black text-slate-900">
                      {tutor._id}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm font-bold text-slate-500">
                      Subject / Category
                    </p>
                    <h4 className="mt-1 font-black text-slate-900">
                      {tutor.subject}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm font-bold text-slate-500">
                      Available Days
                    </p>
                    <h4 className="mt-1 font-black text-slate-900">
                      {tutor.availableDays}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm font-bold text-slate-500">
                      Time Slot
                    </p>
                    <h4 className="mt-1 font-black text-slate-900">
                      {tutor.availableTime}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm font-bold text-slate-500">
                      Teaching Mode
                    </p>
                    <h4 className="mt-1 font-black text-slate-900">
                      {tutor.teachingMode}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm font-bold text-slate-500">
                      Location
                    </p>
                    <h4 className="mt-1 font-black text-slate-900">
                      {tutor.location}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="rounded-[2rem] border border-white bg-white p-6 shadow-xl">
                <h3 className="text-2xl font-black text-slate-900">
                  Institution & Experience
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {tutor.institutionExperience}
                </p>
              </div>

              {/* System Message Designs */}
              <div className="rounded-[2rem] border border-white bg-white p-6 shadow-xl">
                <h3 className="text-2xl font-black text-slate-900">
                  System Message UI
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm font-bold text-red-600">
                    No available slots left.
                  </div>

                  <div className="rounded-2xl border border-yellow-100 bg-yellow-50 px-5 py-4 text-sm font-bold text-yellow-700">
                    Booking is not available yet for this tutor.
                  </div>

                  <div className="rounded-2xl border border-rose-100 bg-rose-50 px-5 py-4 text-sm font-bold text-rose-600">
                    This session is fully booked. You can’t join at the moment.
                  </div>

                  <div className="rounded-2xl border border-green-100 bg-green-50 px-5 py-4 text-sm font-bold text-green-700">
                    Booking completed successfully. Total slot decreased by 1.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DaisyUI Modal Design */}
        <input
          type="checkbox"
          id="book-session-modal"
          className="modal-toggle"
        />

        <div className="modal" role="dialog">
          <div className="modal-box max-w-3xl rounded-[2rem] bg-white p-0">
            {/* Modal Header */}
            <div className="rounded-t-[2rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-7 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-white/80">
                    Book Learning Session
                  </p>
                  <h3 className="mt-2 text-3xl font-black">
                    Confirm Your Tutor Booking
                  </h3>
                </div>

                <label
                  htmlFor="book-session-modal"
                  className="btn btn-circle btn-sm border-0 bg-white/20 text-white hover:bg-white hover:text-slate-900"
                >
                  ✕
                </label>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-7">
              <div className="mb-6 rounded-2xl border border-indigo-100 bg-indigo-50 px-5 py-4 text-sm font-bold text-indigo-700">
                Tutor ID, tutor name, student email and book status will be
                auto-filled by the system.
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  {/* Student Name */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Student Name
                    </label>
                    <h4 className="rounded-2xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-bold text-slate-500 outline-none">
                      {user?.name}
                    </h4>
                  </div>

                  {/* Tutor ID */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Tutor ID
                    </label>
                    <h4 className="rounded-2xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-bold text-slate-500 outline-none">
                      {tutor._id}
                    </h4>
                  </div>

                  {/* Tutor Name */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Tutor Name
                    </label>
                    <h4 className="rounded-2xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-bold text-slate-500 outline-none">
                      {tutor.tutorName}
                    </h4>
                  </div>

                  {/* Student Email */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Student Email
                    </label>
                    <h4 className="rounded-2xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-bold text-slate-500 outline-none">
                      {user?.email}
                    </h4>
                  </div>

                </div>

                {/* Slot Info */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-indigo-50 p-4">
                    <p className="text-sm font-black text-indigo-600">
                      Current Slots
                    </p>
                    <h4 className="mt-1 text-xl font-black text-slate-900">
                      {tutor.totalSlot}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-purple-50 p-4">
                    <p className="text-sm font-black text-purple-600">
                      Session Date
                    </p>
                    <h4 className="mt-1 text-xl font-black text-slate-900">
                      {tutor.sessionStartDate}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-green-50 p-4">
                    <p className="text-sm font-black text-green-600">
                      Booking Status
                    </p>
                    <h4 className="mt-1 text-xl font-black text-slate-900">
                      Available
                    </h4>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-4 pt-3 sm:flex-row">

                  <BookingModal
                    token={token}
                    bookingData={bookingData}
                  />

                  <label
                    htmlFor="book-session-modal"
                    className="w-full cursor-pointer rounded-2xl border border-slate-200 bg-white px-8 py-3 text-center text-sm font-black text-slate-600 transition hover:bg-slate-100 sm:w-auto"
                  >
                    Cancel
                  </label>
                </div>
              </form>
            </div>
          </div>

          <label className="modal-backdrop" htmlFor="book-session-modal">
            Close
          </label>
        </div>
      </div>


    </section>

  );
};

export default TutorDetailsPage;