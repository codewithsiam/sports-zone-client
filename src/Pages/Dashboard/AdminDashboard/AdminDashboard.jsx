import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const AdminDashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1 className="text-2xl font-semibold ">Hi. {user?.displayName}</h1>
            admin dashboard
        </div>
    );
};

export default AdminDashboard;