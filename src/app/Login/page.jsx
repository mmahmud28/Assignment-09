"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { authClient, signIn, } from "../lib/auth-client";

const LoginPage = () => {

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const loginData = Object.fromEntries(formData.entries());

    localStorage.setItem("userEmail", loginData.email);


    console.log(loginData); // এখানে email/password আছে কিনা দেখুন

    const { data, error } = await signIn.email({
      email: loginData.email,
      password: loginData.password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
      return;
    }


    const { data: tokenData } = await authClient.token()

    toast.success("Login successful!");
  };

  const handelGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    })
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070A1A] px-4 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.35),transparent_35%)]" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}
        <div className="hidden lg:block">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-cyan-200 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            TutorHub Learning Portal
          </div>

          <h1 className="max-w-3xl text-6xl font-black leading-[1.05] tracking-tight">
            Learn smarter with your{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-300 bg-clip-text text-transparent">
              personal tutor network
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Access your sessions, manage tutors, track progress, and continue
            your learning journey from one powerful dashboard.
          </p>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
            {[
              ["500+", "Expert Tutors"],
              ["1k+", "Active Students"],
              ["24/7", "Live Support"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl"
              >
                <p className="text-4xl font-black text-white">{value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-300">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="mx-auto w-full max-w-md">
          <div className="relative rounded-[36px] border border-white/10 bg-white/[0.08] p-2 shadow-2xl backdrop-blur-2xl">
            <div className="absolute -inset-px rounded-[36px] bg-gradient-to-br from-cyan-400/30 via-indigo-500/20 to-pink-500/30 blur-xl" />

            <div className="relative rounded-[30px] border border-white/10 bg-slate-950/80 p-7 sm:p-8">
              <div className="text-center">
                <Link href="/" className="inline-flex">
                  <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-500 text-3xl font-black shadow-lg shadow-indigo-500/40">
                    T
                  </div>
                </Link>

                <h2 className="mt-6 text-4xl font-black">Welcome Back</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Sign in to continue to your TutorHub account.
                </p>
              </div>

              <form onSubmit={handleLogin} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:bg-white/15 focus:ring-4 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:bg-white/15 focus:ring-4 focus:ring-cyan-400/10"
                  />
                </div>

                <div className="flex items-center justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-sm font-bold text-cyan-300 hover:text-cyan-200"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Login
                </button>
              </form>

              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs font-bold uppercase text-slate-500">
                  Or continue with
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <button
                onClick={handelGoogleLogin}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/15"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-sm font-black text-slate-900">
                  G
                </span>
                Login with Google
              </button>

              <p className="mt-7 text-center text-sm font-medium text-slate-400">
                Don&apos;t have an account?{" "}
                <Link
                  href="/registration"
                  className="font-black text-cyan-300 hover:text-cyan-200"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;