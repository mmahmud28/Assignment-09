"use client"
import React from 'react';
import ProfileItem from '../Components/ProfileItem';
import Spinner from '../Components/Spinner';

const ProfilePage = () => {

    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch("http://localhost:5000/users?email=mehjabin.akter@gmail.com")
            .then(response => response.json())
            .then(data => {
                setUser(data); // ✅ data is an object
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Spinner />;
    }

    console.log("ddddd",user);
    

    return (
        <div>
            <ProfileItem user={user} />;
        </div>
    );
};

export default ProfilePage;