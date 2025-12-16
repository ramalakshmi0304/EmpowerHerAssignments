import React from 'react'
import { useEffect, useState } from 'react';

const UserData = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchUser = async ()=>{
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching user data", error);
            } finally {
                setLoading(false);

            }

        };
        fetchUser();

    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }



    return (
        <div>
            <h2>User Data</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
        </div>
    );
};

export default UserData;