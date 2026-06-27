import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 px-4 py-12">
      {/* Background Decoration */}
      <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-indigo-300/30 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-300/30 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 lg:grid-cols-2">
        {/* Left Content */}
        <div className="hidden lg:block">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-sm font-bold text-indigo-600 shadow-sm backdrop-blur">
              Welcome back to TutorHub
            </div>

            <h1 className="text-5xl font-black leading-tight text-slate-900">
              Continue Your Learning Journey With Expert Tutors
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Log in to manage your booked sessions, find tutors, add tutor
              services, and continue learning with confidence.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur">
                <p className="text-3xl font-black text-indigo-600">500+</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  Tutors
                </p>
              </div>

              <div className="rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur">
                <p className="text-3xl font-black text-purple-600">1k+</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  Students
                </p>
              </div>

              <div className="rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur">
                <p className="text-3xl font-black text-cyan-600">24/7</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            {/* Logo */}
            <div className="mb-8 text-center">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-2xl font-black text-white shadow-lg shadow-indigo-500/30">
                  T
                </div>
              </Link>

              <h2 className="mt-5 text-3xl font-black text-slate-900">
                Login
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Enter your email and password to access your account.
              </p>
            </div>

            {/* Error Message Design */}
            <div className="mb-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
              Invalid email or password. Please try again.
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
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
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              {/* Forget Password */}
              <div className="flex items-center justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm font-bold text-indigo-600 hover:text-indigo-700"
                >
                  Forget Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="button"
                className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-black text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Login
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

            {/* Google Button */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-50 hover:shadow-md"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-lg shadow-sm">
                G
              </span>
              Login with Google
            </button>

            {/* Register Link */}
            <p className="mt-7 text-center text-sm font-medium text-slate-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-black text-indigo-600 hover:text-indigo-700"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;