import React from 'react';
import useEnrolledClasses from '../../../Hooks/useEnrolledclasses';

const PaymentHistory = () => {
    const [enrolledClasses] = useEnrolledClasses();
    console.log("sdf",enrolledClasses);
    return (
        <div>
            <h1 className="text-2xl font-semibold ">Feedback</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student Name</th>
                            <th>Email</th>
                            <th>Class Name</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            enrolledClasses.map((stn, index) =>
                                <tr key={stn._id}>
                                    <th>{index + 1}</th>
                                    <td>{stn.name}</td>
                                    <td>{stn.email}</td>
                                    <td>{stn.payClass.name}</td>
                                    <td>{stn.transactionId}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;