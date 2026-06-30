import React from 'react';
import ProfileItem from '../Components/ProfileItem';
import Spinner from '../Components/Spinner';

const ProfilePage = () => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <ProfileItem user={user} />;
        </div>
    );
};

export default ProfilePage;