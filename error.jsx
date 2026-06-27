"use client";

import Link from "next/link";

const ErrorPage = ({ reset }) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-indigo-50 to-purple-50 px-4 py-12">
      {/* Background Glow */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-red-300/30 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-300/30 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/20 blur-[150px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Error Icon */}
        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white bg-white/80 text-5xl shadow-2xl backdrop-blur-xl">
          ⚠️
        </div>

        <div className="inline-flex rounded-full border border-red-100 bg-white/80 px-5 py-2 text-sm font-bold text-red-600 shadow-sm backdrop-blur">
          Something Went Wrong
        </div>

        <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
          We Hit A Small Learning Error
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
          Something unexpected happened while loading this page. You can try
          again or go back to the home page.
        </p>

        {/* Error Message Design */}
        <div className="mx-auto mt-8 max-w-2xl rounded-[2rem] border border-red-100 bg-white/90 p-5 text-left shadow-xl backdrop-blur-xl">
          <p className="text-sm font-black text-red-600">Error Notice</p>
          <p className="mt-2 text-sm leading-7 text-slate-500">
            The application could not complete this request. This is a custom
            error page design for a better user experience.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => reset()}
            className="rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-8 py-3 text-sm font-black text-white shadow-lg shadow-red-500/30 transition hover:-translate-y-1"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-black text-slate-700 shadow-lg transition hover:-translate-y-1 hover:bg-slate-100"
          >
            Back To Home
          </Link>

          <Link
            href="/tutors"
            className="rounded-full bg-slate-900 px-8 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-slate-800"
          >
            Browse Tutors
          </Link>
        </div>

        {/* Help Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-xl backdrop-blur-xl">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-red-100 text-2xl">
              🔄
            </div>
            <h3 className="font-black text-slate-900">Try Again</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Reload the page and try again.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-xl backdrop-blur-xl">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-indigo-100 text-2xl">
              🏠
            </div>
            <h3 className="font-black text-slate-900">Go Home</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Return to the main page safely.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-xl backdrop-blur-xl">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-purple-100 text-2xl">
              🎓
            </div>
            <h3 className="font-black text-slate-900">Find Tutors</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Continue exploring tutor services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;