import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/50 to-white px-4 py-12">
      {/* Soft Background Decoration */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-indigo-300/30 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-300/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="carousel w-full rounded-[2rem] bg-white p-3 shadow-2xl">
          {/* Slide 1 */}
          <div
            id="slide1"
            className="carousel-item relative h-[620px] w-full overflow-hidden rounded-[1.5rem] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-transparent" />

            <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-16">
              <div className="max-w-2xl rounded-[2rem] border border-white/20 bg-white/10 p-7 text-white backdrop-blur-md sm:p-10">
                <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold">
                  🎓 Learn With Expert Tutors
                </p>

                <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  Find The Best Tutor For Your Learning Journey
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                  Connect with trusted tutors, book learning sessions, and
                  improve your academic skills with personal guidance.
                </p>

                <Link
                  href="/tutors"
                  className="mt-9 inline-flex rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 text-sm font-black text-white shadow-lg shadow-indigo-500/40 transition hover:-translate-y-1"
                >
                  Browse Tutors
                </Link>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 z-20 flex gap-3">
              <a href="#slide3" className="btn btn-circle border-0 bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-slate-900">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle border-0 bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-slate-900">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            id="slide2"
            className="carousel-item relative h-[620px] w-full overflow-hidden rounded-[1.5rem] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/85 via-purple-950/55 to-transparent" />

            <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-16">
              <div className="max-w-2xl rounded-[2rem] border border-white/20 bg-white/10 p-7 text-white backdrop-blur-md sm:p-10">
                <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold">
                  💻 Online & Home Tutoring
                </p>

                <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  Book Flexible Sessions Anytime, Anywhere
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                  Choose your subject, select your tutor, and start learning
                  through online or offline tutoring sessions.
                </p>

                <Link
                  href="/tutors"
                  className="mt-9 inline-flex rounded-full bg-white px-8 py-3 text-sm font-black text-indigo-700 shadow-lg transition hover:-translate-y-1 hover:bg-slate-100"
                >
                  Find Tutors
                </Link>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 z-20 flex gap-3">
              <a href="#slide1" className="btn btn-circle border-0 bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-slate-900">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle border-0 bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-slate-900">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            id="slide3"
            className="carousel-item relative h-[620px] w-full overflow-hidden rounded-[1.5rem] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-cyan-950/55 to-transparent" />

            <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-16">
              <div className="max-w-2xl rounded-[2rem] border border-white/20 bg-white/10 p-7 text-white backdrop-blur-md sm:p-10">
                <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold">
                  🚀 Smart Learning Support
                </p>

                <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  Improve Your Skills Step By Step
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                  Get support for exam preparation, academic subjects, language
                  learning, and skill development.
                </p>

                <Link
                  href="/tutors"
                  className="mt-9 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-sm font-black text-white shadow-lg shadow-cyan-500/40 transition hover:-translate-y-1"
                >
                  Explore Tutors
                </Link>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 z-20 flex gap-3">
              <a href="#slide2" className="btn btn-circle border-0 bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-slate-900">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle border-0 bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-slate-900">
                ❯
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl">
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-indigo-100 text-2xl">
              🎓
            </div>
            <p className="text-sm font-black text-indigo-600">
              Verified Tutors
            </p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">
              Learn from trusted experts
            </h3>
            <p className="mt-3 leading-7 text-slate-500">
              Quality tutors for academic and skill-based learning.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl">
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-purple-100 text-2xl">
              📅
            </div>
            <p className="text-sm font-black text-purple-600">
              Easy Booking
            </p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">
              Book your session quickly
            </h3>
            <p className="mt-3 leading-7 text-slate-500">
              Smooth booking experience for students and tutors.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl">
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-100 text-2xl">
              🚀
            </div>
            <p className="text-sm font-black text-cyan-600">
              Smart Learning
            </p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">
              Improve skills with guidance
            </h3>
            <p className="mt-3 leading-7 text-slate-500">
              Step-by-step support for better learning results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;