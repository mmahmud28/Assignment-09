"use client";

import React, { useEffect, useState } from "react";
import TutorCard from "../Components/TutorCard";
import Spinner from "../Components/Spinner";

const Page = () => {
    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);

    const [keyword, setKeyword] = useState("");
    const [searchText, setSearchText] = useState("");

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        const fetchTutors = async () => {
            try {
                const res = await fetch(`${process.env.SERVER_URL}/tutors`);
                const data = await res.json();
                setTutors(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTutors();
    }, []);

    const filteredTutors = tutors.filter((tutor) => {
        const search = searchText.toLowerCase().trim();

        const matchSearch =
            tutor.tutorName?.toLowerCase().includes(search) ||
            tutor.subject?.toLowerCase().includes(search) ||
            tutor.location?.toLowerCase().includes(search) ||
            tutor.teachingMode?.toLowerCase().includes(search);

        // NOTE:
        // যদি createdAt বা availableDate না থাকে,
        // তাহলে এই Date Filter কাজ করবে না।

        let matchDate = true;

        if (startDate && endDate && tutor.createdAt) {
            const tutorDate = new Date(tutor.createdAt);
            matchDate =
                tutorDate >= new Date(startDate) &&
                tutorDate <= new Date(endDate);
        }

        return matchSearch && matchDate;
    });

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <Spinner />
            </div>
        );
    }

    return (
        <section className="bg-gray-50 py-20 px-5 md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-14 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Available Tutors
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-500">
                        Discover experienced tutors ready to help you achieve your
                        academic goals.
                    </p>
                </div>

                {/* Search Box */}
                <div className="mb-12 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">

                    <div className="grid grid-cols-1 gap-5 items-end lg:grid-cols-12">

                        {/* Search */}
                        <div className="lg:col-span-6">
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                🔍 Search Tutor
                            </label>

                            <input
                                type="text"
                                placeholder="Search by Tutor Name, Subject, Location or Teaching Mode..."
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                className="input input-bordered w-full rounded-xl bg-white text-gray-900"
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
                                className="input input-bordered w-full rounded-xl bg-white"
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
                                className="input input-bordered w-full rounded-xl bg-white"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 lg:col-span-2">

                            <button
                                onClick={() => setSearchText(keyword)}
                                className="btn flex-1 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                                Search
                            </button>

                            <button
                                className="btn text-black bg-amber-200 hover:text-white bg-amber-900 btn-outline flex-1"
                                onClick={() => {
                                    setKeyword("");
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
                                {filteredTutors.length}
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

                {/* Tutor List */}
                {filteredTutors.length === 0 ? (
                    <div className="rounded-2xl bg-white py-20 text-center shadow">

                        <h2 className="text-3xl font-bold text-gray-700">
                            No Tutor Found 😔
                        </h2>

                        <p className="mt-3 text-gray-500">
                            Try another search keyword or reset the filters.
                        </p>

                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredTutors.map((tutor) => (
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

export default Page;