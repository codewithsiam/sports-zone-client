import React from 'react';
import useClasses from '../../../Hooks/useClasses';

const ManageClasses = () => {
    const [classes] = useClasses();
    console.log(classes)
    return (
        <div>
            <h1 className="text-2xl font-semibold ">Manage Classes</h1>

            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                                
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;