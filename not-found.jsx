import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-4 py-12 text-white">
      {/* Glow Background */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-indigo-500/30 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-pink-500/30 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* 404 Badge */}
        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
          <span className="text-5xl font-black">404</span>
        </div>

        <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-indigo-200 backdrop-blur-md">
          Page Not Found
        </div>

        <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
          Oops! This Learning Page Got Lost
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          The page you are looking for does not exist, may have been moved, or
          the link might be incorrect. Let&apos;s take you back to the right
          learning path.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 text-sm font-black text-white shadow-lg shadow-indigo-500/40 transition hover:-translate-y-1"
          >
            Back To Home
          </Link>

          <Link
            href="/tutors"
            className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-black text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900"
          >
            Browse Tutors
          </Link>
        </div>

        {/* Bottom Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-indigo-500/20 text-2xl">
              🎓
            </div>
            <h3 className="font-black">Find Tutors</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Explore expert tutors for your subject.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-purple-500/20 text-2xl">
              📅
            </div>
            <h3 className="font-black">Book Sessions</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Schedule learning sessions easily.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-500/20 text-2xl">
              🚀
            </div>
            <h3 className="font-black">Keep Learning</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Continue your journey with TutorHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;