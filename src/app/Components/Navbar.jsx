"use client";

import React from "react";
import Link from "next/link";
import { Avatar } from "@heroui/react";

const Navbar = () => {
  // Replace with your auth user
  const isLoggedIn = true;

  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/tutors">Tutors</Link>
      </li>

      {isLoggedIn && (
        <>
          <li>
            <Link href="/add-tutor">Add Tutor</Link>
          </li>

          <li>
            <Link href="/my-tutors">My Tutors</Link>
          </li>

          <li>
            <Link href="/my-booked-sessions">
              My Booked Sessions
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 lg:px-8">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-64"
          >
            {navLinks}

            {!isLoggedIn && (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>

                <li>
                  <Link href="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-primary"
        >
          TutorHub
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 font-medium">
          {navLinks}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-2">
        {!isLoggedIn ? (
          <>
            <Link href="/login" className="btn btn-outline btn-primary">
              Login
            </Link>

            <Link href="/register" className="btn btn-primary">
              Register
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer"
            >
              <Avatar
                src="https://i.pravatar.cc/150?img=3"
                name="Mahmud"
                className="w-10 h-10"
              />
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-56"
            >
              <li className="pointer-events-none text-center font-semibold">
                Mahmud
              </li>

              <li>
                <Link href="/profile">Profile</Link>
              </li>

              <li>
                <button className="text-error">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;