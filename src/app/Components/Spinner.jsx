import React from "react";

const Spinner = ({ text = "Loading MediQueue..." }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-4 text-white">
      {/* Background Glow */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-indigo-500/30 blur-[130px]" />
      <div className="absolute bottom-16 right-10 h-72 w-72 rounded-full bg-pink-500/30 blur-[130px]" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="relative flex flex-col items-center">
        {/* Main Glass Box */}
        <div className="relative flex h-56 w-56 items-center justify-center rounded-[3rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-2xl">
          {/* Soft Inner Glow */}
          <div className="absolute h-44 w-44 rounded-full bg-indigo-500/20 blur-2xl" />

          {/* Outer Ring */}
          <div
            className="absolute h-44 w-44 rounded-full border-4 border-transparent border-t-indigo-400 border-r-purple-400"
            style={{ animation: "spin 1.8s linear infinite" }}
          />

          {/* Middle Ring */}
          <div
            className="absolute h-34 w-34 rounded-full border-4 border-transparent border-b-pink-400 border-l-cyan-400"
            style={{
              width: "8.5rem",
              height: "8.5rem",
              animation: "spin 2.4s linear infinite reverse",
            }}
          />

          {/* Inner Dashed Ring */}
          <div
            className="absolute h-24 w-24 rounded-full border-2 border-dashed border-white/30"
            style={{ animation: "spin 4s linear infinite" }}
          />

          {/* Orbit Dots */}
          <div
            className="absolute h-48 w-48 rounded-full"
            style={{ animation: "spin 3.2s linear infinite" }}
          >
            <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/70" />
            <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-pink-400 shadow-lg shadow-pink-400/70" />
          </div>

          <div
            className="absolute h-36 w-36 rounded-full"
            style={{ animation: "spin 2.6s linear infinite reverse" }}
          >
            <span className="absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/70" />
            <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/70" />
          </div>

          {/* Center Logo */}
          <div className="relative z-10 grid h-20 w-20 place-items-center rounded-[1.7rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-3xl font-black text-white shadow-2xl shadow-indigo-500/40">
            M
          </div>

          {/* Pulse Border */}
          <div className="absolute h-20 w-20 animate-ping rounded-[1.7rem] bg-indigo-400/20" />
        </div>

        {/* Text Area */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-indigo-100 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Preparing your tutor data
          </div>

          <h3 className="mt-6 text-3xl font-black tracking-tight text-white">
            {text}
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-300">
            Please wait while MediQueue loads tutors, bookings, and learning
            session information.
          </p>
        </div>

        {/* Progress Bar Design */}
        <div className="mt-8 h-3 w-72 overflow-hidden rounded-full border border-white/10 bg-white/10 p-1 backdrop-blur-xl">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 shadow-lg shadow-indigo-500/40" />
        </div>

        {/* Loading Dots */}
        <div className="mt-7 flex gap-3">
          <span className="h-3 w-3 animate-bounce rounded-full bg-indigo-400" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-purple-400 [animation-delay:150ms]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-pink-400 [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
};

export default Spinner;