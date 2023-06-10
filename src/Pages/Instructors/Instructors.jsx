import React from 'react';
import useInstructors from '../../Hooks/useInstructors';

const Instructors = () => {
    const [instructors] = useInstructors();
    console.log("inst", instructors);
    return (
        <div>
             <h2 className='text-xl md:text-3xl font-bold text-center my-4 text-primary '>Instructors</h2>
            <div className='grid grid-cols-3 w-11/12 mx-auto mt-10'>
                {
                    instructors?.map(ins =>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={ins?.photoURL} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name: {ins?.name}</h2>
                                <p>Email: {ins?.email}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">See Classes</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Instructors;