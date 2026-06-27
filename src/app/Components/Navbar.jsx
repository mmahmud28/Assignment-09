"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";


const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 shadow-sm backdrop-blur-xl">
      <nav className="navbar mx-auto max-w-7xl px-4 py-3">
        {/* Left Logo */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <details className="dropdown lg:hidden">
            <summary className="btn btn-ghost btn-circle">
              <svg
                className="h-6 w-6 text-slate-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>

            <ul className="menu dropdown-content z-[100] mt-4 w-72 rounded-3xl bg-white p-4 shadow-2xl">
              <li>
                <Link href="/" className="font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tutors" className="font-semibold">
                  Tutors
                </Link>
              </li>
              <li>
                <Link href="/add-tutor" className="font-semibold">
                  Add Tutor
                </Link>
              </li>
              <li>
                <Link href="/my-tutors" className="font-semibold">
                  My Tutors
                </Link>
              </li>
              <li>
                <Link href="/my-booked-sessions" className="font-semibold">
                  My Booked Sessions
                </Link>
              </li>

              <div className="divider my-2" />

              <li>
                <Link href="/login" className="btn btn-outline btn-primary">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="btn btn-primary text-white">
                  Register
                </Link>
              </li>
            </ul>
          </details>

          {/* Website Name */}
          <Link href="/" className="ml-2 flex items-center gap-3 lg:ml-0">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-xl font-black text-white shadow-lg">
              T
            </div>

            <div>
              <h1 className="text-xl font-black tracking-tight text-slate-900">
                TutorHub
              </h1>
              <p className="hidden text-xs font-medium text-slate-500 sm:block">
                Find your best tutor
              </p>
            </div>
          </Link>
        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 rounded-full bg-slate-100/80 px-3 py-2">
            <li>
              <Link
                href="/"
                className="rounded-full px-4 font-semibold text-slate-700 hover:bg-white hover:text-primary"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/tutors"
                className="rounded-full px-4 font-semibold text-slate-700 hover:bg-white hover:text-primary"
              >
                Tutors
              </Link>
            </li>

            <li>
              <Link
                href="/add-tutor"
                className="rounded-full px-4 font-semibold text-slate-700 hover:bg-white hover:text-primary"
              >
                Add Tutor
              </Link>
            </li>

            <li>
              <Link
                href="/my-tutors"
                className="rounded-full px-4 font-semibold text-slate-700 hover:bg-white hover:text-primary"
              >
                My Tutors
              </Link>
            </li>

            <li>
              <Link
                href="/my-booked-sessions"
                className="rounded-full px-4 font-semibold text-slate-700 hover:bg-white hover:text-primary"
              >
                My Booked Sessions
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-3">
          {/* Login/Register Design */}
          <div className="hidden items-center gap-2 md:flex">


            <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-primary/30 hover:shadow-xl">
              <Link
                href="/Login"
                className="font-bold text-white"
              >
                Login
              </Link>

            </Button>



            <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-primary/30 hover:shadow-xl">
              <Link
                href="/Registration"
                className="font-bold text-white shadow-lg shadow-primary/30"
              >
                Registration
              </Link>
            </Button>




          </div>

          {/* User Profile Dropdown Design */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1 shadow-md transition hover:shadow-lg"
            >

              <Image
                src="https://i.pravatar.cc/150?img=32"
                alt="User"
                width={36}
                height={36}
                className="rounded-full border-2 border-indigo-500 object-cover"
              />

              <span className="hidden pr-2 text-sm font-bold text-slate-700 md:block">
                RD Plus
              </span>
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-[100] mt-4 w-64 rounded-3xl bg-white p-4 shadow-2xl"
            >
              <div className="mb-3 rounded-2xl bg-gradient-to-r from-indigo-50 to-pink-50 p-4">
                <p className="font-bold text-slate-800">RD Plus</p>
                <p className="text-xs text-slate-500">student@gmail.com</p>
              </div>

              <li>
                <Link href="/profile" className="font-semibold">
                  Profile Page
                </Link>
              </li>

              <li>
                <Link href="/my-booked-sessions" className="font-semibold">
                  My Booked Sessions
                </Link>
              </li>

              <div className="divider my-2" />

              <li>
                <button className="font-bold text-red-500">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;