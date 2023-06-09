import React from 'react';
import useInstructorClasses from '../../../Hooks/useInstructorClasses';

const MyClasses = () => {
    const [instructorClasses] = useInstructorClasses();

    console.log('sffsdf', instructorClasses);
    return (
        <div>
            <h1>My Classes</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Feedback</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Total <br /> Enrolled <br /> Students</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {instructorClasses?.map(cls =>
                            <tr>
                                <th>1</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cls.classImage} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{cls.className}</div>

                                        </div>
                                    </div>
                                </td>
                                <td className='md:max-w-4xl h-full'>
                                    {cls.feedback}
                                </td>
                                <td>{cls.price}</td>
                                <td>{cls.status}</td>
                                <td>243</td>
                                <th>
                                    <button className="btn btn-info btn-xs">Update</button>
                                </th>
                            </tr>
                        )}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClasses;