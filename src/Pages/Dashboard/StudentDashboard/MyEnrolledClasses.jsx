import React from 'react';
import useEnrolledClasses from '../../../Hooks/useEnrolledclasses';

const MyEnrolledClasses = () => {
    const [enrolledClasses] = useEnrolledClasses();
    // console.log('sfd', enrolledClasses[0].payClass);
    return (
        <div>
            <h1>My Enrolled Classes</h1>

            <div className='grid grid-cols-2 gap-5'>
                {enrolledClasses?.map(cls =>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='h-20 rounded-lg' src={cls?.payClass.classImage} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Class Name: {cls?.payClass.className}</h2>
                            <p>Instructor Name: {cls?.payClass.instructorName}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Continue Class</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyEnrolledClasses;