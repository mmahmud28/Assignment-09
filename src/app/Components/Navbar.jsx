"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { signOut } from "../lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const handelLogout = async () => {
    await signOut();

    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");

    toast.success("Logout successful!");

    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
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

            <ul className="menu dropdown-content z-[100] mt-4 w-72 rounded-3xl text-black bg-white p-4 shadow-2xl">
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
                <Link href="/Login" className="btn btn-outline btn-primary">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/Registration" className="btn btn-primary text-white">
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
              className="dropdown-content z-[9999] mt-4 w-72 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
            >
              {/* Top Header */}
              <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
                {/* Decorative Circles */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10"></div>
                <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-white/10"></div>

                <div className="relative">
                  <p className="text-lg font-bold text-white">RD Plus</p>
                  <p className="text-sm text-indigo-100">student@gmail.com</p>
                </div>
              </div>

              {/* Menu */}
              <div className="p-3">
                <li>
                  <Link
                    href="/profile"
                    className="flex items-center rounded-2xl px-4 py-3 text-[15px] font-semibold text-slate-700 transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    👤
                    <span className="ml-3">Profile Page</span>
                  </Link>
                </li>

                <li className="mt-1">
                  <Link
                    href="/my-booked-sessions"
                    className="flex items-center rounded-2xl px-4 py-3 text-[15px] font-semibold text-slate-700 transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    📚
                    <span className="ml-3">My Booked Sessions</span>
                  </Link>
                </li>

                <div className="my-3 border-t border-slate-200"></div>

                <li>
                  <button onClick={handelLogout} className="flex w-full items-center rounded-2xl px-4 py-3 font-bold text-red-500 transition-all duration-300 hover:bg-red-50">
                    🚪
                    <span className="ml-3">Logout</span>
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;