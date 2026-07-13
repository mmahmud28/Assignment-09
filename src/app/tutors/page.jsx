"use client";

import React, { useEffect, useState } from "react";
import TutorCard from "../Components/TutorCard";
import Spinner from "../Components/Spinner";

const Page = () => {
    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchText, setSearchText] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/tutors")
            .then((res) => res.json())
            .then((data) => {
                setTutors(data);
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
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Available Tutors
                    </h2>

                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Discover experienced tutors ready to help you achieve your academic
                        goals.
                    </p>
                </div>

                <div className="mb-12 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-end">

                        {/* Search */}
                        <div className="lg:col-span-6">
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                🔍 Search Tutor
                            </label>

                            <input
                                type="text"
                                placeholder="Search by Tutor Name, Subject, Location or Teaching Mode..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                className="input input-bordered w-full rounded-xl bg-white text-gray-900 placeholder:text-gray-400 border-gray-300"
                            />

                            <p className="mt-2 text-xs text-gray-500">
                                Example: Rahim, Mathematics, Dhaka, Online
                            </p>
                        </div>

                        {/* Start Date */}
                        <div className="lg:col-span-2">
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                📅 Start Date
                            </label>

                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="input input-bordered w-full rounded-xl bg-white text-gray-900 border-gray-300"
                            />
                        </div>

                        {/* End Date */}
                        <div className="lg:col-span-2">
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                📅 End Date
                            </label>

                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="input input-bordered w-full rounded-xl bg-white text-gray-900 border-gray-300"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="lg:col-span-2 flex gap-3">
                            <button
                                className="btn flex-1 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                                Search
                            </button>

                            <button
                                className="btn btn-outline flex-1"
                                onClick={() => {
                                    setSearchText("");
                                    setStartDate("");
                                    setEndDate("");
                                }}
                            >
                                Reset
                            </button>
                        </div>

                    </div>

                    {/* Bottom */}
                    <div className="mt-6 flex flex-col gap-3 border-t pt-4 md:flex-row md:items-center md:justify-between">

                        <p className="text-gray-600">
                            Showing
                            <span className="mx-2 rounded-full bg-indigo-100 px-3 py-1 font-bold text-indigo-700">
                                {tutors.length}
                            </span>
                            Tutors
                        </p>

                        <div className="flex flex-wrap gap-2">

                            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                                Tutor Name
                            </span>

                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                Subject
                            </span>

                            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                                Location
                            </span>

                            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                                Teaching Mode
                            </span>

                            <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-700">
                                Date Range
                            </span>

                        </div>

                    </div>
                </div>

                {loading ? (
                    <div className="text-center">
                        <Spinner/>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {tutors.map((tutor) => (
                            <TutorCard key={tutor._id} tutor={tutor} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Page;