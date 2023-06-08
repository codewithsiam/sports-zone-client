import React from 'react';
import useUsers from '../../../Hooks/useUsers';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const ManageUsers = () => {
    const [users] = useUsers();
    console.log("sdf",users)


    return (
        <div>
            <h1 className="text-2xl font-semibold ">Manage Users</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                        <tr key={index}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <img src={user?.photoUrl}  />
                            </td>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <th>
                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                            </th>
                            <th>
                            <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                            </th>
                        </tr>
                          )}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;