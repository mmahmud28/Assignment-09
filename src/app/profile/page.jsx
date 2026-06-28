import React from 'react';
import ProfileItem from '../Components/ProfileItem';

const ProfilePage = () => {
    const user = {
        _id: "USER-001",
        name: "RD Plus",
        email: "student@gmail.com",
        photoURL: "https://i.pravatar.cc/300?img=12",
        role: "user",
        provider: "email",
        createdAt: "2026-06-28",
        lastLoginAt: "2026-06-28",
    };
    return (
        <div>
            <ProfileItem user={user} />;
        </div>
    );
};

export default ProfilePage;