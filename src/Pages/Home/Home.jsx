import React, { useContext } from 'react';
import useClasses from '../../Hooks/useClasses';
import Banner from './Banner/Banner';
import TopClasses from './TopClasses/TopClasses';
import TopInstructors from './TopInstructors/TopInstructors';
import { ToggleContext } from '../../Provider/ToggleProvider';
import Community from './Community/Community';

const Home = () => {
const {isDark} = useContext(ToggleContext);
    return (
        <div>
            <Banner></Banner>
            <h1 className={`text-center text-xl md:text-4xl font-bold ${isDark ? "text-indigo-100" : "text-primary"} mt-20`}>Popular Classes </h1>
            <div className='h-full md:w-9/12 mx-auto mt-20'>
                <TopClasses></TopClasses>
                <h1 className={`text-center text-xl md:text-4xl font-bold ${isDark ? "text-indigo-100" : "text-primary"} my-20`}>Popular Instructors </h1>
            <TopInstructors></TopInstructors>
            </div>
            <Community></Community>
        </div>
    );
};

export default Home;