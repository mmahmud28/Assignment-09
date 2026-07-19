"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-red-500">
        Something went wrong!
      </h1>

      <p className="mt-4 text-gray-500 max-w-md text-center">
        {error?.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-8 px-6 py-3 bg-primary text-white rounded-lg"
      >
        Try Again
      </button>
    </div>
  );
}