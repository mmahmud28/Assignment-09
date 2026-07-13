"use client";

import React, { useEffect, useState } from "react";
import ProfileItem from "../Components/ProfileItem";
import Spinner from "../Components/Spinner";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");

    if (!email) {
      setLoading(false);
      return;
    }

    fetch(`http://localhost:5000/users?email=${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return (
      <div className="py-10 text-center">
        <h2 className="text-xl font-semibold">User not found</h2>
      </div>
    );
  }

  console.log("User:", user);

    return (
        <div>
            <ProfileItem user={user} />;
        </div>
    );
};

export default ProfilePage;