"use client"
import React, { useEffect, useState } from "react";
import TutorCard from "../Components/TutorCard";

const TutorShow = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/tutors")
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
            <span className="loading loading-spinner loading-lg"></span>
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