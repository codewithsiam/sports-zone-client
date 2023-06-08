import React, { useContext, useState } from 'react';
import { FaArrowCircleRight, FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


const DashboardNav = () => {
    const { user } = useContext(AuthContext);

    const Menus = [
        { title: "Dashboard", src: "adminDashboard" },
        { title: "Dashboard", src: "instructorDashboard" },
        { title: "Dashboard", src: "userDashboard" },
        { title: "My Selected Classes", src: "userDashboard" },
        { title: "My Enrolled Classes", src: "userDashboard" },
        { title: "Add A Class", src: "Chat" },
        { title: "Total Enrolled Students ", src: "Calendar" },
        { title: "Feedback", src: "Calendar" },
        { title: "Manage Classes", src: "Calendar" },
        { title: "Manage Users", src: "Calendar" },
    ];

    const navItems = (
        <>
            <li>
                <NavLink
                    to="mySelectedClasses" 
                    className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                >
                    My Selected Classes
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="myEnrolledClasses" 
                    className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                >
                    My Enrolled Classes
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="addClass" 
                    className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                >
                    Add A Class
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="totalEnrolledStudents" 
                    className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                >
                    Total Enrolled Students
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="feedback" 
                    className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                >
                    Feedback
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="manageClasses" 
                    className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                >
                    Manage Classes
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="manageUsers" 
                    className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                >
                    Manage Users
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/" 
                    className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                >
                  Home
                </NavLink>
            </li>
        </>
    );
    return (
        <div
            className="w-72 bg-dark-purple h-full p-5  pt-8 relative"
        >
            <div className="items-center">

                <h1
                    className={`text-white origin-left font-medium text-xl `}
                >
                    Sports Zone
                </h1>
                <ul className='mt-10'>
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default DashboardNav;