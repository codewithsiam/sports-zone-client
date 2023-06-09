import React, { useContext } from 'react';
import useAllClass from '../../Hooks/useAllClass';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import useSelectedClasses from '../../Hooks/useSelectedClasses';

const AllClasses = () => {
    const { user } = useContext(AuthContext);
    const [allClass] = useAllClass();
    const [selectedClasses, refetch] = useSelectedClasses();

    const handleSelectClass = (cls) => {
        const isExist = selectedClasses.find(slcls => slcls._id === cls._id);
        
        if (user && !isExist) {
            let classData = cls;
            delete classData._id;
            cls.studentEmail = user?.email;
            console.log(classData);

            // send data to the mongodb
            axios.post('http://localhost:5000/classes/selected', classData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    const data = response.data;
                    console.log(data);
                    if (data.insertedId) {
                        refetch();
                        Swal.fire(
                            `${classData.className} Selected Successfully!`,
                            'Your class has been added!',
                            'success'
                        );
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else {
            Swal.fire(
                `${cls.className} already added!`,
                'Select another class!',
                'error'
            );
        }
    }


    return (
        <div>
            <h2 className='text-xl md:text-3xl font-bold text-center my-4 text-primary '>All Classes</h2>
            <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto'>
                {
                    allClass?.map(cls =>
                        <div key={cls?._id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={cls?.classImage} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Class Name: {cls?.className}</h2>
                                    <p>Instructor Name: {cls?.instructorName}</p>
                                    <p>Available Seats: {cls?.availableSeats}</p>
                                    <p>Price: {cls?.price}</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleSelectClass(cls)} disabled={cls?.availableSeats == 0} className="btn btn-primary">Select Class</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllClasses;