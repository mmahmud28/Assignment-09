import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4">
      <h1 className="text-8xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-2 text-center max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}