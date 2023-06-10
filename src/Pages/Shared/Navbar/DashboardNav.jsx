import React, { useContext, useState } from 'react';
import { FaArrowCircleRight, FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


const DashboardNav = () => {
    const { user } = useContext(AuthContext);
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
                    to="addAClass"
                    className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                >
                    Add A Class
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="myClasses"
                    className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                >
                   My Classes
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="paymentHistory"
                    className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                >
                    PaymentHistory
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
                    Hi, {user?.displayName}
                </h1>
                <ul className='mt-10'>
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default DashboardNav;