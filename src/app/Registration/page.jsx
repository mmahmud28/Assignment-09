"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { authClient, signUp } from "../lib/auth-client";
import { useRouter } from "next/navigation";



const Page = () => {

  const router = useRouter();


  const [data, setData] = React.useState({
    name: "",
    email: "",
    photoURL: "",
  });

  const datachange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const registerData = Object.fromEntries(formData.entries());

    const { error } = await signUp.email({
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
      image: registerData.photoURL,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Account created successfully!");

    localStorage.setItem("userEmail", registerData.email);
    localStorage.setItem("userName", registerData.name);

    // const email = localStorage.getItem("userEmail");
    // const name = localStorage.getItem("userName");

    toast.success("Registration successful!");
    router.push("/");

    // Reg Is Completed
  };

  const handelGoogleLogin = async () => {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      })
    }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070A1A] px-4 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.28),transparent_35%)]" />
      <div className="absolute left-1/2 top-0 h-130 w-130 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Content */}
        <div className="hidden lg:block">
          <div className="mb-7 inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-cyan-200 backdrop-blur-xl">
            Create your TutorHub profile
          </div>

          <h1 className="max-w-3xl text-6xl font-black leading-[1.05] tracking-tight">
            Start learning with a{" "}
            <span className="bg-linear-to-r from-cyan-300 via-indigo-300 to-pink-300 bg-clip-text text-transparent">
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
                  data.photoURL ||
                  "https://randomuser.me/api/portraits/men/58.jpg"
                }
                alt="Profile preview"
                className="h-24 w-24 rounded-[28px] border-4 border-white/15 object-cover shadow-xl"
              />

              <div>
                <h2 className="text-2xl font-black">
                  {data.name || "Sakib Chowdhury"}
                </h2>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  {data.email || "sakib.chowdhury@gmail.com"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Register Card */}
        <div className="mx-auto w-full max-w-md">
          <div className="relative rounded-[36px] border border-white/10 bg-white/8 p-2 shadow-2xl backdrop-blur-2xl">
            <div className="absolute -inset-px rounded-[36px] bg-linear-to-br from-cyan-400/30 via-indigo-500/20 to-pink-500/30 blur-xl" />

            <div className="relative rounded-[30px] border border-white/10 bg-slate-950/85 p-7 sm:p-8">
              <div className="text-center">
                <Link href="/" className="inline-flex">
                  <div className="grid h-16 w-16 place-items-center rounded-3xl bg-linear-to-br from-cyan-400 via-indigo-500 to-pink-500 text-3xl font-black shadow-lg shadow-indigo-500/40">
                    T
                  </div>
                </Link>

                <h2 className="mt-6 text-4xl font-black">Create Account</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Register with your basic information.
                </p>
              </div>

              <form onSubmit={handleRegister} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={data.name}
                    onChange={datachange}
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
                    placeholder="sakib.chowdhury@gmail.com"
                    value={data.email}
                    onChange={datachange}
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
                    required
                    placeholder="••••••••"
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
                    value={data.photoURL}
                    onChange={datachange}
                    placeholder="https://randomuser.me/api/portraits/men/58.jpg"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:bg-white/15 focus:ring-4 focus:ring-cyan-400/10"
                  />
                </div>


                <button
                  type="submit"
                  className="w-full rounded-2xl bg-linear-to-r from-cyan-400 via-indigo-500 to-pink-500 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Create Account
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