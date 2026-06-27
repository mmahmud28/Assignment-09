import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />
      <div className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Website Info */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-xl font-black shadow-lg shadow-indigo-500/30">
                T
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight">
                  TutorHub
                </h2>
                <p className="text-sm text-slate-400">
                  Learn better, grow faster
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Find trusted tutors, book learning sessions, and improve your
              skills with smart online and offline tutor services.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-xs font-bold text-indigo-300">
              Smart Learning Platform
            </div>
          </div>

          {/* Tutor Services Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Learning Services</h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/tutors"
                  className="transition hover:text-indigo-300"
                >
                  Find Tutors
                </Link>
              </li>

              <li>
                <Link
                  href="/online-tutoring"
                  className="transition hover:text-indigo-300"
                >
                  Online Tutoring
                </Link>
              </li>

              <li>
                <Link
                  href="/home-tutoring"
                  className="transition hover:text-indigo-300"
                >
                  Home Tutoring
                </Link>
              </li>

              <li>
                <Link
                  href="/exam-preparation"
                  className="transition hover:text-indigo-300"
                >
                  Exam Preparation
                </Link>
              </li>

              <li>
                <Link
                  href="/language-learning"
                  className="transition hover:text-indigo-300"
                >
                  Language Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Contact Information</h3>

            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10">
                  📍
                </span>
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10">
                  ☎️
                </span>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+880 1850-020101</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10">
                  ✉️
                </span>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>support@tutorhub.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Follow Us</h3>

            <p className="text-sm leading-7 text-slate-400">
              Connect with us for tutor updates, learning tips, and new session
              announcements.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#"
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-sm font-black transition hover:-translate-y-1 hover:bg-indigo-500"
              >
                f
              </Link>

              <Link
                href="#"
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-sm font-black transition hover:-translate-y-1 hover:bg-sky-500"
              >
                in
              </Link>

              <Link
                href="#"
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-sm font-black transition hover:-translate-y-1 hover:bg-slate-700"
              >
                X
              </Link>

              <Link
                href="#"
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-sm font-black transition hover:-translate-y-1 hover:bg-red-500"
              >
                ▶
              </Link>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
              <p className="font-bold">Need a tutor?</p>
              <p className="mt-2 text-sm text-slate-400">
                Start learning with verified tutors today.
              </p>

              <Link
                href="/tutors"
                className="mt-4 inline-flex rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105"
              >
                Browse Tutors
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-400">
            © 2026 TutorHub. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400">
            <Link href="/privacy-policy" className="hover:text-indigo-300">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-indigo-300">
              Terms & Conditions
            </Link>

            <Link href="/support" className="hover:text-indigo-300">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;