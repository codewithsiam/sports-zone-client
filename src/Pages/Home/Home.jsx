import React from 'react';
import useClasses from '../../Hooks/useClasses';
import Banner from './Banner/Banner';
import TopClasses from './TopClasses/TopClasses';
import TopInstructors from './TopInstructors/TopInstructors';

const Home = () => {

    const [classes] = useClasses();

    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center text-xl md:text-4xl font-bold text-primary mt-20'>Top Classes </h1>
            <div className='h-full md:w-9/12 mx-auto mt-20'>
                <TopClasses></TopClasses>

            <TopInstructors></TopInstructors>
            </div>
        </div>
    );
};

export default Home;