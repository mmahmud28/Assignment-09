import React from "react";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 px-4 py-12">
      {/* Background Decoration */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-purple-300/30 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-300/30 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/20 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 lg:grid-cols-2">
        {/* Left Content */}
        <div className="hidden lg:block">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex rounded-full border border-purple-200 bg-white/70 px-4 py-2 text-sm font-bold text-purple-600 shadow-sm backdrop-blur">
              Join TutorHub Today
            </div>

            <h1 className="text-5xl font-black leading-tight text-slate-900">
              Create Your Account And Start Learning Smarter
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Register to find expert tutors, book learning sessions, manage
              your classes, and grow your skills with guided support.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-100 text-2xl">
                  🎓
                </div>
                <div>
                  <h3 className="font-black text-slate-900">
                    Verified Tutors
                  </h3>
                  <p className="text-sm text-slate-500">
                    Learn from trusted and skilled tutors.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-100 text-2xl">
                  📅
                </div>
                <div>
                  <h3 className="font-black text-slate-900">
                    Easy Session Booking
                  </h3>
                  <p className="text-sm text-slate-500">
                    Book your learning sessions quickly.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-100 text-2xl">
                  🚀
                </div>
                <div>
                  <h3 className="font-black text-slate-900">
                    Better Learning Journey
                  </h3>
                  <p className="text-sm text-slate-500">
                    Improve your skills step by step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Register Card */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            {/* Header */}
            <div className="mb-8 text-center">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-2xl font-black text-white shadow-lg shadow-purple-500/30">
                  T
                </div>
              </Link>

              <h2 className="mt-5 text-3xl font-black text-slate-900">
                Registration
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Create your account to start your learning journey.
              </p>
            </div>

            {/* Error Message Design */}
            <div className="mb-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
              Registration failed. Please check your information and try again.
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Photo URL
                </label>

                <input
                  type="url"
                  placeholder="Enter your photo URL"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                />

                {/* Password Validation Design */}
                <div className="mt-3 rounded-2xl bg-slate-50 p-4">
                  <p className="mb-2 text-xs font-black uppercase text-slate-500">
                    Password must contain:
                  </p>

                  <ul className="space-y-2 text-sm font-semibold">
                    <li className="flex items-center gap-2 text-red-500">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-red-100 text-xs">
                        ✕
                      </span>
                      At least one uppercase letter
                    </li>

                    <li className="flex items-center gap-2 text-red-500">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-red-100 text-xs">
                        ✕
                      </span>
                      At least one lowercase letter
                    </li>

                    <li className="flex items-center gap-2 text-red-500">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-red-100 text-xs">
                        ✕
                      </span>
                      Minimum 6 characters
                    </li>
                  </ul>
                </div>
              </div>

              {/* Register Button */}
              <button
                type="button"
                className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-black text-white shadow-lg shadow-purple-500/30 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Register
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-bold uppercase text-slate-400">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Google Login Button */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-50 hover:shadow-md"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-lg shadow-sm">
                G
              </span>
              Register with Google
            </button>

            {/* Login Link */}
            <p className="mt-7 text-center text-sm font-medium text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-black text-purple-600 hover:text-purple-700"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;