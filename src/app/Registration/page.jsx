"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    role: "user",
    preferredLearningMode: "Online",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070A1A] px-4 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.28),transparent_35%)]" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Content */}
        <div className="hidden lg:block">
          <div className="mb-7 inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-cyan-200 backdrop-blur-xl">
            Create your TutorHub profile
          </div>

          <h1 className="max-w-3xl text-6xl font-black leading-[1.05] tracking-tight">
            Start learning with a{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-300 bg-clip-text text-transparent">
              smarter tutor experience
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build your profile, choose your preferred learning mode, and get
            ready to connect with expert tutors.
          </p>

          <div className="mt-10 rounded-[34px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center gap-5">
              <Image
              width={96}
              height={96}
                src={
                  formData.photoURL ||
                  "https://randomuser.me/api/portraits/men/58.jpg"
                }
                alt="Profile preview"
                className="h-24 w-24 rounded-[28px] border-4 border-white/15 object-cover shadow-xl"
              />               

              <div>
                <h2 className="text-2xl font-black">
                  {formData.name || "Sakib Chowdhury"}
                </h2>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  {formData.email || "sakib.chowdhury@gmail.com"}
                </p>

                <div className="mt-4 flex gap-3">
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase text-cyan-200">
                    {formData.role}
                  </span>

                  <span className="rounded-full border border-pink-300/20 bg-pink-300/10 px-4 py-2 text-xs font-black uppercase text-pink-200">
                    {formData.preferredLearningMode}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Register Card */}
        <div className="mx-auto w-full max-w-md">
          <div className="relative rounded-[36px] border border-white/10 bg-white/[0.08] p-2 shadow-2xl backdrop-blur-2xl">
            <div className="absolute -inset-px rounded-[36px] bg-gradient-to-br from-cyan-400/30 via-indigo-500/20 to-pink-500/30 blur-xl" />

            <div className="relative rounded-[30px] border border-white/10 bg-slate-950/85 p-7 sm:p-8">
              <div className="text-center">
                <Link href="/" className="inline-flex">
                  <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-500 text-3xl font-black shadow-lg shadow-indigo-500/40">
                    T
                  </div>
                </Link>

                <h2 className="mt-6 text-4xl font-black">Create Account</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Register with your basic information.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Sakib Chowdhury"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:bg-white/15 focus:ring-4 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sakib.chowdhury@gmail.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:bg-white/15 focus:ring-4 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    name="photoURL"
                    value={formData.photoURL}
                    onChange={handleChange}
                    placeholder="https://randomuser.me/api/portraits/men/58.jpg"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:bg-white/15 focus:ring-4 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white outline-none transition focus:border-cyan-400 focus:bg-white/15 focus:ring-4 focus:ring-cyan-400/10"
                  >
                    <option className="bg-slate-950" value="user">
                      User
                    </option>
                    <option className="bg-slate-950" value="tutor">
                      Tutor
                    </option>
                    <option className="bg-slate-950" value="admin">
                      Admin
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-bold text-slate-300">
                    Preferred Learning Mode
                  </label>

                  <div className="grid grid-cols-3 gap-3">
                    {["Online", "Offline", "Hybrid"].map((mode) => (
                      <label
                        key={mode}
                        className={`cursor-pointer rounded-2xl border px-3 py-4 text-center text-xs font-black transition ${
                          formData.preferredLearningMode === mode
                            ? "border-cyan-300 bg-cyan-300/15 text-cyan-200 ring-4 ring-cyan-400/10"
                            : "border-white/10 bg-white/10 text-slate-400 hover:bg-white/15"
                        }`}
                      >
                        <input
                          type="radio"
                          name="preferredLearningMode"
                          value={mode}
                          checked={formData.preferredLearningMode === mode}
                          onChange={handleChange}
                          className="hidden"
                        />
                        {mode}
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Create Account
                </button>
              </form>

              <p className="mt-7 text-center text-sm font-medium text-slate-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-black text-cyan-300 hover:text-cyan-200"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;