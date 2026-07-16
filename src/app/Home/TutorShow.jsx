"use client"
import React, { useEffect, useState } from "react";
import TutorCard from "../Components/TutorCard";
import Spinner from "../Components/Spinner";
import { useSession } from "../lib/auth-client";
import toast from "react-hot-toast";

const TutorShow = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.email) {
      localStorage.setItem("userEmail", session.user.email);
    }
  }, [session]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`)
      .then((res) => res.json())
      .then((data) => {
        setTutors(data.slice(0, 6)); // প্রথম ৬টি ডাটা
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  }

  if (tutors.length === 0) {
    return (
      <p className="mt-4 p-10 text-3xl text-white text-center text-gray-500">
        No Available Tutor
      </p>
    );
  }

  return (
    <section className="py-20 px-5 md:px-10 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Available Tutors
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Discover experienced tutors ready to help you achieve your academic
            goals. Choose the best tutor based on subject, availability, and
            teaching style.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center">
            <Spinner />
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tutors.map((tutor) => (
              <TutorCard
                key={tutor._id}
                tutor={tutor}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default TutorShow;